import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Footer } from "../../components/Footer/Footer";
import { CrowdfundingSpotlight } from "../../components/CrowdfundingSpotlight/CrowdfundingSpotlight";


export const Crowdfunding = () => {
  return (
    <div>
      <HeroSection />
      <CrowdfundingSpotlight />
      <Footer />
    </div>
  );
};
