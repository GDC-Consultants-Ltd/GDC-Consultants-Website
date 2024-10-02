"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import Framer Motion
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  // Define animation variants for Framer Motion
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-[400px] sm:h-[400px] md:h-[500px] lg:h-[580px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center md:text-left z-0 transition-all duration-700 ease-in-out"
        whileInView="visible"
        initial="hidden"
        variants={backgroundVariants}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container mx-auto px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-16 lg:py-20 text-white flex flex-col items-center md:items-start">
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center md:text-left mb-6 leading-snug max-w-3xl text-white"
            variants={textVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: false, amount: 0.2 }}
          >
            TRUSTED ADVISORS FOR EVERY STAGE OF YOUR PROJECT
          </motion.h1>
          <motion.p
            className="mb-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed"
            variants={textVariants}
            transition={{ delay: 0.2 }}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: false, amount: 0.2 }}
          >
            Team of chartered professional engineers & architectural designers
            providing innovative solutions and expert guidance.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4"
            variants={buttonVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.button
              className="bg-customYellow text-white px-6 py-3 rounded-xl font-semibold hover:bg-customBlue transition-all duration-300 w-full sm:w-auto"
              onClick={() => router.push("/locations")}
              variants={buttonVariants}
            >
              GET IN TOUCH
            </motion.button>
            <motion.button
              className="bg-white text-customBlue px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto"
              onClick={() => router.push("/portfolio/all-projects")}
              variants={buttonVariants}
              transition={{ delay: 0.2 }}
            >
              EXPLORE OUR PROJECTS
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Adding video background */}
      <motion.div
        className="absolute inset-0 z-[-1]"
        variants={backgroundVariants}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Use Next.js Image for static images */}
        <Image
          className="w-full h-full object-cover"
          src="/video/Hero.gif" // Use a static image here for optimization
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority // Ensure it loads quickly
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </section>
  );
};

export default Hero;
