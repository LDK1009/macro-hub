"use client";

import { Box } from "@mui/material";
import HeroSection from "./container/HeroSection";
import ServicesSection from "./container/ServicesSection";
import PricingSection from "./container/PricingSection";
import FooterSection from "./container/FooterSection";

const MainContainer = () => {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <FooterSection />
    </Box>
  );
};

export default MainContainer;
