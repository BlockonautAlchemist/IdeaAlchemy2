import { Smartphone, Scroll, Wrench, Route, CheckCircle } from "lucide-react";

export default function WhatYouReceive() {
  const deliverables = [
    {
      icon: <Smartphone className="w-8 h-8 text-gold" />,
      title: "A Working AI-Powered MVP",
      description: "Fully functional prototype showcasing your core features, built with modern frameworks and integrated AI capabilities.",
      features: [
        "Responsive web application",
        "AI integration where applicable", 
        "Demo-ready functionality"
      ],
      color: "gold"
    },
    {
      icon: <Scroll className="w-8 h-8 text-mystical-purple" />,
      title: "The Alchemist's Playbook",
      description: "Comprehensive documentation with step-by-step instructions to understand, modify, and extend your prototype.",
      features: [
        "Technical architecture overview",
        "Code walkthrough and explanations",
        "Customization guidelines"
      ],
      color: "mystical-purple"
    },
    {
      icon: <Wrench className="w-8 h-8 text-aqua-glow" />,
      title: "Tool & Service Recommendations",
      description: "Curated list of tools, services, and platforms to help you deploy, scale, and maintain your application.",
      features: [
        "Hosting and deployment options",
        "Third-party integrations",
        "Cost optimization strategies"
      ],
      color: "aqua-glow"
    },
    {
      icon: <Route className="w-8 h-8 text-gold" />,
      title: "A Clear Roadmap to Completion",
      description: "Strategic roadmap outlining next steps, feature priorities, and growth opportunities for your product.",
      features: [
        "Feature development priorities",
        "Market validation strategies",
        "Scaling considerations"
      ],
      color: "gold"
    }
  ];

  return (
    <section id="features" className="py-20 bg-card-bg/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            What You'll <span className="text-gold">Receive</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Everything you need to validate, iterate, and scale your idea
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deliverables.map((deliverable, index) => (
            <div key={index} className="bg-card-bg rounded-2xl p-8 border border-border-subtle glow-on-hover" data-testid={`deliverable-${index}`}>
              <div className="flex items-center mb-6">
                <div className={`bg-${deliverable.color}/10 w-16 h-16 rounded-xl flex items-center justify-center mr-4`}>
                  {deliverable.icon}
                </div>
                <h3 className="text-2xl font-playfair font-bold">{deliverable.title}</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {deliverable.description}
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {deliverable.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 text-${deliverable.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
