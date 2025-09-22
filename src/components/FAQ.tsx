import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much does it cost to hire you?",
      answer: "We work on a contingency fee basis, which means you don't pay unless we win your case. We only get paid when you receive your compensation, and there are no upfront fees or costs."
    },
    {
      question: "How long do I have to file a claim after an accident?",
      answer: "In New York, the statute of limitations for personal injury claims is generally 3 years from the date of the accident. However, there are exceptions, and it's crucial to start the process as soon as possible to preserve evidence and strengthen your case."
    },
    {
      question: "What if the other driver doesn't have insurance?",
      answer: "If the at-fault driver is uninsured or underinsured, you may still be able to recover compensation through your own insurance policy's uninsured motorist coverage, or through other avenues. We'll explore all possible options for your case."
    },
    {
      question: "Can I still file a claim if I was partially at fault?",
      answer: "Yes, New York follows a comparative negligence rule. Even if you were partially at fault, you may still be entitled to compensation, though it may be reduced by your percentage of fault. We'll help determine the best strategy for your situation."
    },
    {
      question: "How long does the legal process typically take?",
      answer: "The timeline varies depending on the complexity of your case, the severity of injuries, and whether we can reach a settlement or need to go to trial. Simple cases may resolve in a few months, while complex cases can take 1-2 years or more. We'll keep you informed throughout the process."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Common questions, <span className="text-primary">simple answers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-montserrat leading-relaxed">
            Get answers to the most frequently asked questions about traffic accident claims.
          </p>
        </div>

        <div className="animate-scale-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-primary/20 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground font-montserrat hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-montserrat leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-elegant font-montserrat font-semibold"
          >
            Talk to a lawyer now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;