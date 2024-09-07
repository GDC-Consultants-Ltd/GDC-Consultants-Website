"use client"; // Ensure this is treated as a client component in Next.js

import React, { useEffect, useState, useRef } from "react";
import {
  BriefcaseIcon,
  MapPinIcon,
  Cog6ToothIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

const CardsSection = () => {
  // States to manage counts for projects, locations, services, and experience
  const [projectsCount, setProjectsCount] = useState(0);
  const [locationsCount, setLocationsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to animate counting
  const animateCount = (setCount, maxCount) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCount(count);
      if (count === maxCount) {
        clearInterval(interval);
      }
    }, 100);
  };

  // Set up Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger counting animation when section becomes visible
  useEffect(() => {
    if (isVisible) {
      animateCount(setProjectsCount, 20);
      animateCount(setLocationsCount, 13);
      animateCount(setServicesCount, 10);
      animateCount(setExperienceCount, 16);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mt-4 md:mt-8 lg:mt-[-100px] xl:mt-[-150px] px-4 sm:px-6 lg:px-0 py-10"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-4">
        {/* Card 1 - Projects */}
        <Card
          color="bg-customBlue"
          gradient="from-black to-customBlue"
          icon={
            <BriefcaseIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue" />
          }
          count={projectsCount}
          label="Projects Completed"
        />

        {/* Card 2 - Locations */}
        <Card
          color="bg-customYellow"
          gradient="from-yellow-500 to-yellow-300"
          icon={
            <MapPinIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue" />
          }
          count={locationsCount}
          label="Locations"
        />

        {/* Card 3 - Services */}
        <Card
          color="bg-customBlue"
          gradient="from-black to-customBlue"
          icon={
            <Cog6ToothIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue" />
          }
          count={`${servicesCount}+`}
          label="Services Provided"
        />

        {/* Card 4 - Experience */}
        <Card
          color="bg-customYellow"
          gradient="from-yellow-500 to-yellow-300"
          icon={
            <CalendarIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue" />
          }
          count={`${experienceCount}+`}
          label="Years of Experience"
        />
      </div>
    </section>
  );
};

// Card Component for better reusability and readability
const Card = ({ color, gradient, icon, count, label }) => (
  <div
    className={`relative ${color} text-white shadow-lg p-6 flex flex-col items-center justify-center space-y-2 h-56 md:h-64 overflow-hidden ${
      color === "bg-customBlue" ? "rounded-none lg:rounded-none" : ""
    }`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-60 clip-path-custom`}
    ></div>
    <div className="relative z-10 bg-customYellow rounded-full p-3 flex items-center justify-center">
      {icon}
    </div>
    <div className="relative z-10 text-center">
      <p className="text-3xl md:text-4xl font-extrabold">{count}</p>
      <p className="text-base md:text-lg font-semibold uppercase tracking-wide">
        {label}
      </p>
    </div>
  </div>
);

export default CardsSection;
