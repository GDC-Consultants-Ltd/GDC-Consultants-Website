"use client"; // Ensure this is treated as a client component in Next.js

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid"; // Replace with the correct icon you want to use
import { motion, useInView } from "framer-motion"; // Import Framer Motion

const CertificationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // Check visibility each time the section comes into view

  // Define animation variants for motion components
  const slideRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative flex items-center justify-center py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left Side with Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          variants={slideRightVariants}
        >
          <Image
            src="/images/certification.webp"
            alt="Sample Image"
            width={600}
            height={400}
            className="object-cover w-full max-h-[400px] h-auto rounded shadow-md"
            priority
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="relative text-center md:text-left bg-white p-6 flex flex-col justify-center"
          variants={slideLeftVariants}
        >
          <h3 className="text-2xl text-center sm:text-3xl md:text-3xl lg:text-4xl text-customYellow uppercase font-bold mt-2 mb-4">
            ISO 9001 Certified Firm
          </h3>
          <h4 className="text-sm text-center sm:text-base md:text-lg lg:text-lg text-customBlue leading-relaxed">
            As an ISO 9001:2015 Certified firm, GDC Consultants Ltd works
            closely with local and central Government Agencies. This is
            important to ensure our policies and guidelines are always up to
            date with the national and regional standards. We have built close
            relationships with a range of regional and city councils to work on
            a number of projects throughout New Zealand.
          </h4>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificationSection;
