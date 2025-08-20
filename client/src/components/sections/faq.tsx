import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What counts as an MVP?",
      answer: "An MVP (Minimum Viable Product) is a functional prototype that demonstrates your core idea with the essential features needed to validate your concept. We build web applications with user interfaces, basic functionality, and AI integration where applicable—not just wireframes or designs."
    },
    {
      question: "Do I own the code?",
      answer: "Absolutely. You receive full ownership of all source code, documentation, and assets. There are no licensing restrictions—you're free to modify, distribute, or commercialize your prototype however you see fit."
    },
    {
      question: "Why no revisions in the base plan?",
      answer: "We focus on getting the scope right upfront through our detailed intake process. This allows us to deliver quickly and affordably. The Pro package includes revisions for those who need iterative refinement, while the base package is perfect for validation and learning."
    },
    {
      question: "Can you help finish the full product?",
      answer: "While our core focus is rapid prototyping, we do offer continued development services for select projects. The roadmap we provide includes recommendations for extending your prototype, whether you choose to work with us, hire a developer, or build an in-house team."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a satisfaction guarantee. If we can't deliver a functional prototype that meets the agreed scope within 7 days, you get a full refund. Once work begins and deliverables are provided, refunds are evaluated case-by-case based on project-specific circumstances."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card-bg rounded-xl border border-border-subtle px-6"
                data-testid={`faq-${index}`}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
