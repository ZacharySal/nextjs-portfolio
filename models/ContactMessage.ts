import { z } from "zod";

export const ContactMessageSchema = z.object({
  user_name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }),
  user_email: z.string().email().trim().toLowerCase(),
  message: z
    .string()
    .trim()
    .min(5, { message: "Message must be at least 5 characters" })
    .max(500, { message: "Message must not exceed 500 characters" }),
});

export type ContactMessageForm = z.infer<typeof ContactMessageSchema>;
