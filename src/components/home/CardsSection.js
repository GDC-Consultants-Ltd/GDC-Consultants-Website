"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  BriefcaseIcon,
  MapPinIcon,
  Cog6ToothIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion"; // Import Framer Motion components

const CardsSection = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    locations: 0,
    services: 0,
    experience: 0,
  });
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
      animateCount(
        (count) => setCounts((prev) => ({ ...prev, projects: count })),
        10000
      );
      animateCount(
        (count) => setCounts((prev) => ({ ...prev, locations: count })),
        13
      );
      animateCount(
        (count) => setCounts((prev) => ({ ...prev, services: count })),
        10
      );
      animateCount(
        (count) => setCounts((prev) => ({ ...prev, experience: count })),
        16
      );
    }
  }, [isVisible, animationTriggered]);

  // Framer Motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Array of card data to render dynamically
  const cardData = [
    {
      color: "bg-customBlue",
      gradient: "from-black to-customBlue",
      icon: (
        <BriefcaseIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue transition-transform duration-500 ease-in-out hover:scale-110" />
      ),
      count: `${counts.projects.toLocaleString()}+`,
      label: "Projects Completed",
    },
    {
      color: "bg-customYellow",
      gradient: "from-yellow-500 to-yellow-300",
      icon: (
        <MapPinIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue transition-transform duration-500 ease-in-out hover:scale-110" />
      ),
      count: counts.locations.toLocaleString(),
      label: "Locations Serviced",
    },
    {
      color: "bg-customBlue",
      gradient: "from-black to-customBlue",
      icon: (
        <Cog6ToothIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue transition-transform duration-500 ease-in-out hover:scale-110" />
      ),
      count: `${counts.services.toLocaleString()}+`,
      label: "Services Provided",
    },
    {
      color: "bg-customYellow",
      gradient: "from-yellow-500 to-yellow-300",
      icon: (
        <CalendarIcon className="w-10 h-10 md:w-12 md:h-12 text-customBlue transition-transform duration-500 ease-in-out hover:scale-110" />
      ),
      count: `${counts.experience.toLocaleString()}+`,
      label: "Years of Experience",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mt-4 md:mt-8 lg:mt-[-100px] xl:mt-[-150px] px-4 sm:px-6 lg:px-0 py-10 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} variants={cardVariants} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ color, gradient, icon, count, label, variants }) => (
  <motion.div
    className={`relative ${color} text-white shadow-lg p-6 flex flex-col items-center justify-center space-y-2 h-56 md:h-64 overflow-hidden transform transition-transform duration-500 ease-in-out rounded-xl`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={variants}
    whileHover={{ scale: 1.05, zIndex: 10 }} // Add scale and zIndex on hover
    style={{ position: "relative", zIndex: 1 }} // Ensure default z-index is set
  >
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-60 clip-path-custom transition-opacity duration-500 ease-in-out`}
    ></div>
    <div className="relative z-10 bg-customYellow rounded-full p-3 flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-110">
      {icon}
    </div>
    <div className="relative z-10 text-center transition-opacity duration-500 ease-in-out">
      <p className="text-3xl md:text-4xl font-extrabold">{count}</p>
      <p className="text-base md:text-lg font-semibold uppercase tracking-wide">
        {label}
      </p>
    </div>
  </motion.div>
);

export default CardsSection;
