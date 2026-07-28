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
            Smarter Business Payments.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            OCTOREQ helps businesses accept payments more easily. Instead of
            integrating different payment providers and commerce tools one by
            one, businesses connect to OCTOREQ once and gain access to the
            services they need through a single platform.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether it's an online store, school, hotel, logistics company,
            restaurant, or any business that receives payments from customers,
            OCTOREQ is built to make modern commerce simpler, faster, and more
            reliable.
          </p>
        </div>
      </Container>
    </section>
  );
}