// src/components/CardsSection.js
"use client"; // Add this line to make it a Client Component

import React, { useEffect, useState } from "react";
import { BriefcaseIcon, MapPinIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

const CardsSection = () => {
  // States to manage counts for projects, locations, and services
  const [projectsCount, setProjectsCount] = useState(0);
  const [locationsCount, setLocationsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

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
    animateCount(setExperienceCount, 16); // Number of experience
  }, []);

  return (
    <section className="relative z-10 -mt-16 px-0">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Card 1 - Projects */}
        <div className="relative bg-customBlue text-white shadow-lg p-6 flex-1 flex flex-col items-center justify-center space-y-2 h-56 md:h-64 overflow-hidden">
          {/* Background Shape */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-customBlue opacity-60 clip-path-custom"></div>
          {/* Icon */}
          <div className="relative z-10 bg-customYellow rounded-full p-3 flex items-center justify-center">
            <BriefcaseIcon className="w-8 h-8 md:w-10 md:h-10 text-customBlue" />
          </div>
          {/* Text and Number */}
          <div className="relative z-10 text-center">
            <p className="text-2xl md:text-3xl font-extrabold">{projectsCount}</p>
            <p className="text-xs md:text-base font-semibold uppercase tracking-wide">
              Projects Completed
            </p>
          </div>
        </div>

        {/* Card 2 - Locations */}
        <div className="relative bg-customYellow text-white shadow-lg p-6 flex-1 flex flex-col items-center justify-center space-y-2 h-56 md:h-64 overflow-hidden">
          {/* Background Shape */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-80 clip-path-custom"></div>
          {/* Icon */}
          <div className="relative z-10 bg-customBlue rounded-full p-3 flex items-center justify-center">
            <MapPinIcon className="w-8 h-8 md:w-10 md:h-10 text-customYellow" />
          </div>
          {/* Text and Number */}
          <div className="relative z-10 text-center">
            <p className="text-2xl md:text-3xl font-extrabold">{locationsCount}</p>
            <p className="text-xs md:text-base font-semibold uppercase tracking-wide">
              Locations
            </p>
          </div>
        </div>

        {/* Card 3 - Services */}
        <div className="relative bg-customBlue text-white shadow-lg p-6 flex-1 flex flex-col items-center justify-center space-y-2 h-56 md:h-64 overflow-hidden">
          {/* Background Shape */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-customBlue opacity-60 clip-path-custom"></div>
          {/* Icon */}
          <div className="relative z-10 bg-customYellow rounded-full p-3 flex items-center justify-center">
            <Cog6ToothIcon className="w-8 h-8 md:w-10 md:h-10 text-customBlue" />
          </div>
          {/* Text and Number */}
          <div className="relative z-10 text-center">
            <p className="text-2xl md:text-3xl font-extrabold">{servicesCount}+</p>
            <p className="text-xs md:text-base font-semibold uppercase tracking-wide">
              Services Provided
            </p>
          </div>
        </div>

        {/* Card 3 - Experiences */}
        <div className="relative bg-customYellow text-white shadow-lg p-6 flex-1 flex flex-col items-center justify-center space-y-2 h-56 md:h-64 overflow-hidden">
          {/* Background Shape */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-80 clip-path-custom"></div>
          {/* Icon */}
          <div className="relative z-10 bg-customBlue rounded-full p-3 flex items-center justify-center">
            <MapPinIcon className="w-8 h-8 md:w-10 md:h-10 text-customYellow" />
          </div>
          {/* Text and Number */}
          <div className="relative z-10 text-center">
            <p className="text-2xl md:text-3xl font-extrabold">{experienceCount}+</p>
            <p className="text-xs md:text-base font-semibold uppercase tracking-wide">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
