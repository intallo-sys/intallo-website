import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/client";
import { contactSchema } from "@/lib/validation/contact";
import { getClientIp, hashIp, isRateLimited } from "@/lib/rate-limit/contact";
import { sendContactNotification } from "@/lib/email/client";
import { log } from "@/lib/logger";

const MAX_BODY_BYTES = 20 * 1024;

const SUCCESS = { success: true, message: "Thanks. Your message has been received." };
const INVALID = { success: false, error: "Please check the submitted information." };
const LIMITED = { success: false, error: "Too many messages. Please try again later." };
const FAILURE = {
  success: false,
  error: "We could not send your message right now. Please try again.",
};

export async function POST(request: Request | NextRequest) {
  log("info", "contact.request_received");

  try {
    // 1. Size limit
    const declared = Number(request.headers.get("content-length") ?? 0);
    if (declared > MAX_BODY_BYTES) {
      return NextResponse.json(INVALID, { status: 413 });
    }
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json(INVALID, { status: 413 });
    }

    // 2. Parse JSON
    let body: any;
    try {
      body = JSON.parse(raw);
    } catch {
      log("warn", "contact.validation_failed", { reason: "invalid_json" });
      return NextResponse.json(INVALID, { status: 400 });
    }

    // 3. Honeypot: pretend success, store nothing
    if (typeof body?.website === "string" && body.website.trim() !== "") {
      log("info", "contact.honeypot_triggered");
      return NextResponse.json(SUCCESS, { status: 200 });
    }

    // 4. Validate
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      log("warn", "contact.validation_failed", { reason: "schema" });
      return NextResponse.json(INVALID, { status: 400 });
    }
    const data = parsed.data;

    // 5. Rate limit
    const ipHash = hashIp(getClientIp(request));
    if (await isRateLimited(ipHash)) {
      log("warn", "contact.rate_limited");
      return NextResponse.json(LIMITED, { status: 429 });
    }

    // 6. Persist first, so the lead is never lost
    const submission = await (prisma as any).contactSubmission.create({
      data: { ...data, ipHash, status: "RECEIVED" },
      select: { id: true },
    });
    log("info", "contact.submission_created");

    // 7. Notify by email; failure must not lose the lead
    try {
      const messageId = await sendContactNotification(data);
      await (prisma as any).contactSubmission.update({
        where: { id: submission.id },
        data: { status: "EMAIL_SENT", emailMessageId: messageId },
      });
      log("info", "contact.email_sent");
    } catch {
      log("error", "contact.email_failed");
      try {
        await (prisma as any).contactSubmission.update({
          where: { id: submission.id },
          data: { status: "EMAIL_FAILED" },
        });
      } catch {
        log("error", "contact.status_update_failed");
      }
    }

    // 8. Safe response
    return NextResponse.json(SUCCESS, { status: 200 });
  } catch {
    log("error", "contact.server_error"); // never log the error body or payload
    return NextResponse.json(FAILURE, { status: 500 });
  }
}
