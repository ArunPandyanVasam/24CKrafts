import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Footer } from "../../components/Footer/Footer";
import { JobListings } from "../../components/JobListings/JobListings";
import { SettingsPrivacy } from "../../components/SettingsPrivacy/SettingsPrivacy";


export const Jobs = () => {
  return (
    <div>
      <HeroSection />
      <JobListings />
      <SettingsPrivacy />
      <Footer />
    </div>
  );
};
