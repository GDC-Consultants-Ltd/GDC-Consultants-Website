// src/components/Header.js
"use client"; // Add this line to make it a Client Component

// src/components/Header.js
import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Header Section with Logo, Contact, and Location Info */}
      <div className="bg-white py-3">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-5 md:px-10">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <img src="/images/logo.png" alt="Logo" className="h-10 md:h-12" />
          </div>

          {/* Contact and Location Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
            {/* Contact Information */}
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5 text-customYellow" />
              <div>
                <p className="text-customBlue font-medium text-sm">
                  +64 7 838 0090
                </p>
                <p className="text-gray-500 text-xs">
                  Call Us Now 24/7 Customer Support
                </p>
              </div>
            </div>

            {/* Location Information */}
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-5 h-5 text-customYellow" />
              <div>
                <p className="text-customBlue font-medium text-sm">
                  Our Location
                </p>
                <p className="text-gray-500 text-xs">
                  89 Church Road, Pukete, Hamilton 3200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="max-w-screen-xl mx-auto bg-customBlue">
        <nav className="flex justify-between items-center py-3 px-5 md:px-10">
          {/* Hamburger Menu Icon */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-white" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-customBlue md:static md:flex md:space-x-6 md:w-auto md:block transition-all`}
          >
            <li className="md:inline-block">
              <a
                href="/"
                className="block md:inline-block text-white text-sm font-semibold hover:text-customYellow py-2 px-4"
              >
                HOME
              </a>
            </li>
            <li className="md:inline-block">
              <a
                href="/services"
                className="block md:inline-block text-white text-sm font-semibold hover:text-customYellow py-2 px-4"
              >
                SERVICES
              </a>
            </li>
            <li className="md:inline-block">
              <a
                href="/portfolio"
                className="block md:inline-block text-white text-sm font-semibold hover:text-customYellow py-2 px-4"
              >
                OUR PORTFOLIO
              </a>
            </li>
            <li className="md:inline-block">
              <a
                href="/team"
                className="block md:inline-block text-white text-sm font-semibold hover:text-customYellow py-2 px-4"
              >
                OUR TEAM
              </a>
            </li>
            <li className="md:inline-block">
              <a
                href="/about-us"
                className="block md:inline-block text-white text-sm font-semibold hover:text-customYellow py-2 px-4"
              >
                ABOUT US
              </a>
            </li>
            <li className="md:inline-block">
              <a
                href="/blog"
                className="block md:inline-block text-white text-sm font-semibold hover:text-customYellow py-2 px-4"
              >
                BLOG
              </a>
            </li>
            <li className="md:inline-block">
              <a
                href="/locations"
                className="block text-white text-sm font-semibold hover:text-customYellow py-2 px-4"
              >
                OUR LOCATIONS
              </a>
            </li>
          </ul>

          {/* Locations Button */}
          <a
            href="/locations"
            className="hidden md:block bg-customYellow text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            OUR LOCATIONS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
