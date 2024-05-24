import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/homepage/HeroSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import HomeFooter from '../components/homepage/HomeFooter';
import CallToAction from '../components/homepage/CallToAction';
import HelpSection from "../components/homepage/HelpSection";

export default function Homepage() {
  return (
      <Layout
          description="Elastic Path delivers the speed and flexibility commerce teams need to tackle today's toughest challenges."
          wrapperClassName="homepage bg-gradient-to-br from-[#0e1520] via-purple-900 to-green-700"
          noFooter
      >
              <HeroSection/>
                  <APIReferenceSection/>
                  <CallToAction/>
                  <HelpSection/>
              <HomeFooter/>
      </Layout>
);
}
