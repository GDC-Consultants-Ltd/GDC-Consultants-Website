// src/components/Hero.js
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[400px] sm:h-[400px] md:h-[500px] lg:h-[580px] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center md:text-left z-0 transition-all duration-700 ease-in-out">
        <div className="container mx-auto px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-16 lg:py-20 text-white flex flex-col items-center md:items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight max-w-xl animate-fade-in-up transition-opacity duration-700 ease-in-out">
            TRUSTED ADVISORS FOR EVERY STAGE OF YOUR PROJECT
          </h1>
          <p className="mb-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up transition-opacity duration-700 ease-in-out animation-delay-200">
            Team of chartered professional engineers & architectural designers
            providing innovative solutions and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in-up transition-transform duration-700 ease-in-out animation-delay-400">
            <button className="bg-customYellow text-white px-6 py-3 rounded-xl font-semibold hover:bg-customBlue transition-all duration-300 w-full sm:w-auto animate-button-slide-up transition-transform ease-in-out">
              GET IN TOUCH
            </button>
            <button className="bg-white text-customBlue px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto animate-button-slide-up transition-transform ease-in-out animation-delay-200">
              EXPLORE OUR PROJECTS
            </button>
          </div>
        </div>
      </div>

      {/* Ensuring the image is fully covered and responsive */}
      <div className="absolute inset-0 z-[-1] animate-zoom-in transition-transform duration-[8s] ease-out">
        <Image
          src="/images/GDC-OFFICE-EDIT-scaled.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority // Ensures the image loads quickly for better user experience
        />
      </div>
    </section>
  );
};

export default Hero;
