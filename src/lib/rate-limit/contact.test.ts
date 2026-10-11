import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("@/lib/db/client", () => ({
  prisma: {
    contactSubmission: {
      count: vi.fn(),
    },
  },
}));

import { prisma } from "@/lib/db/client";
import { getClientIp, hashIp, isRateLimited } from "./contact";

describe("rate-limit/contact", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("getClientIp", () => {
    it("extracts the first IP from x-forwarded-for", () => {
      const req = new Request("http://localhost", {
        headers: { "x-forwarded-for": "203.0.113.195, 70.41.3.18, 150.172.238.178" },
      });
      expect(getClientIp(req)).toBe("203.0.113.195");
    });

    it("falls back to x-real-ip if x-forwarded-for is missing", () => {
      const req = new Request("http://localhost", {
        headers: { "x-real-ip": "198.51.100.1" },
      });
      expect(getClientIp(req)).toBe("198.51.100.1");
    });

    it("returns 'unknown' when no proxy headers are present", () => {
      const req = new Request("http://localhost");
      expect(getClientIp(req)).toBe("unknown");
    });
  });

  describe("hashIp", () => {
    it("hashes IP with IP_HASH_SECRET when provided", () => {
      process.env.IP_HASH_SECRET = "super-secret-key-123";
      const hash1 = hashIp("192.168.1.1");
      const hash2 = hashIp("192.168.1.1");
      const hash3 = hashIp("192.168.1.2");

      expect(hash1).toBe(hash2);
      expect(hash1).not.toBe(hash3);
      expect(hash1).toHaveLength(64);
    });

    it("safely falls back without throwing in production if IP_HASH_SECRET is missing", () => {
      delete process.env.IP_HASH_SECRET;
      delete process.env.DATABASE_URL;
      delete process.env.RESEND_API_KEY;
      (process.env as Record<string, string | undefined>).NODE_ENV = "production";

      const hash = hashIp("192.168.1.1");
      expect(hash).toHaveLength(64);
    });

    it("uses ephemeral fallback secret in non-production environments when secret is missing", () => {
      delete process.env.IP_HASH_SECRET;
      delete process.env.DATABASE_URL;
      delete process.env.RESEND_API_KEY;
      (process.env as Record<string, string | undefined>).NODE_ENV = "test";

      const hash = hashIp("192.168.1.1");
      expect(hash).toHaveLength(64);
    });
  });

  describe("isRateLimited", () => {
    it("returns false when submissions count is below limit (5)", async () => {
      vi.mocked(prisma.contactSubmission.count).mockResolvedValueOnce(3);
      const limited = await isRateLimited("test-hash-1");
      expect(limited).toBe(false);
    });

    it("returns true when submissions count meets or exceeds limit (5)", async () => {
      vi.mocked(prisma.contactSubmission.count).mockResolvedValueOnce(5);
      const limited = await isRateLimited("test-hash-2");
      expect(limited).toBe(true);
    });

    it("falls back to in-memory rate limiter when database count throws an error", async () => {
      vi.mocked(prisma.contactSubmission.count).mockRejectedValue(new Error("DB offline"));
      const testIp = "test-db-offline-ip";

      // First 5 requests pass in memory
      for (let i = 0; i < 5; i++) {
        const limited = await isRateLimited(testIp);
        expect(limited).toBe(false);
      }

      // 6th request is throttled by in-memory rate limiter
      const limited6th = await isRateLimited(testIp);
      expect(limited6th).toBe(true);
    });
  });
});
