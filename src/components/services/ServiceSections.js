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
          } items-stretch transition-all duration-500 ease-in-out`}
        >
          {/* Image Section */}
          <div className="md:w-1/2 flex-shrink-0 relative flex">
            <div className="relative w-full h-full">
              <Image
                src={section.image}
                alt={section.title}
                layout="fill" // Adjust this to fill the available space
                objectFit="cover"
                className="transition-opacity duration-700 ease-in-out hover:opacity-90"
              />
            </div>
          </div>

          {/* Text Section */}
          <div
            className={`md:w-1/2 flex-grow p-8 lg:p-10 flex items-center justify-center ${
              bgColors[index % bgColors.length]
            } transition-all duration-700 ease-in-out`}
          >
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
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
