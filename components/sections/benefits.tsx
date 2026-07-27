import Container from "@/components/layouts/container";
import {
  BookOpen,
  Rocket,
  Users,
  BadgeCheck,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Early Learning",
    description:
      "Gain a strong understanding of OCTOREQ before launch through partner resources and updates.",
  },
  {
    icon: Users,
    title: "Founding Community",
    description:
      "Join an early network of professionals preparing to grow alongside the platform.",
  },
  {
    icon: BadgeCheck,
    title: "Founding Recognition",
    description:
      "Be recognized as one of OCTOREQ's earliest partners and help shape the ecosystem from the beginning.",
  },
  {
    icon: Rocket,
    title: "Launch Readiness",
    description:
      "Be prepared to introduce merchants confidently when OCTOREQ officially launches.",
  },
  {
    icon: Briefcase,
    title: "Business Opportunities",
    description:
      "Identify and build relationships with businesses before launch so you're ready when the platform goes live.",
  },
  {
    icon: ArrowUpRight,
    title: "Grow With OCTOREQ",
    description:
      "As the platform evolves, grow your knowledge, network, and opportunities alongside it.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Why Join Early?
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Benefits of Becoming a Founding Partner
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Joining before launch gives you the opportunity to learn, prepare,
            and position yourself to make the most of OCTOREQ from day one.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
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