import Container from "@/components/layouts/container";
import {
  FileText,
  GraduationCap,
  Rocket,
  Store,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    description:
      "Submit your application to join the OCTOREQ Founding Partner Program.",
  },
  {
    icon: GraduationCap,
    title: "Prepare",
    description:
      "Receive updates, learn about the platform, and understand how OCTOREQ helps businesses.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "When OCTOREQ launches, approved Founding Partners receive access to the Partner Portal and onboarding resources.",
  },
  {
    icon: Store,
    title: "Grow",
    description:
      "Begin introducing businesses to OCTOREQ and grow alongside the platform as it expands.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Your Journey
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            What Happens Next?
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Here's what you can expect after becoming a Founding Partner.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border p-6"
              >
                <div className="absolute right-5 top-5 text-sm font-bold text-muted-foreground">
                  0{index + 1}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}