// components/ProjectHeader.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <section className="bg-gray-100 w-full py-10 md:py-16 transition-all duration-500 ease-in-out">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 px-4 md:px-8 lg:px-16">
        {/* Left Content Column */}
        <div className="flex flex-col space-y-4 md:space-y-6 animate-fade-in-up">
          <nav className="text-lg md:text-2xl text-customBlue font-bold flex items-center space-x-2">
            <Link
              href="/"
              className="hover:text-customYellow transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <span className="text-gray-500">&gt;</span>
            <span className="text-customYellow">Projects</span>
          </nav>
          <h2 className="text-4xl md:text-5xl font-bold text-customYellow leading-tight animate-slide-in-left">
            Our Projects
          </h2>
          <h3 className="text-xl md:text-2xl text-customBlue font-semibold animate-slide-in-right">
            Building a Better Future, Today
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-up">
            Our projects page showcases how we’re making a difference in the
            communities we serve. From sustainable building practices to using
            locally sourced materials, we’re proud to be leading the way in
            responsible construction that benefits both our clients and the
            planet.
          </p>
        </div>

        {/* Right Image Column */}
        <div className="relative w-full h-64 md:h-auto overflow-hidden rounded-lg shadow-lg animate-zoom-in">
          <Image
            src="/images/projects/website-home-page-edit.webp" // Replace with your actual image path
            alt="Our Projects"
            width={700} // Set the desired width of the image
            height={500} // Set the desired height of the image
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" // Adding scale on hover for effect
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
