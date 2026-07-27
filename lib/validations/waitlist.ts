import { z } from "zod";

export const waitlistSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Full name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  company: z
    .string()
    .trim()
    .optional()
    .transform((value) => value || undefined),

  country: z
    .string()
    .trim()
    .min(2, "Please enter your country.")
    .max(100, "Country name is too long."),
});

export type WaitlistSchema = z.infer<typeof waitlistSchema>;