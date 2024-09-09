// components/ServiceDescription.js
const ServiceDescription = ({ description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg text-center text-customGray m-4 mx-auto max-w-7xl -mt-10 relative z-10">
      {/* Adjusted mt-10 instead of -mt-20 */}
      <p className="text-lg text-gray-600">{description.description}</p>
    </div>
  );
};

export default ServiceDescription;
