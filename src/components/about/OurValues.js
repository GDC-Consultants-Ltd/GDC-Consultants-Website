// components/OurValues.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Correct Heroicons imports for v2
import {
  BeakerIcon,
  LightBulbIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const OurValues = () => {
  // Slider settings for the right side columns
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample values data with Heroicons v2
  const values = [
    {
      icon: <BeakerIcon className="w-16 h-16 text-customBlue" />,
      title: "Research",
      description:
        "We conduct extensive research to ensure our solutions meet the highest standards.",
    },
    {
      icon: <LightBulbIcon className="w-16 h-16 text-customBlue" />,
      title: "Strategy",
      description:
        "Our strategies are crafted to provide optimal solutions tailored to your needs.",
    },
    {
      icon: <Cog6ToothIcon className="w-16 h-16 text-customBlue" />,
      title: "Design",
      description:
        "Designs are tailored to be user-centric, ensuring functionality and aesthetic appeal.",
    },
    {
      icon: <LightBulbIcon className="w-16 h-16 text-customBlue" />,
      title: "Innovation",
      description:
        "Innovative approaches are at the core of our service, adapting to industry changes.",
    },
    {
      icon: <Cog6ToothIcon className="w-16 h-16 text-customBlue" />,
      title: "Sustainability",
      description:
        "Sustainability is key in our approach, focusing on long-term and eco-friendly solutions.",
    },
  ];

  return (
    <>
      <section className="px-10 py-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Static Introductory Column */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 max-w-md">
              Our vision is to provide unmatched quality, competitive solutions,
              and customized approaches.
            </p>
          </div>

          {/* Slider Columns */}
          <Slider {...sliderSettings} className="col-span-2">
            {values.map((value, index) => (
              <div key={index} className="p-6 text-center bg-gray-100">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="px-10 py-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Slider Columns */}
          <Slider {...sliderSettings} className="col-span-2">
            {values.map((value, index) => (
              <div key={index} className="p-6 text-center bg-gray-100">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.description}</p>
              </div>
            ))}
          </Slider>

          {/* Static Introductory Column */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>            
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
