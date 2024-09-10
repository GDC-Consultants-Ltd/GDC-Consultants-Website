// pages/services/[service].js

"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../../app/globals.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import GetInTouch from "../../components/services/GetInTouch";
import ServiceDescription from "../../components/services/ServiceDescription";
import ServiceSections from "../../components/services/ServiceSections";
import services from "../../data/servicesData"; // Import the services data

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
        <div className="w-full h-96 relative">
          <Image
            src={serviceData.image}
            alt={serviceData.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-700 ease-in-out"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-5 left-5 p-6 text-left">
          <nav className="text-2xl text-white font-bold mb-2 flex items-center space-x-1">
            <Link href="/" className="hover:text-customYellow">
              Home
            </Link>
            <span>&gt;</span>
            <span className="hover:text-customYellow">Services</span>
          </nav>
          <h1 className="text-white text-5xl font-bold leading-tight">
            {serviceData.title}
          </h1>
        </div>
      </div>

      {/* Service Description Section */}
      <ServiceDescription description={serviceData.description} />

      {/* Dynamic Alternating Sections */}
      {serviceData.sections && (
        <ServiceSections sections={serviceData.sections} />
      )}

      {/* Unique Content for Specific Service */}
      {serviceData.uniqueContent && serviceData.uniqueContent}

      {/* Get In Touch Component */}
      <GetInTouch />
      <Footer />
    </>
  );
};

export default ServicePage;
