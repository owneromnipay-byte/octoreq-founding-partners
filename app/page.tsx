import Navbar from "@/components/layouts/navbar";

import Hero from "@/components/sections/Hero";
import AboutOctoreq from "@/components/sections/about-octoreq";
import WhyBusinesses from "@/components/sections/why-businesses";
import FoundingProgram from "@/components/sections/founding-program";
import Benefits from "@/components/sections/benefits";
import Timeline from "@/components/sections/timeline";
import Mission from "@/components/sections/mission";
import FAQ from "@/components/sections/faq";
import ApplicationCTA from "@/components/sections/application-cta";
import Waitlist from "@/components/sections/waitlist";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* What is OCTOREQ? */}
      <AboutOctoreq />

      {/* Businesses that can benefit */}
      <WhyBusinesses />

      {/* What is the Founding Partner Program? */}
      <FoundingProgram />

      {/* Why join before launch? */}
      <Benefits />

      {/* What happens after joining the waitlist? */}
      <Timeline />

      {/* Who should join? */}
      <Mission />

      {/* Common Questions */}
      <FAQ />

      {/* Final Call To Action */}
      <ApplicationCTA />

      {/* Waitlist Form */}
      <Waitlist />
    </main>
  );
}