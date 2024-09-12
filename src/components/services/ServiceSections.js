// components/ServiceSections.js
import Image from "next/image";

const ServiceSections = ({ sections }) => {
  const bgColors = [
    "bg-white text-customBlue",
    "bg-customBlue text-white",
    "bg-customYellow text-white",
  ];

  return (
    <div className="overflow-hidden">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-stretch transition-all duration-500 ease-in-out animate-slide-up`}
        >
          {/* Image Section */}
          <div
            className={`relative md:w-1/2 w-full h-[300px] md:h-auto flex-shrink-0 animate-zoom-in transition-opacity duration-700 ease-in-out`}
          >
            <Image
              src={section.image}
              alt={section.title}
              layout="fill" // Ensures the image covers the entire container
              objectFit="cover" // Maintains the aspect ratio of the image
              className="transition-opacity duration-700 ease-in-out hover:opacity-90"
            />
          </div>

          {/* Text Section */}
          <div
            className={`md:w-1/2 w-full flex-grow p-6 sm:p-8 lg:p-10 flex items-center justify-center ${
              bgColors[index % bgColors.length]
            } transition-all duration-700 ease-in-out ${
              index % 2 === 0 ? "animate-slide-right" : "animate-slide-left"
            }`}
          >
            <div className="w-full text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-fade-in-up">
                {section.title}
              </h2>
              {/* Multi-paragraph Rendering */}
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSections;
