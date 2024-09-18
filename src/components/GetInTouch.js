"use client"; // Ensure this is treated as a client component

import { motion } from "framer-motion"; // Import Framer Motion
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

// Data array for dynamic rendering
const contactDetails = [
  {
    id: 1,
    title: "CONTACT US",
    description: "Our friendly team is here to help.",
    contactInfo: "hamilton@gdcgroup.co.nz",
    icon: <EnvelopeIcon className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "OFFICE",
    description: "Come say hello at our office HQ.",
    contactInfo: "89 Church Road, Pukete, Hamilton 3200",
    icon: <MapPinIcon className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "PHONE",
    description: "Mon-Fri from 8am to 5pm",
    contactInfo: "+64 7 838 0090",
    icon: <PhoneIcon className="w-10 h-10 text-white" />,
  },
];

// Define animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const GetInTouch = () => {
  return (
    <motion.div
      className="bg-gray-50 py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl text-customYellow font-bold mb-4"
          variants={fadeInUpVariants}
        >
          From Concept to Creation
        </motion.h2>
        <motion.p
          className="text-sm text-customBlue mb-10"
          variants={fadeInUpVariants}
        >
          Our focus on quality and attention to detail ensure that every project
          we undertake is a success. Contact us to start building your project
          on a solid foundation.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={fadeInUpVariants}
        >
          {contactDetails.map((detail) => (
            <motion.div
              key={detail.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105"
              initial="hidden"
              whileInView="visible"
              variants={scaleUpVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-customBlue to-blue-500 rounded-full flex items-center justify-center mb-4"
                variants={scaleUpVariants}
              >
                {detail.icon}
              </motion.div>
              <motion.h3
                className="text-xl text-customBlue font-semibold mb-2"
                variants={fadeInUpVariants}
              >
                {detail.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-1"
                variants={fadeInUpVariants}
              >
                {detail.description}
              </motion.p>
              <motion.p
                className="text-customBlue font-semibold"
                variants={fadeInUpVariants}
              >
                {detail.contactInfo}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
