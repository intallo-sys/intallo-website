import { describe, it, expect } from "vitest";
import { contactSchema } from "./contact";

describe("contactSchema", () => {
  it("validates a correct payload", () => {
    const payload = {
      name: "Valid User",
      email: "user@example.com",
      company: "Intallo",
      message: "This is a valid project inquiry message.",
    };
    const result = contactSchema.safeParse(payload);
    expect(result.success).toBe(true);
  });

  it("rejects invalid email format", () => {
    const payload = {
      name: "Valid User",
      email: "not-an-email",
      company: "Intallo",
      message: "This is a valid project inquiry message.",
    };
    const result = contactSchema.safeParse(payload);
    expect(result.success).toBe(false);
  });

  it("rejects short message", () => {
    const payload = {
      name: "Valid User",
      email: "user@example.com",
      company: "Intallo",
      message: "Short",
    };
    const result = contactSchema.safeParse(payload);
    expect(result.success).toBe(false);
  });
});
