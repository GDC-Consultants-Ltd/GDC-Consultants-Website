// src/app/page.js (or wherever your main layout is)
"use client"; // Add this line to make it a Client Component

import React from "react";
import Hero from "@/components/home/Hero";
import CardsSection from "@/components/home/CardsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CertificationSection from "@/components/home/CertificationSection";

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
