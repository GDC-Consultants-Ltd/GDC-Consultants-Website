// pages/about-us/who-we-are.js

import React from "react";
import Header from "@/components/Header";
import "../../app/globals.css";
import Footer from "@/components/Footer";
import JoinOurTeam from "@/components/about/JoinOurTeam";
import JobList from "@/components/about/JobList";
import CareerForm from "@/components/about/CareerForm";

const Careers = () => {
  return (
    <>
      <Header />
      <JoinOurTeam />
      <JobList />
      <CareerForm />
      <Footer />
    </>
  );
};

export default Careers;
