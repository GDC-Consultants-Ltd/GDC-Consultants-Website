// pages/projects.js
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../app/globals.css";
import ProjectHeader from "@/components/projects/ProjectHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

const projects = [
  {
    title: "Claudelands Events Centre",
    image: "/images/projects/1.webp",
    location: "Hamilton",
  },
  {
    title: "Maraenui Medical Centre",
    image: "/images/projects/2.webp",
    location: "Napier",
  },
  {
    title: "Museum",
    image: "/images/projects/1.webp",
    location: "Rotorua - Seismic",
  },
  {
    title: "Fairy Springs Motel",
    image: "/images/projects/2.webp",
    location: "Rotorua",
  },
  {
    title: "Apartments",
    image: "/images/projects/2.webp",
    location: "Structural",
  },
  {
    title: "Waikato University",
    image: "/images/projects/2.webp",
    location: "Educational",
  },
  {
    title: "Subdivision Baverstock",
    image: "/images/projects/2.webp",
    location: "Subdivision",
  },
  {
    title: "Holiday Park and Commercial Centre in the Coromandel",
    image: "/images/projects/2.webp",
    location: "Planning",
  },
];

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(1); // Start from the first real image
  const sliderRef = useRef(null);
  const totalSlides = projects.length;

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
      // If we are at the first clone, jump to the last real slide
      setTimeout(() => {
        sliderRef.current.scrollTo({
          left:
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth * 2,
          behavior: "auto",
        });
        setActiveIndex(totalSlides);
      }, 500);
    } else if (activeIndex === totalSlides + 1) {
      // If we are at the last clone, jump to the first real slide
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

  return (
    <>
      <Header />
      <ProjectHeader />
      <section className="py-16 bg-[#F3F5F6]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 xl:px-16">
          {/* Horizontal Scrollable Slider */}
          <div
            ref={sliderRef}
            className="relative flex gap-8 overflow-x-auto scrollbar-hide py-6"
          >
            {/* Clone last slide at the beginning for circular effect */}
            <div
              className={`carousel-image flex-shrink-0 w-[500px] h-[350px] transition-transform duration-500 cursor-pointer ${
                activeIndex === 0 ? "scale-110" : "scale-100"
              }`}
            >
              <Image
                src={projects[totalSlides - 1].image}
                alt={projects[totalSlides - 1].title}
                width={500}
                height={350}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index + 1);
                  setCurrentProject(project);
                }}
                className={`carousel-image flex-shrink-0 w-[500px] h-[350px] transition-transform duration-500 cursor-pointer ${
                  index + 1 === activeIndex ? "scale-110" : "scale-100"
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

            {/* Clone first slide at the end for circular effect */}
            <div
              className={`carousel-image flex-shrink-0 w-[500px] h-[350px] transition-transform duration-500 cursor-pointer ${
                activeIndex === totalSlides + 1 ? "scale-110" : "scale-100"
              }`}
            >
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                width={500}
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-customBlue mb-2">
              {currentProject.title}
            </h3>
            <p className="text-lg text-customYellow">
              {currentProject.location}
            </p>
          </div>
        </div>
      </section>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default ProjectsPage;
