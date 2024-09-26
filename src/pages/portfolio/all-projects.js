"use client"; // Ensure this is treated as a client component

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../app/globals.css";
import ProjectHeader from "@/components/projects/ProjectHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import ScrollToTop from "@/components/ScrollToTop";

// Updated projects array with categories inside main array
const projectsData = [
  {
    category: "Structural",
    projects: [
      {
        title: "Structural Project 1",
        image: "/images/projects/1.webp",
        sector: "sector 1",
      },
    ],
  },
  {
    category: "Architectural",
    projects: [
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/1.png",
        sector: "Thames",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/2.png",
        sector: "Thames",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/3.png",
        sector: "Thames",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/4.png",
        sector: "Thames",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/5.png",
        sector: "Thames",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/6.png",
        sector: "Thames",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/7.png",
        sector: "Thames",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/8.png",
        sector: "Thames",
      },
    ],
  },
  {
    category: "Geotech",
    projects: [],
  },
  {
    category: "Environmental + Planning",
    projects: [
      {
        title: "Environmental Project",
        image: "/images/projects/2.webp",
        sector: "sector 2",
      },
    ],
  },
  {
    category: "Roading",
    projects: [],
  },
  {
    category: "Residential",
    projects: [
      {
        title: "Residential Project",
        image: "/images/projects/3.webp",
        sector: "sector 3",
      },
    ],
  },
  {
    category: "Commercial",
    projects: [
      {
        title: "Commercial Project",
        image: "/images/projects/4.webp",
        sector: "sector 4",
      },
    ],
  },
  {
    category: "Seismic",
    projects: [],
  },
];

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sliderRef = useRef(null);

  // Extract unique categories from projectsData
  const categories = [
    "All Projects",
    ...projectsData.map((category) => category.category),
  ];

  // Filter projects based on selected category
  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "All Projects") {
      // Merge all projects from all categories
      setFilteredProjects(
        projectsData.flatMap((category) => category.projects)
      );
    } else {
      const categoryData = projectsData.find(
        (item) => item.category === category
      );
      setFilteredProjects(categoryData ? categoryData.projects : []);
    }
    // Reset slider to the first project in filtered list
    setActiveIndex(0);
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
    // Merge all projects from all categories to display initially
    const allProjects = projectsData.flatMap((category) => category.projects);
    setFilteredProjects(allProjects);
    setCurrentProject(allProjects[0] || null); // Set the first project as the current one, if available
    setActiveIndex(0);
  }, []);

  return (
    <>
      <Header />
      <ProjectHeader />

      {/* Category Labels */}
      <div className="flex flex-wrap justify-center py-6 m-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={`px-4 py-2 rounded-full m-1 md:m-2 transition duration-300 ease-in-out transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-customBlue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-customBlue hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

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
                <p className="text-lg text-customYellow">
                  {currentProject?.sector}
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
