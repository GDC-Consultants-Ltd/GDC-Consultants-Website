// components/about/AboutCardSection.js

import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

const AboutCardSection = () => {
  const teamMembers = [
    {
      id: 1,
      title: "We Are Industry Leaders",
      description:
        "GDC Consultants are a nationwide provider of innovative solutions in all areas of the engineering and architecture process chains. Our unique success story is predicated on our core values of innovation, competency, and strict coordination on client needs.",
      image: "/images/about/2.png", // replace with actual image path
    },
    {
      id: 2,
      title: "Who We Are",
      description:
        "Through our expertise, competency, and continuous client support, we have earned the trust of our clients. By developing long lasting partnerships and consistently providing the best possible solutions and services, we are considered industry leaders. \nAt GDC Consultants, we believe in having strong values and priorities in everything we do. We take responsibility for the way our work affects society and the environment, and we are constantly aiming to give back to our community.",
      image: "/images/about/1.png", // replace with actual image path
    },
    {
      id: 3,
      title: "We Provide Sustainable Solutions",
      description:
        "We understand the vital necessity of sustainability in everything we do. Our corporate practice is founded on ethical behavior, innovation, and ensuring the sustainability of our community and environment.",
      image: "/images/about/3.png", // replace with actual image path
    },
  ];

  return (
    <section className="px-6 py-12 bg-white text-center">
      <h2 className="text-lg uppercase font-semibold text-gray-500">
        About Us
      </h2>
      <h1 className="text-4xl text-customBlue font-bold mt-2 mb-4">
        GDC Consultants LTD
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Chartered Professional Engineers & Architectural Designs
      </p>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* First Card */}
        <div className="overflow-hidden md:w-[28%]">
          <Image
            src={teamMembers[0].image}
            alt={teamMembers[0].title}
            width={300} // Adjust the width
            height={300} // Adjust the height
            className="w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{teamMembers[0].title}</h3>
            <p className="text-gray-600 mb-2">“Your vision. Our expertise.”</p>
            <p className="text-gray-600">{teamMembers[0].description}</p>
          </div>
        </div>

        {/* Middle Card with Down Position */}
        <div className="overflow-hidden md:w-[28%] md:mt-10">
          <Image
            src={teamMembers[1].image}
            alt={teamMembers[1].title}
            width={300} // Adjust the width
            height={300} // Adjust the height
            className="w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{teamMembers[1].title}</h3>
            <p className="text-gray-600">{teamMembers[1].description}</p>
          </div>
        </div>

        {/* Third Card */}
        <div className="overflow-hidden md:w-[28%]">
          <Image
            src={teamMembers[2].image}
            alt={teamMembers[2].title}
            width={300} // Adjust the width
            height={300} // Adjust the height
            className="w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{teamMembers[2].title}</h3>
            <p className="text-gray-600">{teamMembers[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCardSection;
