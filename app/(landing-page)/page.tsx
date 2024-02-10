import Navbar from '@/components/navbar/navbart'
import React from 'react';
import HeroSection from './hero-section';
import SecondScetion from './second-section';
import ThirdSection from './third-section';
import FourthSection from './fourth-section';
import FifthSection from './fifth-section';
import SixSection from './sixth-section';
import SeventSection from './seventh-section';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SecondScetion/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixSection/>
      <SeventSection/>
    </div>
  )
}

export default LandingPage