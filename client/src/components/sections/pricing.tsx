import { Button } from "@/components/ui/button";
import { CheckCircle, Plus } from "lucide-react";

export default function Pricing() {
  const scrollToForm = () => {
    const element = document.getElementById('idea-intake-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-card-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Transform Your <span className="text-gold">Idea</span> Today
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Choose the package that fits your needs. Both include everything you need to get started.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Prototype Package */}
          <div className="bg-card-bg rounded-2xl p-8 border border-border-subtle glow-on-hover relative" data-testid="pricing-prototype">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-2">Prototype Package</h3>
              <div className="text-5xl font-bold text-gold mb-4">$499</div>
              <p className="text-foreground/70">Perfect for validating your core concept</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                <span>One AI-powered MVP (no revisions)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                <span>Complete Alchemist's Playbook & documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                <span>Tool & service recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                <span>Clear roadmap with next steps</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                <span>Full code ownership</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                <span>7-day delivery guarantee</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-gold-gradient text-background py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
              onClick={scrollToForm}
              data-testid="button-pricing-prototype"
            >
              Start Your Prototype
            </Button>
          </div>
          
          {/* Pro Package */}
          <div className="bg-card-bg rounded-2xl p-8 border-2 border-gold glow-on-hover relative" data-testid="pricing-pro">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gold text-background px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-2">Pro Package</h3>
              <div className="text-5xl font-bold text-gold mb-4">$899</div>
              <p className="text-foreground/70">Enhanced package with personal guidance</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5" />
                <span><strong>Everything in Prototype Package</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <Plus className="w-5 h-5 text-mystical-purple mt-0.5" />
                <span>One revision included</span>
              </li>
              <li className="flex items-start gap-3">
                <Plus className="w-5 h-5 text-mystical-purple mt-0.5" />
                <span>30-minute walkthrough call</span>
              </li>
              <li className="flex items-start gap-3">
                <Plus className="w-5 h-5 text-mystical-purple mt-0.5" />
                <span>Priority delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <Plus className="w-5 h-5 text-mystical-purple mt-0.5" />
                <span>Enhanced documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <Plus className="w-5 h-5 text-mystical-purple mt-0.5" />
                <span>Email support for 30 days</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-gold-gradient text-background py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 animate-glow"
              onClick={scrollToForm}
              data-testid="button-pricing-pro"
            >
              Start Your Prototype
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
