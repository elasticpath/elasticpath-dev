import React from 'react';
import Layout from '@theme/Layout';

import HeroSectionAPIs from '../components/api/HeroSectionAPIs';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Homepage() {
    return (
        <Layout
            description="Elastic Path API Documentation | Explore our open, headless commerce API with RESTful endpoints, SDKs, and tutorials for developers building scalable e-commerce experiences."
            wrapperClassName="homepage flex flex-col"
            noFooter
        >
            <HeroSectionAPIs />

            <HomeFooter />
        </Layout>
    );
}
