// pages/about-us/who-we-are.js

import React from "react";
import Header from "@/components/Header";
import "../../app/globals.css";
import Footer from "@/components/Footer";
import ReviewHeader from "@/components/about/ReviewHeader";
import ReviewForm from "@/components/about/ReviewForm";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";

const Review = () => {
  return (
    <>
      <Head>
        <title>Leave a Review | GDC Consultants Feedback</title>
        <meta
          name="description"
          content="Share your experience with GDC Consultants. We value your feedback to help us improve our services in architecture, engineering, and project management across New Zealand."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://gdcgroup.netlify.app/about-us/review"
        />

        {/* hreflang tags */}
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/about-us/review"
          hreflang="en-nz"
        />
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/about-us/review"
          hreflang="en"
        />
      </Head>
      <Header />
      <ReviewHeader />
      <ReviewForm />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Review;
