// components/ProjectHeader.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <section className="bg-white w-full">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Content Column */}
        <div className="flex flex-col space-y-4 md:space-y-6 px-6 md:px-10 xl:px-10">
          <nav className="text-lg md:text-2xl text-customBlue font-bold flex items-center space-x-2">
            <Link href="/" className="hover:text-customYellow">
              Home
            </Link>
            <span className="text-gray-500">&gt;</span>
            <span className="text-customYellow">Projects</span>
          </nav>
          <h2 className="text-4xl md:text-5xl font-bold text-customYellow leading-tight">
            Our Projects
          </h2>
          <h3 className="text-xl md:text-2xl text-customBlue font-semibold">
            Building a Better Future, Today
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our projects page showcases how we’re making a difference in the
            communities we serve. From sustainable building practices to using
            locally sourced materials, we’re proud to be leading the way in
            responsible construction that benefits both our clients and the
            planet.
          </p>
        </div>

        {/* Right Image Column */}
        <div className="relative w-full h-auto overflow-hidden">
          <Image
            src="/images/projects/3.webp" // Replace with your actual image path
            alt="Our Projects"
            width={700} // Set the desired width of the image
            height={500} // Set the desired height of the image
            className="w-full h-full object-cover" // Styling the image for responsiveness
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
