// components/ContactSection.js

"use client"; // Ensure this is treated as a client component

import React, { useState } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"; // Import Heroicons
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion

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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative bg-cover bg-center text-white py-12 px-4 md:px-16 lg:px-24 overflow-hidden" // Added overflow-hidden to contain animations
      style={{ backgroundImage: `url('/images/contact.webp')` }} // Replace with the correct path to your background image
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Title Section */}
      <motion.div
        className="relative z-10 text-center mb-8"
        variants={slideInLeft}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Send us a message</h2>
      </motion.div>

      <motion.div
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden" // Ensure grid container doesn't overflow
        variants={fadeIn}
      >
        {/* Contact Information */}
        <motion.div
          className="space-y-6 overflow-visible"
          variants={slideInLeft}
        >
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-customBlue p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p>Address</p>
                <p>89 Church Road, Pukete, Hamilton 3200</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-customBlue p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p>Phone</p>
                <p>+64 7 838 0090</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-customBlue p-3 rounded-full">
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p>Email</p>
                <p>hamilton@gdcgroup.co.nz</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white text-black p-6 rounded-md shadow-md relative z-10 overflow-visible" // Ensure form doesn't overflow
          variants={slideInRight}
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
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
