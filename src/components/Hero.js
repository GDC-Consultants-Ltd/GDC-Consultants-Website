// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] md:h-[600px] lg:h-[700px]"
      style={{ backgroundImage: "url('/images/hero-background.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center z-0">
        <div className="container mx-auto px-5 sm:px-8 md:px-10 py-10 md:py-16 lg:py-20 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-xl break-words">
            TRUSTED ADVISORS FOR EVERY STAGE OF YOUR PROJECT
          </h1>
          <p className="mb-6 max-w-lg sm:max-w-xl md:max-w-2xl text-base sm:text-lg leading-relaxed">
            Team of chartered professional engineers & architectural designers
            providing innovative solutions and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-customYellow text-white px-6 py-3 rounded-xl font-semibold hover:bg-customBlue transition duration-300">
              GET IN TOUCH
            </button>
            <button className="bg-white text-customBlue px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
              EXPLORE OUR PROJECTS
            </button>
          </div>
        </div>
      </div>

      {/* Ensuring image is fully covered and responsive */}
      <img
        src="/images/hero-background.webp"
        alt="Construction Background"
        className="invisible w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;
