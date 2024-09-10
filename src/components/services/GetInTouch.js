// components/GetInTouch.js
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
    contactInfo: "hi@ourcompany.com",
    icon: <EnvelopeIcon className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "OFFICE",
    description: "Come say hello at our office HQ.",
    contactInfo: "121 Rock Street, 21 Avenue, New York, NY 92103-9000",
    icon: <MapPinIcon className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "PHONE",
    description: "Mon-Fri from 8am to 5pm",
    contactInfo: "+1 (555) 000-0000",
    icon: <PhoneIcon className="w-10 h-10 text-white" />,
  },
];

const GetInTouch = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-customYellow font-bold mb-4">From Concept to Creation</h2>
        <p className="text-sm text-customBlue mb-10">
          Our focus on quality and attention to detail ensure that every project
          we undertake is a success. Contact us to start building your project
          on a solid foundation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((detail) => (
            <div
              key={detail.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-customYellow to-yellow-500 rounded-full flex items-center justify-center mb-4">
                {detail.icon}
              </div>
              <h3 className="text-xl text-customBlue font-semibold mb-2">{detail.title}</h3>
              <p className="text-gray-600 mb-1">{detail.description}</p>
              <p className="text-customYellow font-semibold">
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
