import React from "react";
import Layout from "@theme/Layout";
import HeroSection from "../components/homepage/HeroSection";
import HomeFooter from "../components/homepage/HomeFooter";
import CommerceApps from "../components/homepage/CommerceApps";
import ToolsForDevs from "../components/homepage/ToolsForDevs";
import Composer from "../components/homepage/Composer";
import CTA from "../components/homepage/CTA";
import Success from "../components/homepage/Success";
import Testimonials from "../components/homepage/Testimonials";

export default function Homepage() {
  return (
    <Layout
      description="Elastic Path delivers the speed and flexibility commerce teams need to tackle today's toughest challenges."
      wrapperClassName="relative homepage flex flex-col relative dark:bg-homepage-gradient bg-white"
      noFooter
    >
      <div className="z-0 fixed w-[100vw] h-[100vh] top-0 dark:bg-[url('/assets/homepage/abstract-bg.webp')] bg-center bg-no-repeat bg-cover blur-lg opacity-95"></div>

      <div className="relative z-10">
        <HeroSection />
        <CommerceApps />
        <CTA />
        <ToolsForDevs />
        <Composer />
        <CTA />
        <Success />
        <Testimonials />
        <HomeFooter />
      </div>
    </Layout>
  );
}
