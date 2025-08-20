import { FlaskConical, Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border-subtle py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <FlaskConical className="text-gold text-3xl mystical-icon" />
            <span className="text-2xl font-playfair font-bold text-gold">IdeaAlchemy</span>
          </div>
          <p className="text-foreground/60 text-lg italic font-playfair">
            "Where ideas are transmuted into reality."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h4 className="font-semibold text-gold mb-4">Contact</h4>
            <p className="text-foreground/80 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              contact@ideaalchemy.com
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-gold mb-4">Legal</h4>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-foreground/80 hover:text-gold transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-foreground/80 hover:text-gold transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-gold mb-4">Connect</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="text-foreground/80 hover:text-gold transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-foreground/80 hover:text-gold transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-foreground/80 hover:text-gold transition-colors"
                data-testid="link-github"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-border-subtle">
          <p className="text-foreground/60">
            © 2024 IdeaAlchemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
