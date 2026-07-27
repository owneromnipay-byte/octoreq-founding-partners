import Container from "@/components/layouts/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the OCTOREQ Founding Partner Program?",
    answer:
      "The Founding Partner Program is an opportunity to join OCTOREQ before launch, learn about the platform, and prepare to introduce businesses to OCTOREQ when it becomes publicly available.",
  },
  {
    question: "Is OCTOREQ available today?",
    answer:
      "Not yet. OCTOREQ is currently preparing for launch. Founding Partners receive updates, educational resources, and onboarding guidance before the public release.",
  },
  {
    question: "Who can apply?",
    answer:
      "Anyone interested in helping businesses adopt modern commerce infrastructure can apply. This includes consultants, agencies, entrepreneurs, developers, sales professionals, and business advisors.",
  },
  {
    question: "Is there a cost to apply?",
    answer:
      "No. Applying to become an OCTOREQ Founding Partner is completely free.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Our team will review your application. Approved applicants will receive updates, preparation resources, and an invitation to access the OCTOREQ Partner Portal when it launches.",
  },
  {
    question: "Can I recommend businesses before launch?",
    answer:
      "Yes. We encourage Founding Partners to begin identifying businesses that could benefit from OCTOREQ. Formal onboarding will begin once the platform officially launches.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to know
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Here are answers to the most common questions about becoming an
            OCTOREQ Founding Partner.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}