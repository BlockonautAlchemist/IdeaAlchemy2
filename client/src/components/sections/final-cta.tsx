import { Button } from "@/components/ui/button";
import { Wand2, Mail, Clock } from "lucide-react";

export default function FinalCTA() {
  const scrollToForm = () => {
    const element = document.getElementById('idea-intake-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-mystical-gradient text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            Ready to Turn Your Idea Into <span className="text-gold">Gold</span>?
          </h2>
          <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
            Submit your idea—no obligation. We'll confirm scope before work begins.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              className="bg-gold-gradient text-background px-10 py-5 rounded-xl font-semibold text-xl hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 animate-glow"
              onClick={scrollToForm}
              data-testid="button-final-cta-primary"
            >
              <Wand2 className="w-6 h-6 mr-3" />
              Start Your Prototype
            </Button>
            <a 
              href="mailto:contact@ideaalchemy.com" 
              className="text-foreground/80 hover:text-gold transition-colors flex items-center gap-2"
              data-testid="link-email-direct"
            >
              <Mail className="w-5 h-5" />
              Or email us directly
            </a>
          </div>
          
          <p className="text-foreground/60 text-lg">
            <Clock className="inline w-5 h-5 mr-2" />
            Submit your idea—no obligation. We'll confirm scope before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
