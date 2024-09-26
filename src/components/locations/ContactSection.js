"use client";

import React, { useState } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import Image from "next/image";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, email, message } = formData;

    try {
      // Replace with your HubSpot Form and Portal IDs
      const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
      const hubspotFormId = process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID;

      // HubSpot Form Submission API endpoint
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`;

      // HubSpot form submission payload
      const payload = {
        fields: [
          { name: "firstname", value: firstname },
          { name: "lastname", value: lastname },
          { name: "email", value: email },
          { name: "message", value: message },
        ],
      };

      // Submit the form data to HubSpot
      await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSubmitted(true);
      setFormData({ firstname: "", lastname: "", email: "", message: "" });
    } catch (error) {
      setError("There was an error submitting the form. Please try again.");
      console.error("Error submitting to HubSpot:", error);
    }
  };

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative flex flex-col md:flex-row bg-white text-black py-12 px-4 md:px-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Left Content Column */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        variants={fadeIn}
      >
        <div className="text-left max-w-sm">
          <h1 className="text-lg font-bold mb-4 text-customBlue">
            Head Office
          </h1>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-customBlue p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 text-customBlue">
                <p className="font-semibold">Address</p>
                <p>89 Church Road, Pukete, Hamilton 3200</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-customBlue p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 text-customBlue">
                <p className="font-semibold">Phone</p>
                <p>+64 7 838 0090</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-customBlue p-3 rounded-full">
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 text-customBlue">
                <p className="font-semibold">Email</p>
                <p>hamilton@gdcgroup.co.nz</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="flex-1 relative overflow-hidden" variants={fadeIn}>
        <Image
          src="/images/contact-map.png" // Replace with the correct path to your map image
          alt="Map"
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Similar to 'object-cover' in CSS
          className="rounded-md shadow-md" // Keeping the styling consistent
        />
      </motion.div>

      {/* Right Form Column */}
      <motion.div
        className="flex-1 p-6 bg-white shadow-md rounded-md"
        variants={fadeIn}
      >
        <h3 className="text-xl text-customBlue font-semibold mb-4">
          Send Message
        </h3>
        {submitted ? (
          <p className="text-green-600">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={formData.lastname}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full bg-customBlue text-white py-2 px-4 rounded-md hover:bg-customYellow transition"
            >
              Send
            </button>
          </form>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
