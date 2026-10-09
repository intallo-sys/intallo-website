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
  return createHmac("sha256", process.env.IP_HASH_SECRET ?? "")
    .update(ip)
    .digest("hex");
}

export async function isRateLimited(ipHash: string): Promise<boolean> {
  const since = new Date(Date.now() - WINDOW_MS);
  const count = await (prisma as any).contactSubmission.count({
    where: { ipHash, createdAt: { gte: since } },
  });
  return count >= LIMIT;
}
