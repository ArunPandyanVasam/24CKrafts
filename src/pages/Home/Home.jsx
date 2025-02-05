import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Footer } from "../../components/Footer/Footer";
import { TopTalents } from "../../components/TopTalents/TopTalents";


export const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopTalents />
      <Footer />
    </div>
  );
};
