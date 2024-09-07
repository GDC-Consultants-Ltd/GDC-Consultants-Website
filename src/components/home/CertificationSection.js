"use client"; // Ensure this is treated as a client component in Next.js

import React from "react";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid"; // Replace with the correct icon you want to use

const CertificationSection = () => {
  return (
    <div className="relative flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left Side with Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/certification.webp" // Replace with the correct path to your sample image
            alt="Sample Image"
            className="object-cover w-full h-[400px] rounded shadow-md" // Adjust the height as needed
          />
        </div>

        {/* Hero Icon in the middle */}
        <div className="absolute flex items-center justify-center -translate-x-1/2 left-1/2 top-1/2 z-20 bg-customYellow p-4 rounded-full shadow-md">
          <BuildingOfficeIcon className="w-12 h-12 text-white" />{" "}
          {/* Replace with the correct icon you want */}
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left bg-white p-6 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-customYellow uppercase font-bold mt-2 mb-4">
            ISO 9001 Certified Firm
          </h3>
          <h4 className="text-sm md:text-base lg:text-lg text-customBlue leading-relaxed">
            As an ISO 9001:2015 Certified firm, GDC Consultants Ltd works
            closely with local and central Government Agencies. This is
            important to ensure our policies and guidelines are always up to
            date with the national and regional standards. We have built close
            relationships with a range of regional and city councils to work on
            a number of projects throughout New Zealand.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;
