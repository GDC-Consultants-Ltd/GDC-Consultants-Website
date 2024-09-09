// Dynamic service data with alternating content sections
const services = {
  "3-waters": {
    title: "3 Waters & Contamination",
    description:
      "Climate change is impacting New Zealand’s aging three water infrastructure, requiring urgent renewal and rebuilding to meet performance standards. GDC Consultants provide sustainable and innovative engineering solutions, including contaminated land analysis, stormwater modeling, wastewater performance analysis, and water supply services​",
    image: "/images/services/structural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/structural.webp",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/structural.webp",
      },
      {
        id: 3,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/structural.webp",
      },
    ],
  },
  "architectural-designs": {
    title: "Architectural Designs",
    description:
      "GDC Consultants excel in delivering high-end, sustainable architecture solutions tailored to complex design requirements. Their services include concept design, construction documentation, project management, and site feasibility studies​",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  "electrical-engineering": {
    title: "Electrical Engineering",
    description:
      "GDC Consultants are leaders in providing innovative electrical engineering solutions, including switchboard design, hardware control systems, industrial lighting, and comprehensive electrical assessments and failure investigations. They focus on optimizing processes and ensuring the safety of infrastructure",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  "project-management": {
    title: "Project & Construction Management",
    description:
      "GDC manages projects from inception to completion, offering services in planning, design, quality control, contractor management, and government approvals. Their construction management services ensure projects are delivered within time and budget constraints​",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  "geotechnical-engineering": {
    title: "Geotechnical Engineering",
    description:
      "GDC Consultants specialize in geotechnical engineering, providing services like site investigation, foundation design, earthwork support, and structural adequacy reviews. They integrate these services into multidisciplinary projects to ensure optimal outcomes​",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  infrastructure: {
    title: "Infrastructure & Subdivision Engineerin",
    description:
      "This service focuses on designing and managing infrastructure projects such as roadways, utility lines, and subdivisions. GDC's expertise includes feasibility studies, environmental impact analysis, and erosion control",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  "research-development": {
    title: "Research & Development",
    description:
      "GDC supports R&D initiatives that drive innovation in engineering and construction, particularly in areas like sustainable building practices and advanced modeling techniques",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  "road-transport": {
    title: "Road Transport",
    description:
      "GDC Consultants provide comprehensive road engineering and design services, including road safety consultancy, pavement design, and smart motorways. They cater to government, local authorities, and private developers​",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  "seismic-engineering": {
    title: "Seismic Engineering",
    description:
      "GDC Consultants deliver state-of-the-art seismic engineering solutions that exceed regulatory requirements. Their services include seismic calculations, equipment anchorage design, and seismic risk assessments to ensure structural resilience​",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  "structural-engineering": {
    title: "Structural Engineering",
    description:
      "GDC offers comprehensive structural engineering services, focusing on safety, ease of installation, and cost-effective designs. They handle everything from civil structures to complex architectural plans, ensuring functional and aesthetic outcomes​",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  planning: {
    title: "Planning",
    description:
      "Planning services include project feasibility, master planning, and urban development strategies tailored to meet both regulatory and client needs",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  surveying: {
    title: "Surveying",
    description:
      "GDC provides professional surveying services, including land assessments, boundary surveys, and topographical mapping, crucial for project planning and execution​",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
  training: {
    title: "Training",
    description:
      "GDC offers specialized training programs to enhance skills and knowledge in areas critical to the industry’s future, ensuring that staff remain at the forefront of engineering and construction advancements​",
    image: "/images/services/architectural.webp",
    sections: [
      {
        id: 1,
        title: "Innovative Water Solutions",
        description:
          "Our approach to 3 Waters projects involves innovative strategies and sustainable solutions.",
        image: "/images/services/3-waters1.jpg",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/3-waters2.jpg",
      },
    ],
  },
};

export default services;
