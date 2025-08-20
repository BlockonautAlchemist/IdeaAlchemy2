import { Quote, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "IdeaAlchemy transformed my vague concept into a working prototype that impressed investors. The playbook was invaluable for our development team.",
      author: "Sarah Chen",
      role: "Founder, TechStartup",
      color: "gold"
    },
    {
      quote: "In one week, I went from idea to a demo that helped me secure pre-orders. The speed and quality exceeded my expectations completely.",
      author: "Marcus Rodriguez", 
      role: "Entrepreneur",
      color: "mystical-purple"
    },
    {
      quote: "The clarity of documentation and roadmap made it easy to hand off to my development team. They delivered exactly what they promised.",
      author: "Jessica Park",
      role: "Product Manager",
      color: "aqua-glow"
    }
  ];

  return (
    <section className="py-20 bg-card-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Success <span className="text-gold">Stories</span>
          </h2>
          <p className="text-xl text-foreground/80">Join the founders who've transformed their ideas into reality</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-card-bg rounded-xl p-8 border border-${testimonial.color}/20 relative`}
              data-testid={`testimonial-${index}`}
            >
              <div className={`absolute -top-3 -left-3 text-${testimonial.color} text-6xl opacity-30`}>
                <Quote className="w-12 h-12" />
              </div>
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-${testimonial.color}/20 rounded-full flex items-center justify-center`}>
                  <User className={`w-6 h-6 text-${testimonial.color}`} />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-foreground/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
