"use client";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react";
import axios from "axios";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Replace with your HubSpot Portal ID and Form ID
      const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
      const hubspotFormId =
        process.env.NEXT_PUBLIC_HUBSPOT_SUBSCRIBTION_FORM_ID;

      // HubSpot Form Submission API endpoint
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`;

      // HubSpot form submission payload
      const payload = {
        fields: [
          {
            name: "email",
            value: email,
          },
        ],
      };

      // Submit the form data to HubSpot
      await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear the email input after successful submission
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
      setMessage("There was an error subscribing. Please try again.");
    }
  };

  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/GDC-OFFICE-EDIT-scaled.webp')" }}
    >
      {/* Dark Overlay for the Entire Footer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Subscription Section */}
      <div className="relative z-10 flex flex-col items-center pt-10">
        <h4 className="text-white text-xl font-bold mb-4 tracking-wide text-center">
          Subscribe to our Newsletter
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none outline-none w-80 text-black mb-2 sm:mb-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-customBlue text-white p-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none tracking-wide"
            onClick={handleSubscribe}
          >
            SUBSCRIBE
          </button>
        </div>
        {message && <p className="text-white mt-2">{message}</p>}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto bg-customBlue bg-opacity-80 p-10 backdrop-blur-sm shadow-lg mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          {/* Logo and Company Info Column */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/GDC logo 2024 white.png"
              alt="GDC Logo"
              width={200} // Increased width for better visibility
              height={60} // Increased height to make the logo clearer
              className="h-auto mb-4 object-contain" // Adjusted height to auto for better scaling
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* COMPANY Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-customYellow tracking-wide"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/who-we-are"
                  className="hover:text-customYellow tracking-wide"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-customYellow tracking-wide"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/careers"
                  className="hover:text-customYellow tracking-wide"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">
              GET IN TOUCH
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/locations"
                  className="hover:text-customYellow tracking-wide"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-customYellow tracking-wide"
                >
                  Our Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/review"
                  className="hover:text-customYellow tracking-wide"
                >
                  Leave Us a Review
                </Link>
              </li>
            </ul>
          </div>

          {/* PORTFOLIO Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">
              PORTFOLIO
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/portfolio/all-projects"
                  className="hover:text-customYellow tracking-wide"
                >
                  All Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/view-on-map"
                  className="hover:text-customYellow tracking-wide"
                >
                  Project Map
                </Link>
              </li>
            </ul>
          </div>

          {/* FOLLOW Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">FOLLOW</h4>
            <div className="flex justify-center md:justify-start space-x-4 text-lg">
              <a
                href="https://www.facebook.com/GdcConsultantsLtd?mibextid=ZbWKwL"
                className="hover:text-customYellow tracking-wide"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/gdcconsultants/"
                className="hover:text-customYellow tracking-wide"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/gdc_consultants?igsh=NTc4MTIwNjQ2YQ=="
                className="hover:text-customYellow tracking-wide"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section with Transparent Background */}
      <div className="relative z-10 bg-customBlue bg-opacity-80 text-gray-400 text-xs py-4 mx-auto backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between px-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <a href="#" className="hover:text-white tracking-wide">
              TERMS & CONDITIONS
            </a>
            <a href="#" className="hover:text-white tracking-wide">
              PRIVACY POLICY
            </a>
          </div>
          <span className="tracking-wide mt-2 sm:mt-0">
            © {currentYear} GDC Consultants LTD. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
