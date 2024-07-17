import React from 'react';
import Layout from '@theme/Layout';

import Changelog from '../components/changelog/Changelog';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Homepage() {
  return (
    <Layout
      description="Changelog for Elastic Path's Composable APIs"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Changelog />

      <HomeFooter />
    </Layout>
  );
}
