import Container from "@/components/layouts/container";
import {
  ClipboardCheck,
  Mail,
  GraduationCap,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    icon: ClipboardCheck,
    title: "Join the Waitlist",
    description:
      "Submit your details to express your interest in becoming an OCTOREQ Founding Partner.",
  },
  {
    icon: Mail,
    title: "Stay Updated",
    description:
      "Receive important announcements, educational resources, and progress updates as we prepare for launch.",
  },
  {
    icon: GraduationCap,
    title: "Prepare for Launch",
    description:
      "Selected applicants will receive onboarding information and learn how to introduce eligible businesses to OCTOREQ.",
  },
  {
    icon: Rocket,
    title: "Launch Together",
    description:
      "When OCTOREQ officially launches, invited Founding Partners can begin participating in the program and supporting businesses as the ecosystem grows.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="border-t border-border py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            What Happens Next?
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Your Founding Partner Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Here's what you can expect after joining the Founding Partner
            Waitlist.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {timeline.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="absolute right-6 top-6 text-sm font-bold text-muted-foreground">
                  0{index + 1}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
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