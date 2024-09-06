// src/app/page.js (or wherever your main layout is)
"use client"; // Add this line to make it a Client Component

import React from "react";
import Hero from "@/components/Hero";
import CardsSection from "@/components/CardsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CertificationSection from "@/components/CertificationSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardsSection /> 
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <CertificationSection />
    </>
  );
};

export default HomePage;
