"use client"; // Ensure this is treated as a client component

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../app/globals.css";
import { motion } from "framer-motion"; // Import Framer Motion
import ProjectHeader from "@/components/projects/ProjectHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import ScrollToTop from "@/components/ScrollToTop";

// Updated projects array with categories
const projects = [
  {
    title: "Claudelands Events Centre",
    image: "/images/projects/1.webp",
    location: "Hamilton",
    category: "Events",
  },
  {
    title: "Maraenui Medical Centre",
    image: "/images/projects/2.webp",
    location: "Napier",
    category: "Medical",
  },
  {
    title: "Museum",
    image: "/images/projects/1.webp",
    location: "Rotorua - Seismic",
    category: "Cultural",
  },
  {
    title: "Fairy Springs Motel",
    image: "/images/projects/2.webp",
    location: "Rotorua",
    category: "Hospitality",
  },
  {
    title: "Apartments",
    image: "/images/projects/2.webp",
    location: "Structural",
    category: "Residential",
  },
  {
    title: "Waikato University",
    image: "/images/projects/2.webp",
    location: "Educational",
    category: "Educational",
  },
  {
    title: "Subdivision Baverstock",
    image: "/images/projects/2.webp",
    location: "Subdivision",
    category: "Residential",
  },
  {
    title: "Holiday Park and Commercial Centre in the Coromandel",
    image: "/images/projects/2.webp",
    location: "Planning",
    category: "Commercial",
  },
];

// Define animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(1); // Start from the first real image
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sliderRef = useRef(null);
  const totalSlides = filteredProjects.length;

  // Function to scroll to the active image
  const scrollToActiveImage = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const images = slider.getElementsByClassName("carousel-image");

    // Center the active image
    const activeImage = images[activeIndex];
    const offsetLeft =
      activeImage.offsetLeft -
      slider.clientWidth / 2 +
      activeImage.clientWidth / 2;
    slider.scrollTo({ left: offsetLeft, behavior: "smooth" });
  };

  // Automatically transition to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Scroll to active image when activeIndex changes
  useEffect(() => {
    if (activeIndex === 0) {
      setTimeout(() => {
        sliderRef.current.scrollTo({
          left:
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth * 2,
          behavior: "auto",
        });
        setActiveIndex(totalSlides);
      }, 500);
    } else if (activeIndex === totalSlides + 1) {
      setTimeout(() => {
        sliderRef.current.scrollTo({
          left: sliderRef.current.clientWidth,
          behavior: "auto",
        });
        setActiveIndex(1);
      }, 500);
    } else {
      scrollToActiveImage();
    }
  }, [activeIndex]);

  // Update currentProject based on activeIndex
  useEffect(() => {
    // Calculate the actual index of the project based on activeIndex
    let projectIndex = activeIndex - 1; // Active index starts at 1 due to cloned slides
    if (projectIndex < 0) projectIndex = totalSlides - 1; // Wrap around to last project
    if (projectIndex >= totalSlides) projectIndex = 0; // Wrap around to first project

    // Update the current project based on the calculated index
    setCurrentProject(filteredProjects[projectIndex]);
  }, [activeIndex, filteredProjects, totalSlides]);

  // Extract unique categories from projects
  const categories = [
    "All Projects",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "All Projects") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
    setActiveIndex(1); // Reset slider to the first project in filtered list
  };

  return (
    <>
      <Header />
      <ProjectHeader />

      {/* Category Labels */}
      <motion.div
        className="flex flex-wrap justify-center py-6 m-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInVariants}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => filterProjects(category)}
            className={`px-4 py-2 rounded-full m-1 md:m-2 transition duration-300 ease-in-out transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-customBlue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-customBlue hover:text-white"
            }`}
            variants={fadeInVariants}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <section className="pb-10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 xl:px-16">
          {/* Horizontal Scrollable Slider */}
          <motion.div
            ref={sliderRef}
            className="relative flex gap-8 overflow-x-auto scrollbar-hide py-6"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            {/* Clone last slide at the beginning for circular effect */}
            <motion.div
              className={`carousel-image flex-shrink-0 w-[500px] h-[350px] transition-transform duration-500 cursor-pointer ${
                activeIndex === 0 ? "scale-110" : "scale-100"
              }`}
              variants={scaleUpVariants}
            >
              <Image
                src={
                  filteredProjects[totalSlides - 1]?.image || projects[0].image
                }
                alt={filteredProjects[totalSlides - 1]?.title || ""}
                width={500}
                height={350}
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>

            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => {
                  setActiveIndex(index + 1);
                  setCurrentProject(project);
                }}
                className={`carousel-image flex-shrink-0 w-[500px] h-[350px] transition-transform duration-500 cursor-pointer ${
                  index + 1 === activeIndex ? "scale-110" : "scale-100"
                }`}
                variants={scaleUpVariants}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={350}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}

            {/* Clone first slide at the end for circular effect */}
            <motion.div
              className={`carousel-image flex-shrink-0 w-[500px] h-[350px] transition-transform duration-500 cursor-pointer ${
                activeIndex === totalSlides + 1 ? "scale-110" : "scale-100"
              }`}
              variants={scaleUpVariants}
            >
              <Image
                src={filteredProjects[0]?.image || projects[0].image}
                alt={filteredProjects[0]?.title || ""}
                width={500}
                height={350}
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="mt-8 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
          >
            <h3 className="text-2xl font-semibold text-customBlue mb-2">
              {currentProject.title}
            </h3>
            <p className="text-lg text-customYellow">
              {currentProject.location}
            </p>
          </motion.div>
        </div>
      </section>

      <GetInTouch />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProjectsPage;
