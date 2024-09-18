// components/ServiceDescription.js
const ServiceDescription = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg text-customGray m-4 mx-auto max-w-7xl -mt-10 relative z-10 animate-fade-in-up">
      {/* Render the title */}
      <h1 className="text-customBlue text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-4">
        {title}
      </h1>
      {/* Render description as a single paragraph */}
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceDescription;
