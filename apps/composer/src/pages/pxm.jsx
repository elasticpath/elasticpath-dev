import React from 'react';
import Layout from '@theme/Layout';
import PXMHero from '../components/LandingPages/PXMHero';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Pxm() {
    return (
        <Layout
            description="Documentation and OpenAPI specifications for Elastic Path's Composable APIs"
            wrapperClassName="homepage flex flex-col"
            noFooter
        >
            <PXMHero />

            <HomeFooter />
        </Layout>
    );
}
