import Navbar from "@/components/layouts/navbar";
import Hero from "@/components/sections/Hero";
import AboutOctoreq from "@/components/sections/about-octoreq";
import WhyBusinesses from "@/components/sections/why-businesses";
import FoundingProgram from "@/components/sections/founding-program";
import Mission from "@/components/sections/mission";
import Benefits from "@/components/sections/benefits";
import Timeline from "@/components/sections/timeline";
import FAQ from "@/components/sections/faq";
import ApplicationCTA from "@/components/sections/application-cta";
import Waitlist from "@/components/sections/waitlist";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutOctoreq />
      <WhyBusinesses />
      <FoundingProgram />
      <Mission />
      <Benefits />
      <Timeline />
      <FAQ />
      <ApplicationCTA />
      <Waitlist />
    </main>
  );
}