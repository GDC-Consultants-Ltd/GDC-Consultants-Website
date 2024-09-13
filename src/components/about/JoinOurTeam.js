// components/ProjectHeader.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <section className="w-full p-10 md:p-16 transition-all duration-500 ease-in-out">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-0 px-4 md:px-8 lg:px-16">
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
            <span className="text-customBlue">About Us</span>
            <span className="text-gray-500">&gt;</span>
            <span className="text-customYellow">Careers</span>
          </nav>
          <h3 className="text-4xl md:text-5xl font-bold text-customYellow leading-tight animate-slide-in-left">
            Career Opportunities for Graduates and Internships
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-up">
            At GDC, we’re always looking for talented and motivated individuals
            to join our team.
          </p>
        </div>

        {/* Right Image Column */}
        <div className="relative w-full h-64 md:h-auto overflow-hidden animate-zoom-in">
          <Image
            src="/images/about/career.png" // Replace with your actual image path
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
