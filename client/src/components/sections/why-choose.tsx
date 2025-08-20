import { Zap, DollarSign, Crown, Unlock } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8 text-gold" />,
      title: "Speed That Matters",
      description: "Tangible results in under 7 days. No months of waiting—see your idea come to life fast.",
      color: "gold"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-mystical-purple" />,
      title: "Affordable Validation",
      description: "Test your concept before investing big. Fixed pricing means no surprises or budget overruns.",
      color: "mystical-purple"
    },
    {
      icon: <Crown className="w-8 h-8 text-aqua-glow" />,
      title: "Clarity & Control",
      description: "You own the prototype and all the knowledge. Complete transparency in our process and deliverables.",
      color: "aqua-glow"
    },
    {
      icon: <Unlock className="w-8 h-8 text-gold" />,
      title: "No Lock-In",
      description: "We give you the recipe, not just the result. Continue independently or work with any developer.",
      color: "gold"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Why Choose <span className="text-gold">IdeaAlchemy</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center" data-testid={`reason-${index}`}>
              <div className={`bg-${reason.color}/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">{reason.title}</h3>
              <p className="text-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
