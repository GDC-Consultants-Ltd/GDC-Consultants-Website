// pages/services/[service].js

"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../../app/globals.css";
import { useRouter } from "next/router";
import Image from "next/image";
import GetInTouch from "../../components/GetInTouch";
import ServiceDescription from "../../components/services/ServiceDescription";
import ServiceSections from "../../components/services/ServiceSections";
import services from "../../data/servicesData"; // Import the services data
import ScrollToTop from "@/components/ScrollToTop";

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;

  const serviceData = services[service]; // Fetch service data based on slug

  if (!serviceData) {
    return <p>Service not found.</p>; // Fallback for unknown service
  }

  return (
    <>
      <Header />
      <div className="relative">
        <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Image
            src={serviceData.image}
            alt={serviceData.title}
            layout="fill"
            objectFit="cover"
            quality={90} // Adjust the quality setting for better clarity
            className="transition-opacity duration-700 ease-in-out"
          />
        </div>
        {/* Modified gradient overlay for better image clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

        <div className="absolute bottom-5 left-5 p-4 sm:p-6 text-left">
          <nav className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-2 flex items-center space-x-1">
            <span className="text-customYellow">Services</span>
          </nav>
        </div>
      </div>

      {/* Service Description Section */}
      <ServiceDescription
        title={serviceData.title}
        description={serviceData.description}
      />

      {/* Dynamic Alternating Sections */}
      {serviceData.sections && (
        <ServiceSections sections={serviceData.sections} />
      )}

      {/* Unique Content for Specific Service */}
      {serviceData.uniqueContent && serviceData.uniqueContent}

      {/* Get In Touch Component */}
      <GetInTouch />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ServicePage;
