import React from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { UpcomingEvents } from "../../components/UpcomingEvents/UpcomingEvents";
import { EventTicketing } from "../../components/EventTicketing/EventTicketing";
import { Footer } from "../../components/Footer/Footer";


export const Events = () => {
  return (
    <div>
      <HeroSection />
      <UpcomingEvents />
      <EventTicketing />
      <Footer />
    </div>
  );
};
