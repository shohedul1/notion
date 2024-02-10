import Navbar from '@/components/navbar/navbart'
import React from 'react';
import HeroSection from './hero-section';
import SecondScetion from './second-section';
import ThirdSection from './third-section';
import FourthSection from './fourth-section';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SecondScetion/>
      <ThirdSection/>
      <FourthSection/>
    </div>
  )
}

export default LandingPage