import { Wand2, Rocket, Code, Map } from "lucide-react";

export default function AlchemyOutcomes() {
  const outcomes = [
    {
      icon: <Wand2 className="w-10 h-10 text-gold mystical-icon" />,
      title: "Transform Ideas into Gold"
    },
    {
      icon: <Rocket className="w-10 h-10 text-aqua-glow mystical-icon" />,
      title: "Demo-Ready in Days"
    },
    {
      icon: <Code className="w-10 h-10 text-mystical-purple mystical-icon" />,
      title: "Own the Code + Playbook"
    },
    {
      icon: <Map className="w-10 h-10 text-gold mystical-icon" />,
      title: "Clarity on Next Steps"
    }
  ];

  return (
    <section className="py-16 bg-card-bg/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {outcomes.map((outcome, index) => (
            <div key={index} className="space-y-4" data-testid={`outcome-${index}`}>
              <div className="flex justify-center">
                {outcome.icon}
              </div>
              <h3 className="font-semibold text-lg">{outcome.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
