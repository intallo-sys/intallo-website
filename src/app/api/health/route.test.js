import { describe, it, expect } from "vitest";
import { GET } from "./route.js";

describe("GET /api/health", () => {
  it("returns status ok with 200", async () => {
    const res = await GET();
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toEqual({ status: "ok" });
  });
});
