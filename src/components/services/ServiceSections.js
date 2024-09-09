// components/ServiceSections.js
const ServiceSections = ({ sections }) => {
  const bgColors = [
    "bg-white text-customBlue",
    "bg-customBlue text-white",
    "bg-customYellow text-white",
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-stretch transition-all duration-500 ease-in-out transform hover:scale-105`}
        >
          <div className="md:w-1/2 flex-shrink-0 h-[320px] overflow-hidden">
            <img
              src={section.image}
              alt={section.title}
              className="object-cover w-full h-full transition-opacity duration-700 ease-in-out hover:opacity-90"
            />
          </div>
          <div
            className={`md:w-1/2 p-10 flex items-center justify-center h-auto min-h-[320px] ${
              bgColors[index % bgColors.length]
            } transition-all duration-700 ease-in-out transform hover:scale-105`}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="mb-4">{section.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSections;
