import React from "react";
import Layout from "@theme/Layout";
import HeroSection from "../components/homepage/HeroSection";
import HomeFooter from "../components/homepage/HomeFooter";
import CommerceApps from "../components/homepage/CommerceApps/CommerceApps";
import ToolsForDevs from "../components/homepage/ToolsForDevs";
import Composer from "../components/homepage/Composer/Composer";
import CTA from "../components/homepage/CTA";
import Success from "../components/homepage/Success";
import Testimonials from "../components/homepage/Testimonials";
import APIs from "../components/homepage/APIs";
import AbstractBG from "../components/homepage/ui/AbstractBG";

export default function Homepage() {
  return (
    <Layout
      description="Elastic Path delivers the speed and flexibility commerce teams need to tackle today's toughest challenges."
      wrapperClassName="relative homepage flex flex-col relative dark:bg-homepage-gradient bg-white"
      noFooter
    >

      <AbstractBG />

      <div className="relative z-10">
        <HeroSection />
        <CommerceApps />
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
  );
}
