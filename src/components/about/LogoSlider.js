// components/LogoSlider.js
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Array of logo images
const logos = [
  "/images/logos/image-5.webp",
  "/images/logos/image-6.webp",
  "/images/logos/image-7.webp",
  "/images/logos/image-8.webp",
  "/images/logos/image-9.webp",
  "/images/logos/image-10.webp",
  "/images/logos/image-11.png",
  "/images/logos/image-12.webp",
  "/images/logos/images.webp",
  "/images/logos/NZGS_logo1-300x80.webp",
  "/images/logos/nzpi-300x120.webp",
];

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  // Slider settings for autoplay
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5, // Number of logos visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scrolling without stops
    cssEase: "linear", // Smooth scrolling effect
    pauseOnHover: false, // Continue autoplay when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust the number of slides shown on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Adjust the number of slides shown on extra small screens
        },
      },
    ],
  };

  return (
    <div
      ref={sliderRef}
      className={`overflow-hidden w-full py-10 px-8 bg-white ${
        isVisible ? "animate-fade-in" : ""
      }`}
    >
      <Slider {...sliderSettings}>
        {logos.map((logo, index) => (
          <div
            className={`p-0.5 ${
              isVisible ? "animate-slide-up" : ""
            } hover:scale-105 transition-transform duration-300`}
            key={index}
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 w-30 object-contain mx-0.5"
              width={150} // Adjusted width based on the w-40 class
              height={80} // Adjusted height based on the h-20 class
              layout="intrinsic" // This maintains the set width and height of the image
            />
          </div>
        ))}
      </Slider>
      ;
    </div>
  );
};

export default LogoSlider;
