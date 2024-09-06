// src/components/ServicesSection.js
import React from "react";
import {
  BriefcaseIcon,
  Cog6ToothIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "Structural Engineering",
    icon: <BuildingOfficeIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/structural.webp",
  },
  {
    title: "Geotechnical Engineering",
    icon: <BriefcaseIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/geotechnical.webp",
  },
  {
    title: "Architectural Designs",
    icon: <Cog6ToothIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/architectural.webp",
  },
  {
    title: "Environmental Engineering & Contamination",
    icon: <Cog6ToothIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/Environmental Engineering.webp",
  },
  {
    title: "Seismic Engineering",
    icon: <Cog6ToothIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/Seismic Engineering.webp",
  },
  {
    title: "Road Transport",
    icon: <BuildingOfficeIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/Road Transport.webp",
  },
  {
    title: "Infrastructure & Subdivision Engineering",
    icon: <BriefcaseIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/Infrastructure & Subdivision Engineering.webp",
  },
  {
    title: "Project & Construction Management",
    icon: <Cog6ToothIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/Project & Construction Management.webp",
  },
  {
    title: "Research & Development",
    icon: <Cog6ToothIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/Research & Development.webp",
  },
  {
    title: "Training",
    icon: <Cog6ToothIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/Training.webp",
  },
  {
    title: "Planning",
    icon: <Cog6ToothIcon className="w-10 h-10 text-customYellow" />,
    image: "/images/services/Planning.webp",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="text-center mb-12 px-6 md:px-10 xl:px-16">
        <h2 className="text-4xl text-customYellow uppercase font-bold mt-2">Our Expertise and Services</h2>
        <h3 className="text-md text-customBlue tracking-wide">
          At GDC Consultants, we offer a wide range of specialized consulting
          services to help our clients successfully complete their construction
          projects. Explore our services to see how we can help you reach your
          goals.
        </h3>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-10 xl:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden transition duration-300 group hover:bg-gray-100 flex flex-col"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col items-center p-6 flex-1">
              {/* Icon with group-hover effect */}
              <div className="bg-white rounded-full p-4 shadow-2xl -mt-10 transition duration-300 group-hover:bg-customYellow">
                {React.cloneElement(service.icon, {
                  className: "w-10 h-10 text-customYellow group-hover:text-white",
                })}
              </div>
              <h4 className="text-xl font-semibold mt-4 text-center">{service.title}</h4>
              {/* Spacer to push button down */}
              <div className="flex-grow"></div>
              {/* Button with group-hover effect */}
              <button className="mt-4 bg-blue-900 text-white px-5 py-2 rounded-md font-semibold transition duration-300 group-hover:bg-customYellow">
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
