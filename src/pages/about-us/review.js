// pages/about-us/who-we-are.js

import React from "react";
import Header from "@/components/Header";
import "../../app/globals.css";
import Footer from "@/components/Footer";
import ReviewHeader from "@/components/about/ReviewHeader";
import ReviewForm from "@/components/about/ReviewForm";

const Review = () => {
  return (
    <>
      <Header />
      <ReviewHeader />
      <ReviewForm />
      <Footer />
    </>
  );
};

export default Review;
