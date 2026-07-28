import Container from "@/components/layouts/container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Store,
  ShoppingBag,
  Hotel,
  GraduationCap,
  Truck,
  Briefcase,
} from "lucide-react";

const businesses = [
  {
    icon: Store,
    title: "Retail Stores",
    description:
      "Supermarkets, pharmacies, electronics stores, and other retail businesses that receive customer payments every day.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Businesses",
    description:
      "Online stores looking for a simpler way to access modern payment and commerce services.",
  },
  {
    icon: Hotel,
    title: "Restaurants & Hospitality",
    description:
      "Restaurants, cafés, hotels, and hospitality businesses that serve customers and accept payments regularly.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Institutions",
    description:
      "Educational institutions that collect tuition, application fees, and other payments.",
  },
  {
    icon: Truck,
    title: "Logistics & Service Businesses",
    description:
      "Delivery companies, transport operators, and service providers that receive payments from customers.",
  },
  {
    icon: Briefcase,
    title: "Professional Businesses",
    description:
      "Consultants, agencies, freelancers, healthcare providers, SaaS companies, and other growing businesses.",
  },
];

export default function WhyBusinesses() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Businesses You Can Help
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Who can benefit from OCTOREQ?
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            As a Founding Partner, you'll help businesses discover OCTOREQ.
            These are some of the businesses that may benefit from the platform
            after launch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => {
            const Icon = business.icon;

            return (
              <Card
                key={business.title}
                className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {business.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {business.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-border bg-card p-8 text-center">
          <h3 className="text-2xl font-semibold">
            A merchant is simply any business that receives payments from customers.
          </h3>

          <p className="mt-4 text-muted-foreground leading-8">
            If you know businesses like these, you already know potential
            merchants who may benefit from OCTOREQ after launch. As a Founding
            Partner, your role is to help introduce eligible businesses to the
            platform and grow alongside the OCTOREQ ecosystem.
          </p>
        </div>
      </Container>
    </section>
  );
}