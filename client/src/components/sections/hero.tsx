import { Button } from "@/components/ui/button";
import { Rocket, PlayCircle, CheckCircle, DollarSign, Unlock, Atom, Wand2 } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-hero-gradient alchemy-pattern pt-24 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto relative">
          {/* Floating mystical elements */}
          <div className="absolute top-8 left-10 text-gold/20 text-6xl animate-float hidden lg:block">
            <Atom className="w-16 h-16" />
          </div>
          <div className="absolute top-24 right-16 text-mystical-purple/20 text-4xl animate-float hidden lg:block" style={{animationDelay: '2s'}}>
            <Wand2 className="w-12 h-12" />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            From <span className="text-gold">Idea</span> to <span className="text-aqua-glow">Prototype</span><br />
            in Under a Week
          </h1>
          
          <p className="text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We turn your vision into a working AI-powered MVP—fast, affordable, and complete with the playbook to take it further.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="bg-gold-gradient text-background px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 animate-glow"
              onClick={() => scrollToSection('idea-intake-form')}
              data-testid="button-hero-primary"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Prototype
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-aqua-glow text-aqua-glow px-8 py-4 rounded-xl font-semibold text-lg hover:bg-aqua-glow/10 transition-all duration-300"
              onClick={() => scrollToSection('how-it-works')}
              data-testid="button-hero-secondary"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>
          
          <div className="text-foreground/60 flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              Founder-friendly
            </span>
            <span className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gold" />
              Fixed price
            </span>
            <span className="flex items-center gap-2">
              <Unlock className="w-4 h-4 text-gold" />
              No lock-in
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
