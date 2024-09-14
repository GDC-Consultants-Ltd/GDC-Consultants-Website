// pages/about-us/who-we-are.js

import React from "react";
import Header from "@/components/Header";
import "../../app/globals.css";
import AboutCardSection from "@/components/about/AboutCardSection";
import OurValues from "@/components/about/OurValues";
import LogoSlider from "@/components/about/LogoSlider";
import SubContact from "@/components/SubContact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const WhoWeAre = () => {
  return (
    <>
      <Header />
      <AboutCardSection />
      <LogoSlider />
      <OurValues />
      <SubContact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default WhoWeAre;
