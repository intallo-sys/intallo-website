import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().max(254).email(),
  company: z.string().trim().min(1).max(150),
  message: z.string().trim().min(10).max(5000),
});

export type ContactSubmission = z.infer<typeof contactSchema>;
