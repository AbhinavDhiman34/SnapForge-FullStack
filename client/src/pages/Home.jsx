import React from 'react';
import HeroSection from '../components/Home/Hero';
import ServicesToolsSection from '../components/Home/ServiceTools';
import AboutUs from '../components/Home/HeroAbout';
import Footer from '../components/Global/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ServicesToolsSection />
      <Footer />
      
    </>
  );
};

export default Home;
