import { Hero } from "@/components/Hero";
import { DestinationCards } from "@/components/DestinationCards";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { MilesAdvisory } from "@/components/MilesAdvisory";
import { CostCalculator } from "@/components/CostCalculator";
import { Benefits } from "@/components/Benefits";
import { ProgramSteps } from "@/components/ProgramSteps";
import { OwnerProfile } from "@/components/OwnerProfile";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <DestinationCards />
      <StatsSection />
      <Testimonials />
      <MilesAdvisory />
      <CostCalculator />
      <Benefits />
      <ProgramSteps />
      <OwnerProfile />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
