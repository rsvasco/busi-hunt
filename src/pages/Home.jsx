import Hero from "../components/Hero";
import ProcessSection from "../components/ProcessSection";
import FeatureSplit from "../components/FeatureSplit";
import FeaturesGrid from "../components/FeaturesGrid";
import CTASection from "../components/CTASection";
import UltraCTA from "../components/UltraCTA";
import Tagline from "../components/Tagline";
import PremiumRedCardsSection from "../components/RedCards";
import TestimonialSection from "../components/TestimonialSection";
import GrowthSection from "../components/GrowthSection";

export default function Home() {
  return (
    <>
      <div className="pt-20">
        <Hero />
      </div>
      <ProcessSection />
      <FeatureSplit />
      <Tagline />
      <FeaturesGrid />
      <PremiumRedCardsSection />
      <TestimonialSection />
      <GrowthSection />
      <CTASection />
      <UltraCTA />
    </>
  );
}