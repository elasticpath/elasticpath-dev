import React from 'react';
import Layout from '@theme/Layout';
import SubsHero from '../components/LandingPages/SubscriptionsHero';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Orders() {
    return (
        <Layout
            description="Documentation and OpenAPI specifications for Elastic Path's Subscription Service"
            wrapperClassName="homepage flex flex-col"
            noFooter
        >
            <SubsHero />

            <HomeFooter />
        </Layout>
    );
}
