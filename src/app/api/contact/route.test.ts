import { describe, it, expect, vi } from "vitest";

vi.mock("@/lib/db/client", () => ({
  prisma: {
    contactSubmission: {
      create: vi.fn().mockResolvedValue({ id: "sub_mock123" }),
      update: vi.fn().mockResolvedValue({ id: "sub_mock123" }),
      count: vi.fn().mockResolvedValue(0),
    },
  },
}));

vi.mock("@/lib/email/client", () => ({
  sendContactNotification: vi.fn().mockResolvedValue("msg_mock123"),
}));

import { prisma } from "@/lib/db/client";
import { sendContactNotification } from "@/lib/email/client";
import { POST } from "./route";

describe("POST /api/contact", () => {
  function makeReq(body: any, headers: Record<string, string> = {}) {
    return new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.50",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  it("handles valid submissions gracefully", async () => {
    const payload = {
      name: "Unit Test User",
      email: "test@example.com",
      company: "Testing Inc",
      message: "This is a unit test message body.",
      website: "",
    };
    const res = await POST(makeReq(payload));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it("triggers honeypot when website field is filled", async () => {
    const payload = {
      name: "Spam Bot",
      email: "bot@spam.com",
      company: "Spam Inc",
      message: "Spam message payload",
      website: "http://spam.com",
    };
    const res = await POST(makeReq(payload));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it("returns 400 for invalid inputs", async () => {
    const payload = {
      name: "A",
      email: "invalid-email",
      company: "",
      message: "Short",
      website: "",
    };
    const res = await POST(makeReq(payload));
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.success).toBe(false);
  });

  it("saves lead to database and returns 200 even if email notification fails", async () => {
    vi.mocked(sendContactNotification).mockRejectedValueOnce(new Error("SMTP down"));
    const payload = {
      name: "Fallback Test User",
      email: "fallback@example.com",
      company: "Fallback Inc",
      message: "Testing email failure fallback behavior.",
      website: "",
    };
    const res = await POST(makeReq(payload));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(prisma.contactSubmission.update).toHaveBeenCalledWith({
      where: { id: "sub_mock123" },
      data: { status: "EMAIL_FAILED" },
    });
  });

  it("sends email and returns 200 even if database persistence fails", async () => {
    vi.mocked(prisma.contactSubmission.create).mockRejectedValueOnce(new Error("DB connection pool full"));
    vi.mocked(sendContactNotification).mockResolvedValueOnce("msg_success_email");

    const payload = {
      name: "DB Fallback User",
      email: "dbfallback@example.com",
      company: "DB Fallback Inc",
      message: "Testing DB failure when email still delivers successfully.",
      website: "",
    };
    const res = await POST(makeReq(payload));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(sendContactNotification).toHaveBeenCalled();
  });

  it("returns 500 only when both database persistence and email notification fail", async () => {
    vi.mocked(prisma.contactSubmission.create).mockRejectedValueOnce(new Error("DB offline"));
    vi.mocked(sendContactNotification).mockRejectedValueOnce(new Error("Email provider offline"));

    const payload = {
      name: "Dual Failure User",
      email: "dualfailure@example.com",
      company: "Dual Failure Inc",
      message: "Testing catastrophic failure when both DB and email fail.",
      website: "",
    };
    const res = await POST(makeReq(payload));
    const data = await res.json();
    expect(res.status).toBe(500);
    expect(data.success).toBe(false);
  });

  it("returns 429 when client is rate limited", async () => {
    vi.mocked(prisma.contactSubmission.count).mockResolvedValueOnce(5);

    const payload = {
      name: "Rate Limited User",
      email: "ratelimited@example.com",
      company: "Rate Limit Inc",
      message: "Testing 429 rate limiting response from contact API.",
      website: "",
    };
    const res = await POST(makeReq(payload));
    const data = await res.json();
    expect(res.status).toBe(429);
    expect(data.success).toBe(false);
    expect(data.error).toBe("Too many messages. Please try again later.");
  });
});
