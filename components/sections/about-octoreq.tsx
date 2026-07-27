import Container from "@/components/layouts/container";

export default function AboutOctoreq() {
  return (
    <section
      id="about"
      className="border-t border-border py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            What is OCTOREQ?
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            One Platform.
            <br />
            Modern Commerce Infrastructure.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            OCTOREQ is a unified commerce infrastructure platform that helps
            businesses access payment and commerce services through a single
            integration. Instead of managing multiple providers and fragmented
            tools, businesses can connect once and scale with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}