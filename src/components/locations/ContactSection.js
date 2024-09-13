// components/ContactSection.js

import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"; // Import Heroicons

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-12 px-4 md:px-16 lg:px-24"
      style={{ backgroundImage: `url('/images/contact.jpg')` }} // Replace with the correct path to your background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Title Section */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Send us a message</h2>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-customBlue p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-white" />{" "}
                {/* Heroicon for Address */}
              </div>
              <div className="ml-4">
                <p>Address</p>
                <p>89 Church Road, Pukete, Hamilton 3200</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-customBlue p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-white" />{" "}
                {/* Heroicon for Phone */}
              </div>
              <div className="ml-4">
                <p>Phone</p>
                <p>+64 7 838 0090</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-customBlue p-3 rounded-full">
                <EnvelopeIcon className="h-6 w-6 text-white" />{" "}
                {/* Heroicon for Email */}
              </div>
              <div className="ml-4">
                <p>Email</p>
                <p>hamilton@gdcgroup.co.nz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-black p-6 rounded-md shadow-md relative z-10">
          <h3 className="text-xl text-customBlue font-semibold mb-4">
            Send Message
          </h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customBlue text-white py-2 px-4 rounded-md hover:bg-customYellow transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
