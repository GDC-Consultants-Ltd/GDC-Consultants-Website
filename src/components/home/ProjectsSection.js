import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projectsData from "@/data/projectsData.json";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Flatten and filter the JSON data to include only projects with category and title
    const allProjects = projectsData.flatMap((category) =>
      category.projects
        .filter((project) => project.title && category.category) // Ensure projects have title and category
        .map((project) => ({
          ...project,
          category: category.category,
        }))
    );

    // Shuffle and select 12 random projects
    const shuffledProjects = allProjects.sort(() => 0.5 - Math.random());
    const selectedProjects = shuffledProjects.slice(0, 12);

    setProjects(selectedProjects);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setIsVisible(true);
          setAnimationTriggered(true); // Ensures animations are triggered only once
        }
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [animationTriggered]);

  // Define animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[#F3F5F6] overflow-hidden">
      <motion.div
        className="text-center mb-12 px-6 md:px-10 xl:px-16"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <h2 className="text-4xl text-customYellow uppercase font-bold mt-2">
          Explore Our Portfolio
        </h2>
        <h3 className="text-md text-customBlue tracking-wide">
          Our portfolio showcases the diverse range of successful projects we’ve
          completed across New Zealand. From large-scale commercial developments
          to smaller residential builds.
        </h3>
      </motion.div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden group transform transition-transform duration-500 ease-in-out"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-80 group-hover:bg-opacity-100 transition duration-300">
              <span className="text-xs font-semibold uppercase text-customBlue bg-customYellow/30 px-2 py-1 rounded-md">
                {project.category}
              </span>
              <h4 className="text-lg text-customBlue font-semibold mt-2">
                {project.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/portfolio/all-projects"
          className="bg-customYellow text-white font-semibold px-6 py-3 rounded-md hover:bg-customBlue transition duration-300"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
