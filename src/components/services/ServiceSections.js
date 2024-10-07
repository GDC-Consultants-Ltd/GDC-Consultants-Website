import Image from "next/image";

const ServiceSections = ({ index, title, description, points, image }) => {
  // Determine if the index is even or odd
  const isEven = index % 2 === 0;

  return (
    <div className="px-4 lg:px-20">
      <div
        className={`relative flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center mb-10 bg-gradient-to-r from-customLightBlue via-wh to-white shadow-l shadow-lg rounded-full overflow-hidden`}
        style={{
          borderRadius: "150px", // Rounded corners for the card
        }}
      >
        <div className="lg:w-1/2 flex justify-center items-center p-6">
          <div
            className="relative w-44 h-44 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-md"
            style={{
              marginLeft: isEven ? "0" : "auto", // Align image based on even or odd index
            }}
          >
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="object-cover"
              style={{
                borderRadius: "150px", // Ensure the image inside matches the rounded shape
              }}
            />
          </div>
        </div>
        <div
          className="px-10 max-h-[250px] overflow-auto scrollbar-hide"
          style={{
            borderRadius: "20px", // Rounded shape inside the card
          }}
        >
          {/* Wrapper div for padding and preventing content from getting cropped */}
          <div className="p-4 lg:p-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            {points && (
              <ul className="list-disc pl-5 mb-4">
                {points.map((point, idx) => (
                  <li key={idx} className="text-gray-700 mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSections;
