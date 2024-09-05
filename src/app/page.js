// src/app/page.js (or wherever your main layout is)
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardsSection from "@/components/CardsSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardsSection /> 
    </>
  );
};

export default HomePage;
