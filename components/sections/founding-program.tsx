import Container from "@/components/layouts/container";

export default function FoundingProgram() {
  return (
    <section id="program" className="border-t border-border py-24">
      <Container>
        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            The Founding Partner Program
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Join before launch.
            <br />
            Grow with us from day one.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Before OCTOREQ officially launches, we're inviting a limited number
            of professionals to become Founding Partners. This program is
            designed to prepare you before launch so you're ready to introduce
            OCTOREQ to businesses from the very beginning.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            As a Founding Partner, you won't just wait for launch—you'll learn
            about the platform, understand which businesses can benefit, and
            begin building relationships with potential merchants ahead of time.
          </p>
        </div>
      </Container>
    </section>
  );
}