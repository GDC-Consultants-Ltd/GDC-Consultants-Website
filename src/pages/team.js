// pages/team.js

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../app/globals.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubContact from "@/components/SubContact";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import { motion } from "framer-motion";

const teamMembers = [
  {
    image: "/images/team/Clement-Fernando-1.webp",
    name: "Clement Fernando",
    position: "Managing Director",
    qualifications: "MSc (Eng), CPEng, IntPE(NZ), CMEngNZ, APEC Engineer",
  },
  {
    image: "/images/team/Alin-Poanta-1.webp",
    name: "Alin Poanta",
    position: "Senior Associate - Lead Structural Engineer",
    qualifications: "BE(Civil) CPEng, CMEngNZ, IntPE(NZ)",
  },
  {
    image: "/images/team/Yi-Su-1.webp",
    name: "Yi Su",
    position: "Senior Associate - Principal Structural Engineer",
    qualifications:
      "BE(Hons), MEngSt(Hons), CPEng, CMEngNZ, IntPE(NZ)/APEC Engineer",
  },
];

const subTeamMembers = [
  {
    image: "/images/team/Tom-Fox.webp",
    name: "Tom Fox",
    position: "Architectural Manager",
    qualifications: "NDIP (Architectural), NDIP (Building Control Surveying)",
  },
  {
    image: "/images/team/Joel-Bishop.webp",
    name: "Joel Bishop",
    position: "Planning Manager",
    qualifications:
      "Bachelor of Environmental Planning (University of Waikato)",
  },
  {
    image: "/images/team/Maurice-Bellantoni.webp",
    name: "Maurice Bellantoni",
    position: "Senior Architectural Designer",
    qualifications:
      "Bachelor & PhD in Architecture, Master in Urban Planning, Residential Design & Project Management",
  },
  {
    image: "/images/team/John-Kim-1.webp",
    name: "John Kim",
    position: "Geotechnical Manager",
    qualifications: "MEngNZ, MEngSt (University of Canterbury)",
  },
  {
    image: "/images/team/Janine-Barrett.webp",
    name: "Janine Barrett",
    position: "Group Manager: Finance & Administration (Hamilton)",
    qualifications:
      "Bachelor of Communications, Post Grad diploma in Management Studies",
  },
  {
    image: "/images/team/Danyon-Fernando.webp",
    name: "Danyon Fernando",
    position: "Director of Operations",
    qualifications:
      "Bachelor of Arts with Honours (Criminology) - Victoria University of Wellington",
  },
  {
    image: "/images/team/Vazin-Shareef.webp",
    name: "Vazin Shareef",
    position: "Marketing & IT Manager",
    qualifications:
      "Bachelor of Commerce (BCom) - Victoria University of Wellington",
  },
  {
    image: "/images/team/Bethany-Rutter.webp",
    name: "Bethany Rutter",
    position: "Marketing Executive",
    qualifications: "Bachelor of Applied Management (BAM)",
  },
  {
    image: "/images/team/Kasia-Irvine.webp",
    name: "Kasia Irvine",
    position: "Office Manager (Thames & Whitianga)",
    qualifications: "",
  },
];

const TeamPage = () => {
  const [currentMember, setCurrentMember] = useState(teamMembers[0]);
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderRef = useRef(null);
  const totalSlides = teamMembers.length;
  const subTeamSliderRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

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
      setActiveIndex((prevIndex) => (prevIndex % totalSlides) + 1);
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
      setCurrentMember(teamMembers[(activeIndex - 1) % totalSlides]);
    }
  }, [activeIndex]);

  // Function to scroll the sub-team slider
  const scrollSubTeamSlider = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    subTeamSliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    // Pause auto-scroll temporarily when manually navigating
    pauseAutoScroll();
  };

  // Function to auto-scroll the sub-team slider every few seconds
  const autoScrollSubTeamSlider = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      if (!subTeamSliderRef.current) return;

      // Check the width of the scrollable content and reset if it's near the end
      const maxScrollLeft =
        subTeamSliderRef.current.scrollWidth -
        subTeamSliderRef.current.clientWidth;

      // Scroll to the right by a fixed amount
      if (subTeamSliderRef.current.scrollLeft >= maxScrollLeft) {
        subTeamSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        subTeamSliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // Scroll every 3 seconds
  };

  // Pause auto-scroll when manually controlled and restart after a delay
  const pauseAutoScroll = () => {
    clearInterval(autoScrollIntervalRef.current);
    setTimeout(() => {
      autoScrollSubTeamSlider();
    }, 5000); // Restart auto-scroll after 5 seconds of inactivity
  };

  // Start the auto-scroll when the component mounts
  useEffect(() => {
    autoScrollSubTeamSlider();

    return () => {
      clearInterval(autoScrollIntervalRef.current); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
      <Head>
        <title>Meet Our Team | GDC Consultants - Leadership & Experts</title>
        <meta
          name="description"
          content="Get to know the experienced leadership and expert team members at GDC Consultants. We are industry leaders in architecture, engineering, and project management across New Zealand."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://gdcgroup.netlify.app/team" />

        {/* hrefLang tags */}
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/team"
          hrefLang="en-nz"
        />
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/team"
          hrefLang="en"
        />
      </Head>
      <Header />
      <div className="min-h-screen">
        <header className="pt-8 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-10">
            <h1 className="text-3xl font-bold text-center text-customBlue">
              Our Core Team
            </h1>
          </div>
        </header>

        {/* Core Team Section */}
        <section className="py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden shadow-md cursor-pointer rounded-lg"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-[450px] transition-transform duration-500"
                />
                {/* Initial Name and Position */}
                <div className="absolute bottom-6 left-6 z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <h4 className="text-white text-xl font-bold">
                    {member.name}
                  </h4>
                  <p className="text-customYellow text-sm">{member.position}</p>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                {/* Hover Content */}
                <motion.div
                  className="absolute inset-0 bg-customYellow bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white text-center px-4">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <h5 className="text-md">{member.position}</h5>
                    <p className="text-sm mt-2">{member.qualifications}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Sub Team Display Section */}
        <section className="relative py-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-10"
          >
            {/* Horizontal Scrollable Slider */}
            <div
              ref={subTeamSliderRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {subTeamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden cursor-pointer min-w-full md:min-w-[220px] flex-shrink-0"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Team Member Image */}
                  <div className="w-full h-[200px] md:h-[250px] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={250}
                      height={250}
                      className="object-cover w-full h-full rounded-lg transition-transform duration-500"
                    />
                  </div>
                  {/* Square Section for Name and Position */}
                  <div className="absolute bottom-0 left-0 right-0 bg-customBlue bg-opacity-70 p-2 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-0">
                    <h4 className="text-white text-center text-md md:text-lg font-bold">
                      {member.name}
                    </h4>
                    <p className="text-customYellow text-center text-xs md:text-sm">
                      {member.position}
                    </p>
                  </div>
                  {/* Hover Content */}
                  <motion.div
                    className="absolute inset-0 bg-customYellow bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white text-center px-4">
                      <h4 className="text-lg md:text-xl font-bold">
                        {member.name}
                      </h4>
                      <p className="text-sm md:text-md">{member.position}</p>
                      <p className="text-xs md:text-sm mt-2">
                        {member.qualifications}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <SubContact />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamPage;
