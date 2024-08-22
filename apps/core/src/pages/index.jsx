import React from "react";
import Layout from "@theme/Layout";
import HeroSection from "../components/homepage/HeroSection";
import HomeFooter from "../components/homepage/HomeFooter";
import CommerceApps from "../components/homepage/CommerceApps/CommerceApps";
import CommerceAppsMobile from "../components/homepage/CommerceApps/CommerceAppsMobile";
import ToolsForDevs from "../components/homepage/ToolsForDevs";
import Composer from "../components/homepage/Composer/Composer";
import CTA from "../components/homepage/CTA";
import Success from "../components/homepage/Success";
import Testimonials from "../components/homepage/Testimonials";
import APIs from "../components/homepage/apis/APIs";
import AbstractBG from "../components/homepage/ui/AbstractBG";
import useLinkedinInsight from "../components/homepage/hooks/useLinkedinInsight";

export default function Homepage() {
  useLinkedinInsight();

  return (
    <div className="dev-homepage dark:bg-homepage-gradient bg-white scroll-smooth">
      <Layout
        description="Elastic Path delivers the speed and flexibility commerce teams need to tackle today's toughest challenges."
        wrapperClassName="relative homepage flex flex-col relative"
        noFooter
        noNav
      >
        <AbstractBG />

        <div className="relative z-10">
          <HeroSection />
          <div className="hidden md:block">
            <CommerceApps />
          </div>
          <div className="md:hidden">
            <CommerceAppsMobile />
          </div>
          <APIs />
          <CTA />
          <ToolsForDevs />
          <Composer />
          <CTA />
          <Success />
          <Testimonials />
          <CTA />
          <HomeFooter />
        </div>
      </Layout>
    </div>
  );
}
