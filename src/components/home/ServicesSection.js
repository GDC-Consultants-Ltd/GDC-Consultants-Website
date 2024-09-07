// src/components/ServicesSection.js
import React from "react";
import {
  BriefcaseIcon,
  Cog6ToothIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const services = [
  {
    title: "Structural Engineering",
    icon: <BuildingOfficeIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/structural.webp",
  },
  {
    title: "Geotechnical Engineering",
    icon: <BriefcaseIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/geotechnical.webp",
  },
  {
    title: "Architectural Designs",
    icon: <Cog6ToothIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/architectural.webp",
  },
  {
    title: "Environmental Engineering & Contamination",
    icon: <Cog6ToothIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/Environmental Engineering.webp",
  },
  {
    title: "Seismic Engineering",
    icon: <Cog6ToothIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/Seismic Engineering.webp",
  },
  {
    title: "Road Transport",
    icon: <BuildingOfficeIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/Road Transport.webp",
  },
  {
    title: "Infrastructure & Subdivision Engineering",
    icon: <BriefcaseIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/Infrastructure & Subdivision Engineering.webp",
  },
  {
    title: "Project & Construction Management",
    icon: <Cog6ToothIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/Project & Construction Management.webp",
  },
  {
    title: "Research & Development",
    icon: <Cog6ToothIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/Research & Development.webp",
  },
  {
    title: "Training",
    icon: <Cog6ToothIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/Training.webp",
  },
  {
    title: "Planning",
    icon: <Cog6ToothIcon className="w-8 h-8 text-customYellow" />,
    image: "/images/services/Planning.webp",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="text-center mb-8 px-4 md:px-8 xl:px-12">
        <h2 className="text-3xl text-customYellow uppercase font-bold mt-2">
          Our Expertise and Services
        </h2>
        <h3 className="text-sm text-customBlue tracking-wide">
          At GDC Consultants, we offer a wide range of specialized consulting
          services to help our clients successfully complete their construction
          projects. Explore our services to see how we can help you reach your
          goals.
        </h3>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 xl:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden transition duration-300 group hover:bg-gray-100 flex flex-col"
          >
            <Image
              src={service.image} // Path to the service image
              alt={service.title} // Alt text for accessibility
              width={400} // Adjust the width as needed
              height={160} // Adjust the height as needed
              className="w-full h-40 object-cover" // Use object-cover to maintain the object-fit behavior
            />

            <div className="flex flex-col items-center p-4 flex-1">
              {/* Icon with group-hover effect */}
              <div className="bg-white rounded-full p-3 shadow-lg -mt-8 transition duration-300 group-hover:bg-customYellow">
                {React.cloneElement(service.icon, {
                  className: "w-8 h-8 text-customYellow group-hover:text-white",
                })}
              </div>
              <h4 className="text-lg font-semibold mt-2 text-center">
                {service.title}
              </h4>
              {/* Spacer to push button down */}
              <div className="flex-grow"></div>
              {/* Button with group-hover effect */}
              <button className="mt-2 bg-blue-900 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition duration-300 group-hover:bg-customYellow">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
