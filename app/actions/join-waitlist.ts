"use server";
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
import { createClient } from "@supabase/supabase-js";
import { waitlistSchema } from "@/lib/validations/waitlist";

type JoinWaitlistResult =
  | {
      success: true;
    }
  | {
      success: false;
      error: string;
    };

export async function joinWaitlist(
  data: unknown
): Promise<JoinWaitlistResult> {
  const parsed = waitlistSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Invalid form data.",
    };
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from("wpartner_waitlist").insert({
    full_name: parsed.data.fullName,
    email: parsed.data.email,
    company: parsed.data.company || null,
    country: parsed.data.country,
    source: "website",
  });

  if (error) {
    if (error.code === "23505") {
      return {
        success: false,
        error: "This email has already joined the waitlist.",
      };
    }

    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }

  return {
    success: true,
  };
}