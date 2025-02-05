import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Footer } from "../../components/Footer/Footer";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";


export const Profile = () => {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <VideoPlayer videoFile="sample.mp4" />
      <Footer />
    </div>
  );
};
