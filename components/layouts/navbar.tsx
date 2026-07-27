import Container from "./container";

export default function Navbar() {
  return (
    <header className="border-b border-border">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              OCTOREQ
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>

            <a href="#benefits" className="text-sm font-medium hover:text-primary">
              Benefits
            </a>

            <a href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <a
  href="#waitlist"
  className="rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
>
  Apply
</a>
        </div>
      </Container>
    </header>
  );
}