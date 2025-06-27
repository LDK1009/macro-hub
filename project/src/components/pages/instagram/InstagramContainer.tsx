"use client"

import { Box, styled } from "@mui/material";
import HeroSection from "./container/HeroSection";
import ProblemSection from "./container/ProblemSection";
import SolutionSection from "./container/SolutionSection";
import TargetSection from "./container/TargetSection";
import PricingSection from "./container/PricingSection";
import TestimonialSection from "./container/TestimonialSection";
import FaqSection from "./container/FaqSection";
import FooterSection from "./container/FooterSection";

function InstagramContainer() {
    return (
        <Container>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <TargetSection />
            <PricingSection />
            <TestimonialSection />
            <FaqSection />
            <FooterSection />
        </Container>
    );
}

export default InstagramContainer;

const Container = styled(Box)`
    width: 100%;
    height: 100%;
`;