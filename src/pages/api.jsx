import React from 'react';
import Layout from '@theme/Layout';

import HeroSectionAPIs from '../components/api/HeroSectionAPIs';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Homepage() {
    return (
        <Layout
            description="Documentation and OpenAPI specifications for Elastic Path's Composable APIs"
            wrapperClassName="homepage flex flex-col"
            noFooter
        >

            <HeroSectionAPIs />

            <HomeFooter />
        </Layout>
    );
}
