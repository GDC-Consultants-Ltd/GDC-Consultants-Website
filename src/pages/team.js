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
          <div className="max-w-screen-md mx-auto px-4 md:px-6 lg:px-10">
            {/* Horizontal Scrollable Slider */}
            <div
              ref={sliderRef}
              className="relative flex gap-4 md:gap-7 overflow-x-auto scrollbar-hide py-4 md:py-6"
            >
              {/* Clone last slide at the beginning for circular effect */}
              <div
                className={`carousel-image flex-shrink-0 flex-grow-0 flex-basis-[100%] sm:flex-basis-[80%] md:flex-basis-[50%] lg:flex-basis-[25%] h-[150px] sm:h-[180px] md:h-[200px] rounded-full transition-transform duration-500 cursor-pointer ${
                  activeIndex === 0 ? "scale-110" : "scale-90"
                }`}
              >
                <Image
                  src={teamMembers[totalSlides - 1].image}
                  alt={teamMembers[totalSlides - 1].name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveIndex(index + 1);
                    setCurrentMember(member);
                  }}
                  className={`carousel-image flex-shrink-0 flex-grow-0 flex-basis-[100%] sm:flex-basis-[80%] md:flex-basis-[50%] lg:flex-basis-[25%] h-[150px] sm:h-[180px] md:h-[200px] rounded-full transition-transform duration-500 cursor-pointer ${
                    index + 1 === activeIndex ? "scale-110" : "scale-90"
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              ))}

              {/* Clone first slide at the end for circular effect */}
              <div
                className={`carousel-image flex-shrink-0 flex-grow-0 flex-basis-[100%] sm:flex-basis-[80%] md:flex-basis-[50%] lg:flex-basis-[25%] h-[150px] sm:h-[180px] md:h-[200px] rounded-full transition-transform duration-500 cursor-pointer ${
                  activeIndex === totalSlides + 1 ? "scale-110" : "scale-90"
                }`}
              >
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>

            {/* Team Member Details */}
            <div className="mt-4 md:mt-6 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-customBlue mb-1 sm:mb-2">
                {currentMember.name}
              </h3>
              <p className="text-sm sm:text-md md:text-lg text-gray-600">
                {currentMember.position}
              </p>
              <p className="text-xs sm:text-sm md:text-md text-gray-500">
                {currentMember.qualifications}
              </p>
            </div>
          </div>
        </section>

        {/* Sub Team Display Section */}
        <section className="relative py-8">
          <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-10">
            {/* Horizontal Scrollable Slider */}
            <div
              ref={subTeamSliderRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {subTeamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center min-w-full md:min-w-[220px] p-2 md:p-4"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Team Member Image */}
                  <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden mb-2 md:mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={130}
                      height={130}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  {/* Team Member Details */}
                  <h3 className="text-md md:text-lg font-semibold text-customBlue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-md text-gray-600">
                    {member.position}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {member.qualifications}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SubContact />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamPage;
