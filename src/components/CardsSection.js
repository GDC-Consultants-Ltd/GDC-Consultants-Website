// src/components/CardsSection.js
"use client"; // Add this line to make it a Client Component

import React, { useEffect, useState } from "react";
import { BriefcaseIcon, MapPinIcon, Cog6ToothIcon } from "@heroicons/react/24/solid"; 

const CardsSection = () => {
  // States to manage counts for projects, locations, and services
  const [projectsCount, setProjectsCount] = useState(0);
  const [locationsCount, setLocationsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);

  // Function to animate counting
  const animateCount = (setCount, maxCount) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCount(count);
      if (count === maxCount) {
        clearInterval(interval);
      }
    }, 50); 
  };

  // Trigger counting when component mounts
  useEffect(() => {
    animateCount(setProjectsCount, 20); // Number of projects
    animateCount(setLocationsCount, 13); // Number of locations
    animateCount(setServicesCount, 10); // Number of services
  }, []);

  return (
    <section className="relative z-10 -mt-16">
      <div className="max-w-screen-xl mx-auto flex justify-between px-10 space-x-6">
        {/* Card 1 - Projects */}
        <div className="bg-customBlue text-white shadow-lg p-5 flex-1 flex flex-col items-center justify-center space-y-2 h-44 rounded-lg">
          {/* Icon */}
          <div className="bg-customYellow rounded-full p-3 flex items-center justify-center">
            <BriefcaseIcon className="w-10 h-10 text-customBlue" />
          </div>
          {/* Text and Number */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold">
              {projectsCount}
            </p>
            <p className="text-sm md:text-base font-semibold uppercase tracking-wide">
              Projects Completed
            </p>
          </div>
        </div>

        {/* Card 2 - Locations */}
        <div className="bg-customYellow text-white shadow-lg p-5 flex-1 flex flex-col items-center justify-center space-y-2 h-44 rounded-lg">
          {/* Icon */}
          <div className="bg-customBlue rounded-full p-3 flex items-center justify-center">
            <MapPinIcon className="w-10 h-10 text-customYellow" />
          </div>
          {/* Text and Number */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold">
              {locationsCount}
            </p>
            <p className="text-sm md:text-base font-semibold uppercase tracking-wide">
              Locations
            </p>
          </div>
        </div>

        {/* Card 3 - Services */}
        <div className="bg-customBlue text-white shadow-lg p-5 flex-1 flex flex-col items-center justify-center space-y-2 h-44 rounded-lg">
          {/* Icon */}
          <div className="bg-customYellow rounded-full p-3 flex items-center justify-center">
            <Cog6ToothIcon className="w-10 h-10 text-customBlue" />
          </div>
          {/* Text and Number */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold">
              {servicesCount}+
            </p>
            <p className="text-sm md:text-base font-semibold uppercase tracking-wide">
              Services Provided
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
