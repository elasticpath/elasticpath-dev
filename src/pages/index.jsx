import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import APIs from '../components/homepage/APIs';

export default function Homepage() {
  return (
    <Layout
      description="Elastic Path delivers the speed and flexibility commerce teams need to tackle today's toughest challenges."
      wrapperClassName="homepage flex flex-col"
      noFooter
    >

      <HeroSection />

      <APIs />

      <APIReferenceSection />

      <div className="z-0">
        <ResourcesSection />
      </div>

      <HomeFooter />
    </Layout>
  );
}
