// components/MapSection.js

import React from "react";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"; // Import Heroicons if needed
import officeLocations from "../../data/officeLocations"; // Adjust the path as needed
import Image from "next/image";

const MapSection = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {officeLocations.map((office) => (
          <div
            key={office.id}
            className="bg-white shadow-lg rounded-md overflow-hidden"
          >
            <iframe
              src={office.mapSrc}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-t-md"
            ></iframe>
            <div className="p-6">
              <Image
                src={office.qrCodeSrc}
                alt={`${office.name} QR Code`}
                className="mb-4 w-30 h-30 mx-auto"
                width={120} // Tailwind w-30 corresponds approximately to 120px
                height={120} // Tailwind h-30 corresponds approximately to 120px
              />
              <h3 className="text-lg font-semibold text-center">
                {office.name}
              </h3>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPinIcon className="h-5 w-5 text-customBlue" />
                <div className="ml-2">
                  <p className="font-medium">Our Address</p>
                  <p>{office.address}</p>
                </div>
              </div>
              <div className="flex items-center mt-2 text-gray-600">
                <EnvelopeIcon className="h-5 w-5 text-customBlue" />
                <div className="ml-2">
                  <p className="font-medium">Email Address</p>
                  <p>{office.email}</p>
                </div>
              </div>
              <div className="flex items-center mt-2 text-gray-600">
                <PhoneIcon className="h-5 w-5 text-customBlue" />
                <div className="ml-2">
                  <p className="font-medium">Call us on</p>
                  <p>{office.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapSection;
