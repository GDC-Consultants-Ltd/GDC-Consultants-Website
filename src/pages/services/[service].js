import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../../app/globals.css";
import Image from "next/image";
import GetInTouch from "../../components/GetInTouch";
import ServiceDescription from "../../components/services/ServiceDescription";
import ServiceSections from "../../components/services/ServiceSections";
import services from "../../data/servicesData"; // Import the services data
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import { ElectricalEngineeringUniqueContent, InternshipsUniqueContent, LandscapingUniqueContent, PavementDesignUniqueContent, PlanningUniqueContent, SeismicEngineeringUniqueContent, WatersUniqueContent } from "@/components/services/UniqueContent";

// Static generation for services pages
export async function getStaticPaths() {
  const paths = Object.keys(services).map((slug) => ({
    params: { service: slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 if service is not found
  };
}

export async function getStaticProps({ params }) {
  const serviceData = services[params.service] || null;

  return {
    props: {
      serviceData,
    },
  };
}

const ServicePage = ({ serviceData }) => {
  if (!serviceData) {
    return <p>Service not found.</p>; // Fallback for unknown service
  }

  return (
    <>
      {/* Dynamic SEO Head */}
      <Head>
        <title>{serviceData.metaTitle}</title>
        <meta name="description" content={serviceData.metaDescription} />
        <link
          rel="canonical"
          href={`https://gdcgroup.netlify.app/services/${serviceData.slug}`}
        />

        {/* hrefLang tags for different languages/regions */}
        <link rel="alternate" href={`https://gdcgroup.netlify.app/services/${serviceData.slug}`} hrefLang="en-nz" />
        <link rel="alternate" href={`https://gdcgroup.netlify.app/services/${serviceData.slug}`} hrefLang="en" />
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
      {serviceData.sections.map((section, index) => (
        <ServiceSections
          key={section.id}
          index={index} // Pass the index here to determine the layout
          title={section.title}
          description={section.description}
          points={section.points}
          image={section.image}
        />
      ))}

      {/* Unique Content for Specific Service */}
      {/* {serviceData.uniqueContent && serviceData.uniqueContent} */}
      {serviceData.uniqueContent === "watersUniqueContent" && <WatersUniqueContent />}
      {serviceData.uniqueContent === "landscapingUniqueContent" && <LandscapingUniqueContent />}
      {serviceData.uniqueContent === "electricalEngineeringUniqueContent" && <ElectricalEngineeringUniqueContent />}
      {serviceData.uniqueContent === "internshipsUniqueContent" && <InternshipsUniqueContent />}
      {serviceData.uniqueContent === "pavementDesignUniqueContent" && <PavementDesignUniqueContent />}
      {serviceData.uniqueContent === "seismicEngineeringUniqueContent" && <SeismicEngineeringUniqueContent />}
      {serviceData.uniqueContent === "PlanningUniqueContent" && <PlanningUniqueContent />}
      {/* Get In Touch Component */}
      <GetInTouch />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ServicePage;
