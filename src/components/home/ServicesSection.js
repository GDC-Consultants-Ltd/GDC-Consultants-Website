"use client"; // Ensures this is a client-side component

import React from "react";
import Link from "next/link"; // Import Link from Next.js
import {
  BriefcaseIcon,
  Cog6ToothIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  HomeModernIcon,
  ClipboardDocumentListIcon,
  ScaleIcon,
  AcademicCapIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "3 Waters & Contamination",
    slug: "3-waters",
    icon: <GlobeAltIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Architectural Designs",
    slug: "architectural-designs",
    icon: <HomeModernIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Electrical Engineering",
    slug: "electrical-engineering",
    icon: <Cog6ToothIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Project & Construction Management",
    slug: "project-management",
    icon: <ClipboardDocumentListIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Geotechnical Engineering",
    slug: "geotechnical-engineering",
    icon: <ScaleIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Infrastructure & Subdivision Engineering",
    slug: "infrastructure",
    icon: <BriefcaseIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Research & Development",
    slug: "research-development",
    icon: <AcademicCapIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Road Transport",
    slug: "road-transport",
    icon: <TruckIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Seismic Engineering",
    slug: "seismic-engineering",
    icon: <WrenchScrewdriverIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Structural Engineering",
    slug: "structural-engineering",
    icon: <BuildingOfficeIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Planning",
    slug: "planning",
    icon: <PresentationChartLineIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Surveying",
    slug: "surveying",
    icon: <MagnifyingGlassIcon className="w-12 h-12" />, // Increased size
  },
  {
    title: "Training",
    slug: "training",
    icon: <BookOpenIcon className="w-12 h-12" />, // Increased size
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

      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-6 xl:px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md overflow-hidden transition duration-300 group flex flex-col items-center border-b-4 border-customBlue"
          >
            {/* Sliding background effect */}
            <div className="absolute inset-0 bg-customBlue transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></div>
            <div className="flex flex-col items-center p-4 z-10 relative group-hover:text-white">
              <div className="bg-white rounded-full p-3 shadow-lg transition duration-300 group-hover:bg-customYellow group-hover:text-white">
                {React.cloneElement(service.icon, {
                  className: "w-12 h-12 text-customBlue group-hover:text-white", // Increased size
                })}
              </div>
              <h4 className="text-base font-semibold mt-3 text-center text-customBlue group-hover:text-white">
                {service.title}
              </h4>
              <Link href={`/services/${service.slug}`} legacyBehavior>
                <a className="mt-2 bg-transparent text-white px-3 py-1 rounded-md text-xs font-semibold transition duration-300 group-hover:bg-customYellow group-hover:text-white opacity-0 group-hover:opacity-100">
                  View More
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
