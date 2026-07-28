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
            Become an early partner.
            <br />
            Help businesses discover OCTOREQ.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            The Founding Partner Program is for people who want to help businesses
            discover OCTOREQ before its public launch. As a partner, you'll learn
            how the platform works, understand which businesses can benefit, and
            prepare to introduce OCTOREQ to your network.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A merchant is simply any business that receives payments from
            customers. This includes restaurants, supermarkets, fashion stores,
            hotels, schools, pharmacies, logistics companies, online stores,
            SaaS businesses, consultants, freelancers, propfirms , brokers  and many more.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            When OCTOREQ launches, eligible businesses you introduce can begin
            using the platform. As a Founding Partner, you'll have the opportunity
            to earn recurring commissions based on the activity of qualified
            merchants you successfully refer, in accordance with the program's
            terms.
          </p>
        </div>
      </Container>
    </section>
  );
}