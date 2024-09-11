// pages/team.js

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../app/globals.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Updated import path for Heroicons v2
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample core team members data
const teamMembers = [
  {
    image: "/images/projects/1.webp",
    name: "Dr. Luke Bucci",
    position: "VP, Research & Development (Biomedical Sciences)",
    qualifications: "PhD, CCN, CNS",
  },
  {
    image: "/images/projects/1.webp",
    name: "Dr. Nima Alamdari",
    position: "Chief Scientific Officer (Physiology)",
    qualifications: "PhD",
  },
  {
    image: "/images/projects/1.webp",
    name: "Dr. Mastaneh Sharafi",
    position: "Director, Scientific Affairs (Nutritional Sciences)",
    qualifications: "PhD, RD",
  },
  {
    image: "/images/projects/1.webp",
    name: "Dr. Luke Bucci",
    position: "VP, Research & Development (Biomedical Sciences)",
    qualifications: "PhD, CCN, CNS",
  },
  {
    image: "/images/projects/1.webp",
    name: "Dr. Nima Alamdari",
    position: "Chief Scientific Officer (Physiology)",
    qualifications: "PhD",
  },
  {
    image: "/images/projects/1.webp",
    name: "Dr. Mastaneh Sharafi",
    position: "Director, Scientific Affairs (Nutritional Sciences)",
    qualifications: "PhD, RD",
  },
  {
    image: "/images/projects/1.webp",
    name: "Dr. Mastaneh Sharafi",
    position: "Director, Scientific Affairs (Nutritional Sciences)",
    qualifications: "PhD, RD",
  },
  {
    image: "/images/projects/1.webp",
    name: "Dr. Mastaneh Sharafi",
    position: "Director, Scientific Affairs (Nutritional Sciences)",
    qualifications: "PhD, RD",
  },
  {
    image: "/images/projects/1.webp",
    name: "Dr. Mastaneh Sharafi",
    position: "Director, Scientific Affairs (Nutritional Sciences)",
    qualifications: "PhD, RD",
  },
];

// Sample sub-team members data
const subTeamMembers = [
  {
    image: "/images/projects/2.webp",
    name: "Joel Bishop",
    position: "Planning Manager",
    qualifications:
      "Bachelor of Environmental Planning (University of Waikato)",
  },
  {
    image: "/images/projects/2.webp",
    name: "Maurice Bellantoni",
    position: "Senior Architectural Designer",
    qualifications:
      "Bachelor & PhD in Architecture, Master in Urban Planning, Residential Design & Project Management",
  },
  {
    image: "/images/projects/2.webp",
    name: "John Kim",
    position: "Geotechnical Manager",
    qualifications: "MEngNZ, MEngSt (University of Canterbury)",
  },
  {
    image: "/images/projects/2.webp",
    name: "Janine Barrett",
    position: "Group Manager: Finance & Administration (Hamilton)",
    qualifications:
      "Bachelor of Communications, Post Grad diploma in Management Studies",
  },
  {
    image: "/images/projects/2.webp",
    name: "Joel Bishop",
    position: "Planning Manager",
    qualifications:
      "Bachelor of Environmental Planning (University of Waikato)",
  },
  {
    image: "/images/projects/2.webp",
    name: "Maurice Bellantoni",
    position: "Senior Architectural Designer",
    qualifications:
      "Bachelor & PhD in Architecture, Master in Urban Planning, Residential Design & Project Management",
  },
  {
    image: "/images/projects/2.webp",
    name: "John Kim",
    position: "Geotechnical Manager",
    qualifications: "MEngNZ, MEngSt (University of Canterbury)",
  },
  {
    image: "/images/projects/2.webp",
    name: "Janine Barrett",
    position: "Group Manager: Finance & Administration (Hamilton)",
    qualifications:
      "Bachelor of Communications, Post Grad diploma in Management Studies",
  },
];

