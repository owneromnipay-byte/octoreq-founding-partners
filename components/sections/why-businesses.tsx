import Container from "@/components/layouts/container";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const problems = [
  {
    title: "Too Many Providers",
    description:
      "Businesses often rely on multiple payment and commerce providers, creating unnecessary complexity.",
  },
  {
    title: "Fragmented Operations",
    description:
      "Managing payments, reconciliation, payouts, and commerce tools across different platforms slows growth.",
  },
  {
    title: "Difficult Integrations",
    description:
      "Every new provider means more development work, maintenance, and operational overhead.",
  },
];

export default function WhyBusinesses() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Why Businesses Need OCTOREQ
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Businesses deserve a simpler way to grow.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            As a Founding Partner, you'll be looking for businesses that face challenges like these. Understanding these pain points will help you identify merchants who could benefit from OCTOREQ when we launch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <Card key={problem.title}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  {problem.title}
                </h3>

                <p className="mt-4 text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}