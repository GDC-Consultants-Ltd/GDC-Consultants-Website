import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../../app/globals.css";
import { useRouter } from "next/router";

const services = {
  "3-waters": {
    title: "3 Waters & Contamination",
    description:
      "We offer structural engineering solutions for all kinds of projects...",
    image: "/images/services/structural.webp",
  },
  "architectural-designs": {
    title: "Architectural Designs",
    description: "We provide top-quality geotechnical analysis...",
    image: "/images/services/architectural.webp",
  },
  "electrical-engineering": {
    title: "Electrical Engineering",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  "project-management": {
    title: "Project & Construction Management",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  "geotechnical-engineering": {
    title: "Geotechnical Engineering",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  infrastructure: {
    title: "Infrastructure & Subdivision Engineerin",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  "research-development": {
    title: "Research & Development",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  "road-transport": {
    title: "Road Transport",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  "seismic-engineering": {
    title: "Seismic Engineering",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  "structural-engineering": {
    title: "Structural Engineering",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  planning: {
    title: "Planning",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  surveying: {
    title: "Surveying",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
  training: {
    title: "Training",
    description:
      "Our architectural design services are tailored to meet your needs...",
    image: "/images/services/architectural.webp",
  },
};

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
      <div className="container mx-auto py-8 px-4">
        {/* Landing image */}
        <img
          src={serviceData.image}
          alt={serviceData.title}
          className="w-full max-w-2xl"
        />
        {/* Home < Service */}
        <h4 className="text-3xl font-bold mb-4">Services</h4>
        {/* Service type */}
        <h1 className="text-3xl font-bold mb-4">{serviceData.title}</h1>
        {/* Description of the relevent page */}
        <p className="mb-6">{serviceData.description}</p>
        {/* Content of the each type */}

        {/* Contact Us */}
        <p className="mb-6">Contact Us</p>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
