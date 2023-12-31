import React from 'react';

import FirstPage from '@/components/1stpage';

import Navbar from '@/components/navbar';
import Pricing from '@/components/price/pricing';
import FeatureSections from '@/components/main-page/feature-section';
import { SiteFooter } from '@/components/footer/footer';
// import LoginPage from '@/components/login/p

export default function Home() {
  return (
    <div >
      <Navbar/>
      <FirstPage/>
      <FeatureSections/>
      {/* <LoginPage/> */}
      <Pricing/>
      <SiteFooter/>
    </div>
  );
}
