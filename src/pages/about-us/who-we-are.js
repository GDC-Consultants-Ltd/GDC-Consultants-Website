// pages/about-us/who-we-are.js

import React from "react";
import Header from "@/components/Header";
import "../../app/globals.css";
import AboutCardSection from "@/components/about/AboutCardSection";
import OurValues from "@/components/about/OurValues";

const WhoWeAre = () => {
  return (
    <>
      <Header />
      <AboutCardSection />
      <OurValues />
    </>
  );
};

export default WhoWeAre;
