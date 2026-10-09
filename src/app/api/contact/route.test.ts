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
});
