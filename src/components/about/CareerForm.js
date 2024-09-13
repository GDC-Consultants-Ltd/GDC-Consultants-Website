// components/CareerForm.js

import { useState } from "react";
import Image from "next/image";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    fieldsOfInterest: [],
    resume: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "fieldsOfInterest") {
      setFormData((prevState) => ({
        ...prevState,
        fieldsOfInterest: checked
          ? [...prevState.fieldsOfInterest, value]
          : prevState.fieldsOfInterest.filter((field) => field !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 m-6 bg-white shadow-md rounded-md">
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          className="mb-4 w-60"
          width={240} // Adjusted width based on the w-60 class (tailwind w-60 is 240px)
          height={96} // Adjusted height to maintain aspect ratio, adjust as needed
        />
        <h1 className="text-2xl text-customBlue font-semibold">Apply Now</h1>
      </div>      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@address.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="071 234 5678"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="addressLine2"
            placeholder="Address Line 2"
            value={formData.addressLine2}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="state"
              placeholder="State / Province / Region"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">--- Select country ---</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Field of Interest
          </label>
          <div className="flex flex-col">
            {[
              "Civil",
              "Structural",
              "Architectural",
              "Geotechnical",
              "Planning",
              "Admin",
            ].map((field) => (
              <label key={field} className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="fieldsOfInterest"
                  value={field}
                  onChange={handleChange}
                  checked={formData.fieldsOfInterest.includes(field)}
                  className="mr-2"
                />
                {field}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Cover Letter & Resume
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer">
            <input
              type="file"
              name="resume"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <p className="text-gray-500">
              Click or drag files to this area to upload. You can upload up to 2
              files.
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            Do you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              contact policy
            </a>
            ?
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-customBlue text-white py-2 px-4 rounded-md hover:bg-customYellow transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
