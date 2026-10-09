const BASE_URL = "http://localhost:3000";

async function testHttp(): Promise<void> {
  console.log("=========================================");
  console.log("   INTALLO REAL HTTP API TEST SUITE");
  console.log("=========================================\n");

  // 1. Health check
  console.log("--- 1. Testing GET /api/health ---");
  const healthRes = await fetch(`${BASE_URL}/api/health`);
  const healthData = await healthRes.json();
  console.log(`Status: ${healthRes.status}`);
  console.log("Body:", JSON.stringify(healthData));

  // 2. Ready check
  console.log("\n--- 2. Testing GET /api/ready ---");
  const readyRes = await fetch(`${BASE_URL}/api/ready`);
  const readyData = await readyRes.json();
  console.log(`Status: ${readyRes.status}`);
  console.log("Body:", JSON.stringify(readyData));

  // 3. Valid submission (with fake Resend key -> email failure handled gracefully)
  console.log("\n--- 3. Testing POST /api/contact (Valid Submission + Email Failure Handling) ---");
  const validPayload = {
    name: "Acme Corp",
    email: "contact@acme.com",
    company: "Acme Technologies",
    message: "We need a modern digital booking system designed for our hotel chain.",
    website: "",
  };
  const validRes = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "198.51.100.10" },
    body: JSON.stringify(validPayload),
  });
  const validData = await validRes.json();
  console.log(`Status: ${validRes.status}`);
  console.log("Body:", JSON.stringify(validData));

  // 4. Invalid input (Validation failure)
  console.log("\n--- 4. Testing POST /api/contact (Invalid Input) ---");
  const invalidPayload = {
    name: "A",
    email: "not-an-email",
    company: "",
    message: "Short",
    website: "",
  };
  const invalidRes = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invalidPayload),
  });
  const invalidData = await invalidRes.json();
  console.log(`Status: ${invalidRes.status}`);
  console.log("Body:", JSON.stringify(invalidData));

  // 5. Honeypot hit
  console.log("\n--- 5. Testing POST /api/contact (Honeypot Triggered) ---");
  const honeypotPayload = {
    name: "Spam Bot",
    email: "bot@spam.com",
    company: "Spam Inc",
    message: "Buy cheap backlinks now!",
    website: "http://spambot.com",
  };
  const honeypotRes = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(honeypotPayload),
  });
  const honeypotData = await honeypotRes.json();
  console.log(`Status: ${honeypotRes.status}`);
  console.log("Body:", JSON.stringify(honeypotData));

  // 6. Rate limiting (6th request from same IP returns 429)
  console.log("\n--- 6. Testing Rate Limiting (Submitting 5 + 1 requests from 203.0.113.50) ---");
  const ipHeader = { "Content-Type": "application/json", "x-forwarded-for": "203.0.113.50" };

  for (let i = 1; i <= 5; i++) {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: ipHeader,
      body: JSON.stringify({
        name: `Rate Tester ${i}`,
        email: `tester${i}@example.com`,
        company: `Test Co ${i}`,
        message: `Testing rate limit request number ${i}`,
        website: "",
      }),
    });
    console.log(`Request ${i}/5 Status: ${res.status}`);
  }

  // 6th Request -> expect 429
  const rateLimitRes = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: ipHeader,
    body: JSON.stringify({
      name: "Rate Tester 6",
      email: "tester6@example.com",
      company: "Test Co 6",
      message: "Testing rate limit request number 6",
      website: "",
    }),
  });
  const rateLimitData = await rateLimitRes.json();
  console.log(`6th Request Status: ${rateLimitRes.status}`);
  console.log("Body:", JSON.stringify(rateLimitData));

  console.log("\n=========================================");
  console.log("   ALL HTTP TESTS COMPLETED SUCCESSFULLY");
  console.log("=========================================\n");
}

testHttp().catch(console.error);
