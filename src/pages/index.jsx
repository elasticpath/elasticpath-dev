import React from "react";
import Layout from "@theme/Layout";
import HeroSection from "../components/homepage/HeroSection";
import APIReferenceSection from "../components/homepage/APIReferenceSection";
import HomeFooter from "../components/homepage/HomeFooter";
import CommunitySection from "../components/homepage/CommunitySection";
import HelpSection from "../components/homepage/HelpSection";
import CommerceApps from "../components/homepage/CommerceApps";

export default function Homepage() {
  return (
    <Layout
      description="Elastic Path delivers the speed and flexibility commerce teams need to tackle today's toughest challenges."
      wrapperClassName="relative homepage flex flex-col relative dark:bg-homepage-gradient bg-white"
      noFooter
    >
      <div className="z-0 fixed w-[100vw] h-[100vh] top-0 dark:bg-[url('/assets/design/abstract-bg.webp')] bg-center bg-no-repeat bg-cover blur-lg opacity-95"></div>

      <div className="relative z-10">
        <HeroSection />
        <CommerceApps />
        <HomeFooter />
      </div>
    </Layout>
  );
}
