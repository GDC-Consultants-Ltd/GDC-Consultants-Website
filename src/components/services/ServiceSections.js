// components/ServiceSections.js
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const ServiceSections = ({ sections }) => {
  const bgColors = [
    "bg-white text-customBlue",
    "bg-customBlue text-white",
    "bg-customYellow text-white",
  ];

  // Define animation variants for motion components
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-hidden space-y-12">
      {" "}
      {/* Added spacing between sections */}
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-stretch transition-all duration-500 ease-in-out`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
          variants={variants}
        >
          {/* Image Section */}
          <motion.div
            className={`relative md:w-1/2 w-full h-[300px] md:h-auto flex-shrink-0 p-2`}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={section.image}
              alt={section.title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-700 ease-in-out hover:opacity-90"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className={`md:w-1/2 w-full flex-grow p-8 sm:p-10 lg:p-12 flex items-center justify-center ${
              bgColors[index % bgColors.length]
            } transition-all duration-700 ease-in-out`}
            variants={variants}
          >
            <div className="w-full text-center md:text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-fade-in-up">
                {section.title}
              </h2>
              {section.description.split("\n").map((line, i) => (
                <p key={i} className="mb-4">
                  {line}
                </p>
              ))}
              {section.points && (
                <ul className="list-disc pl-5 text-left">
                  {section.points.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceSections;
