import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  Store,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const audience = [
  {
    icon: Briefcase,
    title: "Business Professionals",
    description:
      "Consultants, business advisors, and professionals who work closely with growing businesses.",
  },
  {
    icon: Users,
    title: "Community Builders",
    description:
      "People with strong business networks who enjoy connecting others with valuable opportunities.",
  },
  {
    icon: Store,
    title: "Entrepreneurs",
    description:
      "Founders, agency owners, freelancers, and business operators who understand the needs of modern businesses.",
  },
  {
    icon: GraduationCap,
    title: "Students & Early Professionals",
    description:
      "Motivated individuals who want to learn about modern commerce and grow alongside an emerging platform.",
  },
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="border-t border-border py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Who Should Join?
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Is the Founding Partner Waitlist for you?
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're looking for people who enjoy helping businesses grow,
            building meaningful relationships, and learning about modern
            commerce before OCTOREQ launches.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {audience.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border bg-card p-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 text-primary" />

            <div>
              <h3 className="text-xl font-semibold">
                You don't need previous fintech experience.
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                If you're willing to learn and enjoy helping businesses
                discover useful technology, we'll provide the resources and
                updates to help you prepare before launch.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg">
            Join the Founding Partner Waitlist
          </Button>
        </div>
      </Container>
    </section>
  );
}