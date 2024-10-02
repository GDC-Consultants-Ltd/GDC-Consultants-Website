// pages/about-us/who-we-are.js

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/locations/ContactSection";
import "../app/globals.css";
import MapSection from "@/components/locations/MapSection";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";

const Locations = () => {
  return (
    <>
      <Head>
        <title>Your trusted partner in engineering consulting</title>
        <meta
          name="description"
          content="Leading engineering consulting firm offering innovative solutions for your projects. Reach out to us for expert guidance and support. Contact us now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://gdcgroup.netlify.app/locations" />
      </Head>
      <Header />
      <ContactSection />
      <MapSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Locations;
