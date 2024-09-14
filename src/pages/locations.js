// pages/about-us/who-we-are.js

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/locations/ContactSection";
import "../app/globals.css";
import MapSection from "@/components/locations/MapSection";
import ScrollToTop from "@/components/ScrollToTop";

const Locations = () => {
  return (
    <>
      <Header />
      <ContactSection />
      <MapSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Locations;
