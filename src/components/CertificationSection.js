// components/CertificationSection.js
"use client"; // Ensure this is treated as a client component in Next.js

import React from "react";

const CertificationSection = () => {
  return (
    <div className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 flex items-center justify-center">
      {/* Watermark Logo */}
      <img
        src="images/Quality-ISO-9001.webp" // Replace with the correct path to your logo
        alt="Certification Logo"
        className="absolute object-contain"
        style={{
          top: "50%", // Push the watermark further down
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "400px", // Adjusted width for responsiveness
          maxHeight: "400px", // Adjusted height for responsiveness
          opacity: 0.2, // Adjusted opacity for better visibility
          zIndex: 0,
        }}
      />

      {/* Content Section */}
      <div className="relative z-10 max-w-3xl lg:max-w-5xl text-center mt-6 md:mt-10 px-4">
        <h3 className="text-2xl md:text-3xl lg:text-3xl text-customYellow uppercase font-bold mt-2 mb-4">
          ISO 9001 Certified Firm
        </h3>
        <h4 className="text-sm md:text-base lg:text-lg text-customBlue leading-relaxed">
          As an ISO 9001:2015 Certified firm, GDC Consultants Ltd work closely
          with local and central Government Agencies. This is important to
          ensure our policies and guidelines are always up to date with the
          national and regional standards. We have built close relationships
          with a range of regional and city councils to work on a number of
          projects throughout New Zealand.
        </h4>
      </div>
    </div>
  );
};

export default CertificationSection;
