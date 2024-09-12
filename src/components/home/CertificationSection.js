"use client"; // Ensure this is treated as a client component in Next.js

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid"; // Replace with the correct icon you want to use

const CertificationSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.2,
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

  return (
    <div
      ref={sectionRef}
      className={`relative flex items-center justify-center py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white transform transition-transform duration-500 ease-in-out ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left Side with Image */}
        <div
          className={`flex justify-center md:justify-end transform transition-transform duration-500 ease-in-out ${
            isVisible ? "animate-slide-right" : "opacity-0"
          }`}
        >
          <Image
            src="/images/certification.webp"
            alt="Sample Image"
            width={600}
            height={400}
            className="object-cover w-full max-h-[400px] h-auto rounded shadow-md"
            priority
          />
        </div>

        {/* Content Section */}
        <div
          className={`relative text-center md:text-left bg-white p-6 flex flex-col justify-center transform transition-transform duration-500 ease-in-out ${
            isVisible ? "animate-slide-left" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl text-center sm:text-3xl md:text-3xl lg:text-4xl text-customYellow uppercase font-bold mt-2 mb-4">
            ISO 9001 Certified Firm
          </h3>
          <h4 className="text-sm text-center sm:text-base md:text-lg lg:text-lg text-customBlue leading-relaxed">
            As an ISO 9001:2015 Certified firm, GDC Consultants Ltd works closely
            with local and central Government Agencies. This is important to
            ensure our policies and guidelines are always up to date with the
            national and regional standards. We have built close relationships
            with a range of regional and city councils to work on a number of
            projects throughout New Zealand.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;
