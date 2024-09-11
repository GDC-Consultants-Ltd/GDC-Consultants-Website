// src/components/ProjectsSection.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Baverstock , Hamilton, Subdivision",
    category: "3 Waters & Contamination",
    image: "/images/projects/1.webp", // Make sure to replace with actual image paths
  },
  {
    title: "Lake Rotakauri Walkway",
    category: "Planning & Environmental",
    image: "/images/projects/2.webp",
  },
  {
    title: "Waipa District Council",
    category: "Council Buildings",
    image: "/images/projects/3.webp",
  },
  {
    title: "Cambridge Family Health Medical Centre",
    category: "Other Assets",
    image: "/images/projects/4.webp",
  },
  {
    title: "Tuakau Playground",
    category: "Planning & Environmental",
    image: "/images/projects/5.webp",
  },
  {
    title: "Dickens Street",
    category: "",
    image: "/images/projects/6.webp",
  },
  {
    title: "Menzies Building, Waikato Hospital",
    category: "Medical Sector",
    image: "/images/projects/7.webp",
  },
  {
    title: "Hockin Building, Waikato Hospital",
    category: "Medical Sector",
    image: "/images/projects/8.webp",
  },
  {
    title: "Waiora Building, Waikato Hospital",
    category: "Medical Sector",
    image: "/images/projects/9.webp",
  },
  {
    title: "Cambridge Town Hall",
    category: "Heritage",
    image: "/images/projects/10.webp",
  },
  {
    title: "Cambridge Clock Tower",
    category: "Heritage",
    image: "/images/projects/11.webp",
  },
  {
    title: "Cambridge Museum",
    category: "Heritage",
    image: "/images/projects/12.webp",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-[#F3F5F6]">
      <div className="text-center mb-12 px-6 md:px-10 xl:px-16">
        <h2 className="text-4xl text-customYellow uppercase font-bold mt-2">
          Explore Our Portfolio
        </h2>
        <h3 className="text-md text-customBlue tracking-wide">
          Our portfolio showcases the diverse range of successful projects we’ve
          completed across New Zealand. From large-scale commercial developments
          to smaller residential builds.
        </h3>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden group"
          >
            {/* Project Image */}
            <Image
              src={project.image} // The path to your project image
              alt={project.title} // Alt text for accessibility
              width={400} // Adjust width based on your design requirements
              height={192} // Adjust height based on your design requirements
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" // Use object-cover for object-fit behavior
            />

            {/* Project Details Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-80 group-hover:bg-opacity-100 transition duration-300">
              <span className="text-xs font-semibold uppercase text-customBlue bg-customYellow/30 px-2 py-1 rounded-md">
                {project.category}
              </span>
              <h4 className="text-lg text-customBlue font-semibold mt-2">
                {project.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
      {/* Link to View All Projects */}
      <div className="flex justify-center mt-8">
        <Link
          href="/projects"
          className="bg-customYellow text-white font-semibold px-6 py-3 rounded-md hover:bg-customBlue transition duration-300"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
