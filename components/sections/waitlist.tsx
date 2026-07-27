"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  waitlistSchema,
  type WaitlistSchema,
} from "@/lib/validations/waitlist";

import { joinWaitlist } from "@/app/actions/join-waitlist";

export default function Waitlist() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      country: "",
    },
  });

  async function onSubmit(data: WaitlistSchema) {
    setError("");

    const result = await joinWaitlist(data);

    if (result.success) {
      setSuccess(true);
      reset();
      return;
    }

    setError(result.error);
  }

  if (success) {
    return (
      <section id="waitlist" className="pb-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-10 text-center">
            <h2 className="text-3xl font-bold">
              🎉 You're on the waitlist!
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Thank you for joining the OCTOREQ Founding Partner Waitlist.
              We'll keep you updated on our progress and send you an invitation
              when the Founding Partner Program officially launches.
            </p>

            <Button
              className="mt-8"
              onClick={() => {
                setSuccess(false);
                setError("");
              }}
            >
              Join Another Person
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="waitlist" className="pb-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Join the Waitlist
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Reserve Your Spot
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join the OCTOREQ Founding Partner Waitlist today. We'll keep you
              informed about our progress and invite you to the Partner Portal
              when onboarding officially begins.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-5"
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium"
              >
                Full Name
              </label>

              <Input
                id="fullName"
                placeholder="John Doe"
                {...register("fullName")}
              />

              {errors.fullName && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email Address
              </label>

              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium"
              >
                Company <span className="text-muted-foreground">(Optional)</span>
              </label>

              <Input
                id="company"
                placeholder="Acme Inc."
                {...register("company")}
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-medium"
              >
                Country
              </label>

              <Input
                id="country"
                placeholder="Nigeria"
                {...register("country")}
              />

              {errors.country && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.country.message}
                </p>
              )}
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Joining..."
                : "Join the Founding Partner Waitlist"}
            </Button>

            <p className="text-center text-xs leading-6 text-muted-foreground">
              We'll only send you updates about the OCTOREQ Founding Partner
              Program and product launch. No spam. You can unsubscribe at any
              time.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}