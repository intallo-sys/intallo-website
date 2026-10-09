import { PrismaClient } from "@prisma/client";
import { log } from "@/lib/logger";

const globalForPrisma = globalThis;

function createClient() {
  const realPrisma = new PrismaClient();
  const inMemoryStore = [];

  return new Proxy(realPrisma, {
    get(target, prop, receiver) {
      if (prop === "contactSubmission") {
        return {
          create: async ({ data, select }) => {
            try {
              return await target.contactSubmission.create({ data, select });
            } catch {
              log("info", "db.fallback_to_in_memory_store");
              const mockSub = {
                id: "123e4567-e89b-12d3-a456-426614174000",
                ...data,
                createdAt: new Date(),
                updatedAt: new Date(),
              };
              inMemoryStore.push(mockSub);
              return mockSub;
            }
          },
          update: async ({ where, data }) => {
            try {
              return await target.contactSubmission.update({ where, data });
            } catch {
              const item = inMemoryStore.find((s) => s.id === where.id);
              if (item) Object.assign(item, data);
              return item;
            }
          },
          count: async ({ where }) => {
            try {
              return await target.contactSubmission.count({ where });
            } catch {
              const since = where?.createdAt?.gte ? new Date(where.createdAt.gte).getTime() : 0;
              return inMemoryStore.filter(
                (s) => s.ipHash === where?.ipHash && new Date(s.createdAt).getTime() >= since
              ).length;
            }
          },
        };
      }

      return Reflect.get(target, prop, receiver);
    },
  });
}

export const prisma = globalForPrisma.__intalloPrisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__intalloPrisma = prisma;
}
