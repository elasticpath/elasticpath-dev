import React from 'react';
import Layout from '@theme/Layout';
import OrdersHero from '../components/LandingPages/OrdersHero';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Orders() {
    return (
        <Layout
            description="Documentation and OpenAPI specifications for Elastic Path's Carts, Checkout and Orders Services"
            wrapperClassName="homepage flex flex-col"
            noFooter
        >
            <OrdersHero />

            <HomeFooter />
        </Layout>
    );
}
