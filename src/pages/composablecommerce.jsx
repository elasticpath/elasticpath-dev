import React from 'react';
import Layout from '@theme/Layout';
import HomeFooter from '../components/homepage/HomeFooter';
import HeadlessCommerceCapabilities from "../components/composable/commerce-grid";
import HeroSection from "../components/composable/HeroSection";
import TwoColumnRight from "../components/composable/TwoColumnRight";
import TwoColumnLeft from "../components/composable/TwoColumnLeft";
import DeveloperGrid from "../components/composable/DeveloperGrid";
import LogoCarousel from "../components/composable/LogoCarousel";
import Products from "../components/composable/Products";
import Architecture from "../components/composable/Architecture";
import Uptime from "../components/composable/Uptime";
import StatsComponent from "../components/composable/StatsComponent";

export default function Homepage() {
  return (
    <Layout
      description="Documentation for Commerce Manager, Commerce's visual interface."
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <HeroSection/>
      <LogoCarousel/>
      <StatsComponent/>
      <HeadlessCommerceCapabilities />
      <TwoColumnRight/>
      <TwoColumnLeft/>
      <DeveloperGrid/>
      <Architecture/>
      <Products/>
      <HomeFooter />
    </Layout>
  );
}
