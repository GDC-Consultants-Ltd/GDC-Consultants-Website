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
import Head from "next/head";

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;

  const serviceData = services[service]; // Fetch service data based on slug

  if (!serviceData) {
    return <p>Service not found.</p>; // Fallback for unknown service
  }

  return (
    <>
      {/* Dynamic SEO Head */}
      <Head>
        <title>{serviceData.metaTitle}</title>
        <meta name="description" content={serviceData.metaDescription} />
        <meta
          property="og:title"
          content={`${serviceData.metaTitle} | GDC Consultants`}
        />
        <meta property="og:description" content={serviceData.metaDescription} />
        <meta property="og:image" content={serviceData.image} />
        <meta
          property="og:url"
          content={`https://www.gdcgroup.co.nz/services/${service}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${serviceData.title} | GDC Consultants`}
        />
        <meta name="twitter:description" content={serviceData.metaDescription} />
        <meta name="twitter:image" content={serviceData.image} />
        <link
          rel="canonical"
          href={`https://www.gdcgroup.co.nz/services/${service}`}
        />
      </Head>

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
