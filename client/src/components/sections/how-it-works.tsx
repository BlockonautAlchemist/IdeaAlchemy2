import { Lightbulb, ServerCog, BookOpen } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      icon: <Lightbulb className="w-8 h-8 text-gold mystical-icon" />,
      title: "Share Your Vision",
      description: "Fill out our guided form with your idea details. We'll analyze your vision and confirm the scope before starting.",
      color: "gold"
    },
    {
      step: "Step 2",
      icon: <ServerCog className="w-8 h-8 text-mystical-purple mystical-icon" />,
      title: "We Build the Prototype",
      description: "Our team creates your AI-powered MVP using cutting-edge tools and proven frameworks. Delivered in under 7 days.",
      color: "mystical-purple"
    },
    {
      step: "Step 3",
      icon: <BookOpen className="w-8 h-8 text-aqua-glow mystical-icon" />,
      title: "You Own the Playbook",
      description: "Receive complete documentation, source code, and a detailed roadmap to continue development or hand off to your team.",
      color: "aqua-glow"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            The <span className="text-gold">Alchemy</span> Process
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Three simple steps to transform your idea into reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group" data-testid={`step-${index + 1}`}>
              <div className="bg-card-bg rounded-2xl p-8 border border-border-subtle glow-on-hover">
                <div className={`bg-${step.color}/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {step.icon}
                </div>
                <div className={`text-${step.color} font-bold text-lg mb-2`}>{step.step}</div>
                <h3 className="text-2xl font-playfair font-bold mb-4">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
