// components/GetInTouch.js
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

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

const GetInTouch = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 animate-fade-in-up transition-all duration-700 ease-in-out">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-customYellow font-bold mb-4 animate-fade-in">
          From Concept to Creation
        </h2>
        <p className="text-sm text-customBlue mb-10 animate-fade-in">
          Our focus on quality and attention to detail ensure that every project
          we undertake is a success. Contact us to start building your project
          on a solid foundation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((detail) => (
            <div
              key={detail.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 animate-slide-up"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-customBlue to-blue-500 rounded-full flex items-center justify-center mb-4 animate-scale-up">
                {detail.icon}
              </div>
              <h3 className="text-xl text-customBlue font-semibold mb-2 animate-fade-in">
                {detail.title}
              </h3>
              <p className="text-gray-600 mb-1 animate-fade-in">
                {detail.description}
              </p>
              <p className="text-customBlue font-semibold animate-fade-in">
                {detail.contactInfo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