const TeamPage = () => {
  const [currentMember, setCurrentMember] = useState(teamMembers[0]);
  const [activeIndex, setActiveIndex] = useState(1); // Start from the first real image
  const sliderRef = useRef(null);
  const totalSlides = teamMembers.length;
  const subTeamSliderRef = useRef(null);

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
      setCurrentMember(teamMembers[(activeIndex - 1) % totalSlides]); // Update current member based on active index
    }
  }, [activeIndex]);

  // Function to scroll the sub-team slider
  const scrollSubTeamSlider = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    subTeamSliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <header className="pt-8 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10 xl:px-16">
            <h1 className="text-3xl font-bold text-center text-customBlue">
              Our Core Team
            </h1>
          </div>
        </header>

        {/* Core Team Section */}
        <section className="py-16">
          <div className="max-w-screen-md mx-auto px-6 md:px-10 xl:px-16">
            {/* Horizontal Scrollable Slider */}
            <div
              ref={sliderRef}
              className="relative flex gap-8 overflow-x-auto scrollbar-hide py-6"
            >
              {/* Clone last slide at the beginning for circular effect */}
              <div
                className={`carousel-image flex-shrink-0 w-[200px] h-[200px] rounded-full transition-transform duration-500 cursor-pointer ${
                  activeIndex === 0 ? "scale-125" : "scale-90"
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
                  className={`carousel-image flex-shrink-0 w-[200px] h-[200px] rounded-full transition-transform duration-500 cursor-pointer ${
                    index + 1 === activeIndex ? "scale-125" : "scale-90"
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
                className={`carousel-image flex-shrink-0 w-[200px] h-[200px] rounded-full transition-transform duration-500 cursor-pointer ${
                  activeIndex === totalSlides + 1 ? "scale-125" : "scale-90"
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
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-semibold text-customBlue mb-2">
                {currentMember.name}
              </h3>
              <p className="text-lg text-gray-600">{currentMember.position}</p>
              <p className="text-md text-gray-500">
                {currentMember.qualifications}
              </p>
            </div>
          </div>
        </section>

        {/* Sub Team Display Section */}
        <section className="relative">
          <div className="max-w-screen-lg mx-auto px-4 md:px-6 xl:px-10">
            {/* Left Arrow Button */}
            <button
              onClick={() => scrollSubTeamSlider("left")}
              className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-customYellow"
            >
              <ChevronLeftIcon className="w-5 h-5 text-customBlue text-bold" />{" "}
              {/* Heroicon Left Arrow */}
            </button>

            {/* Horizontal Scrollable Slider */}
            <div
              ref={subTeamSliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
            >
              {subTeamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center min-w-[220px] p-4"
                >
                  {/* Team Member Image */}
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  {/* Team Member Details */}
                  <h3 className="text-lg font-semibold text-customBlue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                  <p className="text-xs text-gray-500">
                    {member.qualifications}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={() => scrollSubTeamSlider("right")}
              className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-customYellow"
            >
              <ChevronRightIcon className="w-5 h-5 text-customBlue text-bold" />{" "}
              {/* Heroicon Right Arrow */}
            </button>
          </div>
        </section>

        <section className="pt-10">
          <div className="max-w-screen-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Complete Professional Package Section */}
              <div className="bg-customBlue text-center p-8 h-[350px] flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Complete Professional Package
                </h2>
                <p className="text-lg text-white mb-6">
                  Have a look at our services that we provide
                </p>
                <div className="flex justify-center">
                  <button className="py-2 px-4 bg-customYellow text-white rounded-full hover:bg-customYellow hover:text-white transition duration-300">
                    View Services
                  </button>
                </div>
              </div>

              {/* Worked With Us Lately Section */}
              <div className="bg-customYellow p-8 h-[350px] text-center flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Worked With Us Lately?
                </h2>
                <p className="text-lg text-white">
                  GDC would love to hear from you and your experience with GDC
                  Consultants Ltd. All feedback is appreciated and used to help
                  GDC Consultants Ltd to provide the best services to you in the
                  future. Feel free to send us a message or contact us on +64 7
                  838 0090.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
