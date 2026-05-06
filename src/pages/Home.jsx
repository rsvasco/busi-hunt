import Hero from "../components/Hero";
import ProcessSection from "../components/ProcessSection";
import FeatureSplit from "../components/FeatureSplit";
import FeaturesGrid from "../components/FeaturesGrid";
import CTASection from "../components/CTASection";
import UltraCTA from "../components/UltraCTA";
import Tagline from "../components/Tagline";
import PremiumRedCardsSection from "../components/RedCards";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <FeatureSplit />
      <Tagline />
      <FeaturesGrid />
      <PremiumRedCardsSection />
      <TestimonialSection />
      <CTASection />
      <UltraCTA />
    </>
  );
}