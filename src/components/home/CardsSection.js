"use client"; // Ensure this is treated as a client component in Next.js

import React, { useEffect, useState, useRef } from "react";
import {
  BriefcaseIcon,
  MapPinIcon,
  Cog6ToothIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

const CardsSection = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [locationsCount, setLocationsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const animateCount = (setCount, maxCount) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCount(count);
      if (count === maxCount) {
        clearInterval(interval);
      }
    }, 0.5);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !animationTriggered) {
      setAnimationTriggered(true);
      animateCount(setProjectsCount, 10000);
      animateCount(setLocationsCount, 13);
      animateCount(setServicesCount, 10);
      animateCount(setExperienceCount, 16);
    }
  }, [isVisible, animationTriggered]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mt-4 md:mt-8 lg:mt-[-100px] xl:mt-[-150px] px-4 sm:px-6 lg:px-0 py-10"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-4">
        <Card
          color="bg-customBlue"
          gradient="from-black to-customBlue"
          icon={
            <BriefcaseIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue transition-transform duration-500 ease-in-out hover:scale-110" />
          }
          count={`${projectsCount.toLocaleString()}+`}
          label="Projects Completed"
          isVisible={animationTriggered}
        />
        <Card
          color="bg-customYellow"
          gradient="from-yellow-500 to-yellow-300"
          icon={
            <MapPinIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue transition-transform duration-500 ease-in-out hover:scale-110" />
          }
          count={locationsCount.toLocaleString()}
          label="Locations Serviced"
          isVisible={animationTriggered}
        />
        <Card
          color="bg-customBlue"
          gradient="from-black to-customBlue"
          icon={
            <Cog6ToothIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue transition-transform duration-500 ease-in-out hover:scale-110" />
          }
          count={`${servicesCount.toLocaleString()}+`}
          label="Services Provided"
          isVisible={animationTriggered}
        />
        <Card
          color="bg-customYellow"
          gradient="from-yellow-500 to-yellow-300"
          icon={
            <CalendarIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue transition-transform duration-500 ease-in-out hover:scale-110" />
          }
          count={`${experienceCount.toLocaleString()}+`}
          label="Years of Experience"
          isVisible={animationTriggered}
        />
      </div>
    </section>
  );
};

const Card = ({ color, gradient, icon, count, label, isVisible }) => (
  <div
    className={`relative ${color} text-white shadow-lg p-6 flex flex-col items-center justify-center space-y-2 h-56 md:h-64 overflow-hidden transform transition-transform duration-500 ease-in-out ${
      isVisible ? "animate-slide-up hover:scale-105" : "opacity-0"
    } ${color === "bg-customBlue" ? "rounded-none lg:rounded-none" : ""}`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-60 clip-path-custom transition-opacity duration-500 ease-in-out`}
    ></div>
    <div className="relative z-10 bg-customYellow rounded-full p-3 flex items-center justify-center animate-fade-in transition-transform duration-500 ease-in-out hover:scale-110">
      {icon}
    </div>
    <div className="relative z-10 text-center animate-fade-in transition-opacity duration-500 ease-in-out">
      <p className="text-3xl md:text-4xl font-extrabold">{count}</p>
      <p className="text-base md:text-lg font-semibold uppercase tracking-wide">
        {label}
      </p>
    </div>
  </div>
);

export default CardsSection;
