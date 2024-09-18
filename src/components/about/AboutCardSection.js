// components/about/AboutCardSection.js

"use client"; // Ensure this is treated as a client component

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

const AboutCardSection = () => {
  const teamMembers = [
    {
      id: 1,
      title: "We Are Industry Leaders",
      description:
        "GDC Consultants are a nationwide provider of innovative solutions in all areas of the engineering and architecture process chains. Our unique success story is predicated on our core values of innovation, competency, and strict coordination on client needs.",
      image: "/images/about/2.webp",
    },
    {
      id: 2,
      title: "Who We Are",
      description:
        "Through our expertise, competency, and continuous client support, we have earned the trust of our clients. By developing long lasting partnerships and consistently providing the best possible solutions and services, we are considered industry leaders. \nAt GDC Consultants, we believe in having strong values and priorities in everything we do. We take responsibility for the way our work affects society and the environment, and we are constantly aiming to give back to our community.",
      image: "/images/about/1.webp",
    },
    {
      id: 3,
      title: "We Provide Sustainable Solutions",
      description:
        "We understand the vital necessity of sustainability in everything we do. Our corporate practice is founded on ethical behavior, innovation, and ensuring the sustainability of our community and environment.",
      image: "/images/about/3.webp",
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <motion.section
      className="px-6 py-12 bg-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInUp}
    >
      <motion.h2 className="text-lg uppercase font-semibold text-gray-500">
        About Us
      </motion.h2>
      <motion.h1
        className="text-4xl text-customBlue font-bold mt-2 mb-4"
        variants={fadeInUp}
      >
        GDC Consultants LTD
      </motion.h1>
      <motion.p className="text-xl text-gray-700 mb-8" variants={fadeInUp}>
        Chartered Professional Engineers & Architectural Designs
      </motion.p>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* First Card */}
        <motion.div
          className="overflow-hidden md:w-[28%]"
          variants={slideInLeft}
        >
          <Image
            src={teamMembers[0].image}
            alt={teamMembers[0].title}
            width={300}
            height={300}
            className="w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{teamMembers[0].title}</h3>
            <p className="text-gray-600 mb-2">“Your vision. Our expertise.”</p>
            <p className="text-gray-600">{teamMembers[0].description}</p>
          </div>
        </motion.div>

        {/* Middle Card with Down Position */}
        <motion.div
          className="overflow-hidden md:w-[28%] md:mt-10"
          variants={zoomIn}
        >
          <Image
            src={teamMembers[1].image}
            alt={teamMembers[1].title}
            width={300}
            height={300}
            className="w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{teamMembers[1].title}</h3>
            <p className="text-gray-600">{teamMembers[1].description}</p>
          </div>
        </motion.div>

        {/* Third Card */}
        <motion.div
          className="overflow-hidden md:w-[28%]"
          variants={slideInRight}
        >
          <Image
            src={teamMembers[2].image}
            alt={teamMembers[2].title}
            width={300}
            height={300}
            className="w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{teamMembers[2].title}</h3>
            <p className="text-gray-600">{teamMembers[2].description}</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutCardSection;
