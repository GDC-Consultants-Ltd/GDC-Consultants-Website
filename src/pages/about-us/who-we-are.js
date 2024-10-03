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
import Head from "next/head";

const WhoWeAre = () => {
  return (
    <>
      <Head>
        <title>
          Elevate your projects with our Development Engineering Consultants
        </title>
        <meta
          name="description"
          content="Discover expert Development Engineering Consultants dedicated to delivering innovative solutions. Our team ensures quality and efficiency in every project. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://gdcgroup.netlify.app/about-us/who-we-are"
        />

        {/* hrefLang tags */}
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/about-us/who-we-are"
          hrefLang="en-nz"
        />
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/about-us/who-we-are"
          hrefLang="en"
        />
      </Head>
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
