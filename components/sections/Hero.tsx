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

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            Become one of OCTOREQ's Founding Partners and help businesses
            discover a simpler way to access modern commerce infrastructure.
            Apply early, prepare before launch, and be ready to onboard your
            first merchants when OCTOREQ goes live.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg bg-black px-6 py-3 text-white">
              Apply Now
            </button>

            <button className="rounded-lg border px-6 py-3">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}