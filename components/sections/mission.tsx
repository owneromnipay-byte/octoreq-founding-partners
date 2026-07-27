import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const checklist = [
  "Learn how OCTOREQ helps businesses simplify commerce.",
  "Identify businesses that could benefit from the platform.",
  "Start building relationships with business owners.",
  "Follow product updates and partner communications.",
  "Be ready to onboard merchants after launch.",
];

export default function Mission() {
  return (
    <section id="mission" className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Your Mission Before Launch
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Prepare today.
            <br />
            Launch stronger tomorrow.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Becoming a Founding Partner isn't about waiting for launch. It's
            about preparing now so you can confidently introduce OCTOREQ to
            businesses from day one.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left Card */}
          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="text-2xl font-semibold">
              Your Role
            </h3>

            <p className="mt-5 leading-8 text-muted-foreground">
              As a Founding Partner, you'll become familiar with OCTOREQ,
              understand the types of businesses that can benefit from the
              platform, and begin building relationships before launch.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              By the time OCTOREQ officially launches, you won't be starting
              from scratch—you'll already understand the platform, know who to
              speak with, and be ready to introduce merchants with confidence.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              Our goal is simple: prepare our earliest partners for long-term
              success, not just launch day.
            </p>
          </div>

          {/* Right Card */}
          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="text-2xl font-semibold">
              Before Launch Checklist
            </h3>

            <div className="mt-8 space-y-6">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-600" />

                  <p className="leading-7 text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Every successful launch starts with preparation.
          </p>

          <Button size="lg" className="mt-6">
            Apply as a Founding Partner
          </Button>
        </div>
      </Container>
    </section>
  );
}