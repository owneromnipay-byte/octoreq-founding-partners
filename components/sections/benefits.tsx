import Container from "@/components/layouts/container";
import {
  BookOpen,
  Users,
  Rocket,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Learn Before Everyone Else",
    description:
      "Get early educational resources that help you understand OCTOREQ and how it supports businesses before the public launch.",
  },
  {
    icon: GraduationCap,
    title: "Prepare With Confidence",
    description:
      "Understand which businesses may benefit from OCTOREQ so you're ready when onboarding begins.",
  },
  {
    icon: Users,
    title: "Join the First Community",
    description:
      "Become part of an early network of professionals who share the vision of helping businesses adopt modern commerce infrastructure.",
  },
  {
    icon: Briefcase,
    title: "Build Relationships Early",
    description:
      "Use the time before launch to identify businesses in your network that could become future OCTOREQ merchants.",
  },
  {
    icon: Rocket,
    title: "Be Ready for Launch",
    description:
      "When OCTOREQ becomes publicly available, you'll already understand the platform and be prepared for the next stage of the Founding Partner Program.",
  },
  {
    icon: Sparkles,
    title: "Grow With the Ecosystem",
    description:
      "As OCTOREQ expands, you'll continue receiving updates, resources, and opportunities designed to help Founding Partners grow alongside the platform.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="border-t border-border py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Why Join the Waitlist?
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Why Join Before Launch?
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Joining the Founding Partner Waitlist gives you early access to
            information, preparation, and opportunities before OCTOREQ officially
            launches.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}