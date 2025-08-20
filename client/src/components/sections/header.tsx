import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FlaskConical } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border-subtle">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FlaskConical className="text-gold text-2xl mystical-icon" />
          <span className="text-xl font-playfair font-bold text-gold">IdeaAlchemy</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-foreground/80 hover:text-gold transition-colors"
            data-testid="nav-features"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-foreground/80 hover:text-gold transition-colors"
            data-testid="nav-how-it-works"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-foreground/80 hover:text-gold transition-colors"
            data-testid="nav-pricing"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-foreground/80 hover:text-gold transition-colors"
            data-testid="nav-faq"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-foreground/80 hover:text-gold transition-colors"
            data-testid="nav-contact"
          >
            Contact
          </button>
        </div>
        
        <Button 
          className="bg-gold-gradient text-background px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 glow-on-hover"
          data-testid="button-header-start"
          onClick={() => scrollToSection('idea-intake-form')}
        >
          Start Your Prototype
        </Button>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card-bg border-t border-border-subtle">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')} 
              className="block text-foreground/80 hover:text-gold"
              data-testid="nav-mobile-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block text-foreground/80 hover:text-gold"
              data-testid="nav-mobile-how-it-works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="block text-foreground/80 hover:text-gold"
              data-testid="nav-mobile-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block text-foreground/80 hover:text-gold"
              data-testid="nav-mobile-faq"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block text-foreground/80 hover:text-gold"
              data-testid="nav-mobile-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
