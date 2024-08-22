import React from 'react';
import Layout from '@theme/Layout';

import HeroSectionAPIs from '../components/cm/HeroSectionCM';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Homepage() {
    return (
        <Layout
            description="Documentation for Commerce Manager, Commerce's visual interface."
            wrapperClassName="homepage flex flex-col"
            noFooter
        >
            <HeroSectionAPIs />

            <HomeFooter />
        </Layout>
    );
}
