import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock3, MailCheck, Users } from "lucide-react";

export default function ApplicationCTA() {
  return (
    <section id="apply" className="py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Ready to Join?
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Become an OCTOREQ
                <br />
                Founding Partner
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Join an early community of professionals preparing to help
                businesses adopt OCTOREQ from day one. Start preparing today and
                be among the first to receive partner resources and launch
                updates.
              </p>
              <a
  href="#waitlist"
  className="inline-block mt-8"
>
  <Button size="lg">
    Join the Waitlist
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</a>
            </div>

            {/* Right */}
            <div className="space-y-6 rounded-2xl border border-border p-6">
              <h3 className="text-xl font-semibold">
                What happens after you join?
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MailCheck className="mt-1 h-5 w-5 shrink-0" />

                  <div>
                    <h4 className="font-medium">Application Review</h4>

                    <p className="text-sm text-muted-foreground">
                      Every waitlist application is reviewed as we prepare our
                      Founding Partner community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0" />

                  <div>
                    <h4 className="font-medium">Receive Updates</h4>

                    <p className="text-sm text-muted-foreground">
                      Get launch announcements, partner resources, and platform
                      updates directly in your inbox.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="mt-1 h-5 w-5 shrink-0" />

                  <div>
                    <h4 className="font-medium">Partner Portal Invitation</h4>

                    <p className="text-sm text-muted-foreground">
                      When OCTOREQ launches, approved Founding Partners will be
                      invited to access the Partner Portal and begin onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}