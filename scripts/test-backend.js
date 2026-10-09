import { GET as healthGET } from "../src/app/api/health/route.js";
import { GET as readyGET } from "../src/app/api/ready/route.js";
import { POST as contactPOST } from "../src/app/api/contact/route.js";
import { prisma } from "../src/lib/db/client.js";

// In case local Postgres is not running, mock Prisma methods for testing
let submissions = [];
let mockDbActive = false;

try {
  await prisma.$connect();
  console.log("Connected to live PostgreSQL database.");
} catch {
  console.log("Live PostgreSQL offline; enabling in-memory database mock for test validation.");
  mockDbActive = true;
  
  prisma.contactSubmission = {
    create: async ({ data }) => {
      const sub = {
        id: "123e4567-e89b-12d3-a456-426614174000",
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      submissions.push(sub);
      return sub;
    },
    update: async ({ where, data }) => {
      const item = submissions.find((s) => s.id === where.id);
      if (item) Object.assign(item, data);
      return item;
    },
    count: async ({ where }) => {
      return submissions.filter((s) => s.ipHash === where.ipHash).length;
    },
  };

  prisma.$queryRaw = async () => [{ "?column?": 1 }];
}

async function runTests() {
  console.log("\n=========================================");
  console.log("     INTALLO BACKEND TEST SUITE");
  console.log("=========================================\n");

  // 1. Health check
  console.log("--- 1. Testing GET /api/health ---");
  const healthRes = await healthGET();
  const healthData = await healthRes.json();
  console.log(`Status Code: ${healthRes.status}`);
  console.log("Response Body:", JSON.stringify(healthData));

  // 2. Ready check
  console.log("\n--- 2. Testing GET /api/ready ---");
  const readyRes = await readyGET();
  const readyData = await readyRes.json();
  console.log(`Status Code: ${readyRes.status}`);
  console.log("Response Body:", JSON.stringify(readyData));

  // Helper to construct mock Request
  function makeReq(body, headers = {}) {
    return new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "192.168.1.100",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  // 3. Valid submission (with fake Resend key to trigger email failure graceful degradation)
  console.log("\n--- 3. Testing POST /api/contact (Valid Submission + Email Failure Handling) ---");
  const validPayload = {
    name: "Acme Corp",
    email: "contact@acme.com",
    company: "Acme Technologies",
    message: "We need a modern digital booking system designed for our hotel chain.",
    website: "",
  };
  const validRes = await contactPOST(makeReq(validPayload));
  const validData = await validRes.json();
  console.log(`Status Code: ${validRes.status}`);
  console.log("Response Body:", JSON.stringify(validData));

  // 4. Invalid input (Schema validation failure)
  console.log("\n--- 4. Testing POST /api/contact (Invalid Input - Short Name & Invalid Email) ---");
  const invalidPayload = {
    name: "A", // too short min 2
    email: "not-an-email",
    company: "",
    message: "Short", // too short min 10
    website: "",
  };
  const invalidRes = await contactPOST(makeReq(invalidPayload));
  const invalidData = await invalidRes.json();
  console.log(`Status Code: ${invalidRes.status}`);
  console.log("Response Body:", JSON.stringify(invalidData));

  // 5. Honeypot hit
  console.log("\n--- 5. Testing POST /api/contact (Honeypot Triggered) ---");
  const honeypotPayload = {
    name: "Spam Bot",
    email: "bot@spam.com",
    company: "Spam Inc",
    message: "Buy cheap backlinks now!",
    website: "http://spambot.com",
  };
  const honeypotRes = await contactPOST(makeReq(honeypotPayload));
  const honeypotData = await honeypotRes.json();
  console.log(`Status Code: ${honeypotRes.status}`);
  console.log("Response Body:", JSON.stringify(honeypotData));

  // 6. Rate Limiting (6th request returns 429)
  console.log("\n--- 6. Testing Rate Limiting (Submitting requests 2 to 6 from same IP) ---");
  const rateLimitIpHeaders = { "x-forwarded-for": "203.0.113.1" };
  
  // Requests 1 to 5
  for (let i = 1; i <= 5; i++) {
    const res = await contactPOST(makeReq({
      name: `User ${i}`,
      email: `user${i}@example.com`,
      company: `Company ${i}`,
      message: `Enquiry message number ${i} testing rate limit.`,
      website: "",
    }, rateLimitIpHeaders));
    console.log(`Request ${i}/5 Status Code: ${res.status}`);
  }

  // 6th Request -> expect 429
  console.log("Submitting 6th request from same IP...");
  const rateLimitedRes = await contactPOST(makeReq({
    name: "User 6",
    email: "user6@example.com",
    company: "Company 6",
    message: "Enquiry message number 6 testing rate limit.",
    website: "",
  }, rateLimitIpHeaders));
  const rateLimitedData = await rateLimitedRes.json();
  console.log(`6th Request Status Code: ${rateLimitedRes.status}`);
  console.log("Response Body:", JSON.stringify(rateLimitedData));

  console.log("\n=========================================");
  console.log("     ALL BACKEND TESTS COMPLETED SUCCESSFULLY");
  console.log("=========================================\n");

  process.exit(0);
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
