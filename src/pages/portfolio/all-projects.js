"use client"; // Ensure this is treated as a client component

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../app/globals.css";
import ProjectHeader from "@/components/projects/ProjectHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import ScrollToTop from "@/components/ScrollToTop";

// Updated projects array with categories and sectors inside main array
const projectsData = [
  {
    category: "Structural",
    projects: [
      {
        title: "Structural Project 1",
        image: "/images/projects/1.webp",
        location: "location 1",
        sector: "Heritage",
      },
    ],
  },
  {
    category: "Architectural",
    projects: [
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/1.png",
        location: "Thames",
        sector: "Accommodation",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/2.png",
        location: "Thames",
        sector: "Heritage",
      },
      {
        title: "Architectural Design Project",
        image: "/images/projects/archi/3.png",
        location: "Thames",
        sector: "Educational",
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
        location: "location 2",
        sector: "Cultural",
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
        location: "location 3",
        sector: "Medical",
      },
    ],
  },
  {
    category: "Commercial",
    projects: [
      {
        title: "Commercial Project",
        image: "/images/projects/4.webp",
        location: "location 4",
        sector: "Council",
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
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sliderRef = useRef(null);

  // Extract unique categories and sectors from projectsData
  const categories = [
    "All Projects",
    ...projectsData.map((item) => item.category),
  ];
  const sectors = [
    "All Sectors",
    ...new Set(
      projectsData
        .flatMap((item) => item.projects.map((project) => project.sector))
        .filter(Boolean)
    ),
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

    if (sector !== "All Sectors") {
      filtered = filtered.filter((project) => project.sector === sector);
    }

    setFilteredProjects(filtered);
    setCurrentProject(filtered[0] || null); // Set the first project as the current one, if available
    setActiveIndex(0); // Reset slider to the first project
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSector("All Sectors"); // Reset sectors when filtering by category
    filterProjects(category, "All Sectors");
  };

  // Handle sector selection
  const handleSectorClick = (sector) => {
    setSelectedSector(sector);
    setSelectedCategory("All Projects"); // Reset categories when filtering by sector
    filterProjects("All Projects", sector);
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
    filterProjects("All Projects", "All Sectors");
  }, []);

  return (
    <>
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
                ? "bg-customBlue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-customBlue hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Second set of labels for sectors */}
      <div className="flex flex-wrap justify-center pt-2 m-4">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => handleSectorClick(sector)}
            className={`px-4 py-2 rounded-full m-1 md:m-2 transition duration-300 ease-in-out transform hover:scale-105 ${
              selectedSector === sector
                ? "bg-yellow-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white"
            }`}
          >
            {sector}
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
                <p className="text-lg text-customYellow">
                  {currentProject?.location}
                </p>
              </div>
            </>
          ) : (
            <p className="text-center text-lg text-gray-600 py-20">
              No projects available in this category or sector.
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
