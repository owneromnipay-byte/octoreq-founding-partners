import Container from "@/components/layouts/container";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            🚀 Applications for Founding Partners are now open
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Help Launch
            <br />
            OCTOREQ.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            OCTOREQ helps businesses accept payments through a single integration.
            As a Founding Partner, you'll introduce businesses to OCTOREQ before
            launch and earn recurring commissions when eligible merchants begin
            using the platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg bg-black px-6 py-3 text-white">
              Apply Now
            </button>

            <button className="rounded-lg border px-6 py-3">
              Learn More
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 text-sm text-muted-foreground">
            <div>
              <strong className="block text-black">
                Introduce Businesses
              </strong>
              Help businesses discover OCTOREQ.
            </div>

            <div>
              <strong className="block text-black">
                Prepare Before Launch
              </strong>
              Build your merchant network early.
            </div>

            <div>
              <strong className="block text-black">
                Earn Recurring Commissions
              </strong>
              Receive commissions as eligible merchants use OCTOREQ.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}