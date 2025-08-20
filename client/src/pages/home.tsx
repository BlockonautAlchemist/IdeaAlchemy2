import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import AlchemyOutcomes from "@/components/sections/alchemy-outcomes";
import HowItWorks from "@/components/sections/how-it-works";
import WhatYouReceive from "@/components/sections/what-you-receive";
import WhyChoose from "@/components/sections/why-choose";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import Testimonials from "@/components/sections/testimonials";
import IdeaIntakeForm from "@/components/sections/idea-intake-form";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <AlchemyOutcomes />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <HowItWorks />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <WhatYouReceive />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <WhyChoose />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <Pricing />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <FAQ />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <Testimonials />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <IdeaIntakeForm />
      
      {/* Energy divider */}
      <div className="energy-divider"></div>
      
      <FinalCTA />
      
      <Footer />
    </div>
  );
}
