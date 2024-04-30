import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/homepage/HeroSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import HomeFooter from '../components/homepage/HomeFooter';
import CommunitySection from '../components/homepage/CommunitySection';
import HelpSection from "../components/homepage/HelpSection";

export default function Homepage() {
  return (
      <Layout
          description="Elastic Path delivers the speed and flexibility commerce teams need to tackle today's toughest challenges."
          wrapperClassName="homepage flex flex-col"
          noFooter
      >
          <div className="bg-gradient-to-tr from-rose-500 via-purple-700 to-green-700 pb-12">
              <HeroSection/>
          </div>
              <div className="pt-16">
                  <APIReferenceSection/>
              </div>
              <div className="pt-16">
                  <CommunitySection/>
              </div>
              <div className="bg-gradient-to-tr from-rose-500 via-purple-700 to-green-700">
                  <HelpSection/>
              </div>
              <HomeFooter/>
      </Layout>
);
}
