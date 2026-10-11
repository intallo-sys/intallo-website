import { createHmac } from "node:crypto";
import { prisma } from "@/lib/db/client";

const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export function getClientIp(request: Request): string {
  // Only trustworthy behind a trusted proxy/CDN that sets these headers.
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function hashIp(ip: string): string {
  const secret = process.env.IP_HASH_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Missing required environment variable: IP_HASH_SECRET");
    }
    return createHmac("sha256", "dev-fallback-secret-for-testing-only")
      .update(ip)
      .digest("hex");
  }
  return createHmac("sha256", secret).update(ip).digest("hex");
}

export async function isRateLimited(ipHash: string): Promise<boolean> {
  const since = new Date(Date.now() - WINDOW_MS);
  const count = await prisma.contactSubmission.count({
    where: { ipHash, createdAt: { gte: since } },
  });
  return count >= LIMIT;
}
