"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../app/globals.css";
import ProjectHeader from "@/components/projects/ProjectHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import ScrollToTop from "@/components/ScrollToTop";

// Import projects data from the JSON file
import projectsData from "@/data/projectsData.json"; // Adjust the path based on your file structure
import Head from "next/head";

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedSector, setSelectedSector] = useState(null); // Set this to null initially
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sliderRef = useRef(null);

  // List of sector categories that need to be styled with customYellow when active
  const sectorCategories = [
    "Heritage",
    "Accommodation",
    "Educational",
    "Cultural",
    "Medical",
    "Council",
  ];

  // Extract unique categories and sectors from projectsData
  const categories = [
    "All Projects",
    ...projectsData.map((item) => item.category),
  ];

  // Filter projects based on selected category and sector
  const filterProjects = (category, sector) => {
    let filtered = projectsData.flatMap((item) => item.projects);

    if (category !== "All Projects") {
      filtered = filtered.filter((project) =>
        projectsData
          .find((cat) => cat.category === category)
          ?.projects.includes(project)
      );
    }

    if (sector) {
      filtered = filtered.filter((project) => project.sector === sector);
    }

    setFilteredProjects(filtered);
    setCurrentProject(filtered[0] || null); // Set the first project as the current one, if available
    setActiveIndex(0); // Reset slider to the first project
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterProjects(category, selectedSector); // Now we filter with the currently selected sector
  };

  // Handle sector selection
  const handleSectorClick = (sector) => {
    setSelectedSector(sector);
    filterProjects(selectedCategory, sector); // Now we filter with the currently selected category
  };

  // Automatically transition to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [filteredProjects.length]);

  useEffect(() => {
    // Set the current project based on active index
    setCurrentProject(filteredProjects[activeIndex]);
  }, [activeIndex, filteredProjects]);

  // Scroll to active image when activeIndex changes
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

  useEffect(() => {
    scrollToActiveImage();
  }, [activeIndex]);

  // Initialize with all projects displayed on page load
  useEffect(() => {
    filterProjects("All Projects", null); // We filter with "All Projects" and no sector initially
  }, []);

  return (
    <>
      <Head>
        <title>
          Innovative Engineering Projects: Pushing the Boundaries of Technology
        </title>
        <meta
          name="description"
          content="Discover cutting-edge engineering solutions with GDC Consultant. Our innovative projects and expert consultancy services drive success in every endeavor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href="https://gdcgroup.netlify.app/portfolio/all-projects"
        />

        {/* hrefLang tags */}
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/portfolio/all-projects"
          hrefLang="en-nz"
        />
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/portfolio/all-projects"
          hrefLang="en"
        />
      </Head>

      <Header />
      <ProjectHeader />

      {/* First set of labels for categories */}
      <div className="flex flex-wrap justify-center pt-6 m-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full m-1 md:m-2 transition duration-300 ease-in-out transform hover:scale-105 ${
              selectedCategory === category
                ? sectorCategories.includes(category)
                  ? "bg-customYellow text-white shadow-lg"
                  : "bg-customBlue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-customBlue hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Projects Section */}
      <section className="pb-10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 xl:px-16">
          {filteredProjects.length > 0 ? (
            <>
              {/* Horizontal Scrollable Slider */}
              <div
                ref={sliderRef}
                className="relative flex gap-8 overflow-x-auto scrollbar-hide py-6"
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setCurrentProject(project);
                    }}
                    className={`carousel-image flex-shrink-0 w-[500px] h-[350px] transition-transform duration-500 cursor-pointer ${
                      index === activeIndex ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={350}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {/* Project Details */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-semibold text-customBlue mb-2">
                  {currentProject?.title}
                </h3>
                <p className="text-md max-w-xl mx-auto text-customYellow text-center">
                  {currentProject?.description}
                </p>
              </div>
            </>
          ) : (
            <p className="text-center text-lg text-gray-600 py-20">
              No projects available in this category.
            </p>
          )}
        </div>
      </section>

      <GetInTouch />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProjectsPage;
