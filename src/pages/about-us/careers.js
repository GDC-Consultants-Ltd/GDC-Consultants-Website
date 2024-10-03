// pages/about-us/who-we-are.js

import React from "react";
import Header from "@/components/Header";
import "../../app/globals.css";
import Footer from "@/components/Footer";
import JoinOurTeam from "@/components/about/JoinOurTeam";
import JobList from "@/components/about/JobList";
import CareerForm from "@/components/about/CareerForm";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";

const Careers = () => {
  return (
    <>
      <Head>
        <title>Careers at GDC Consultants | Join Our Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at GDC Consultants. Join our team of professionals in architecture, engineering, and project management across New Zealand."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://gdcgroup.netlify.app/about-us/careers"
        />

        {/* hreflang tags */}
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/about-us/careers"
          hreflang="en-nz"
        />
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/about-us/careers"
          hreflang="en"
        />
      </Head>
      <Header />
      <JoinOurTeam />
      {/* <JobList /> */}
      <CareerForm />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Careers;
