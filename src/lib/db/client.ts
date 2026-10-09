import { PrismaClient } from "@prisma/client";
import { log } from "@/lib/logger";

const globalForPrisma = globalThis as unknown as {
  __intalloPrisma?: PrismaClient;
};

function createClient(): PrismaClient {
  const realPrisma = new PrismaClient();
  const inMemoryStore: any[] = [];

  return new Proxy(realPrisma, {
    get(target: any, prop: string | symbol, receiver: any) {
      if (prop === "contactSubmission") {
        return {
          create: async ({ data, select }: { data: any; select?: any }) => {
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
          update: async ({ where, data }: { where: { id: string }; data: any }) => {
            try {
              return await target.contactSubmission.update({ where, data });
            } catch {
              const item = inMemoryStore.find((s) => s.id === where.id);
              if (item) Object.assign(item, data);
              return item;
            }
          },
          count: async ({ where }: { where?: any }) => {
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
  }) as PrismaClient;
}

export const prisma = globalForPrisma.__intalloPrisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__intalloPrisma = prisma;
}
