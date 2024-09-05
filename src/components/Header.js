// src/components/Header.js
import React from "react";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Header Section with Logo, Contact, and Location Info */}
      <div className="bg-white py-3">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-10">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </div>

          {/* Contact and Location Info */}
          <div className="flex items-center space-x-10">
            {/* Contact Information */}
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-5 h-5 text-customYellow" />
              <div>
                <p className="text-customBlue font-medium text-sm">
                  Free Call +1 234 456 78910
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
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="max-w-screen-xl mx-auto bg-customBlue">
        <nav className="flex justify-between items-center py-3 px-10">
          {/* Menu Items */}
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="text-white text-sm font-semibold hover:text-customYellow"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-white text-sm font-semibold hover:text-customYellow"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="text-white text-sm font-semibold hover:text-customYellow"
              >
                OUR PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="text-white text-sm font-semibold hover:text-customYellow"
              >
                OUR TEAM
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-white text-sm font-semibold hover:text-customYellow"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-white text-sm font-semibold hover:text-customYellow"
              >
                BLOG
              </a>
            </li>
          </ul>
          <button className="bg-customYellow text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-yellow-600">
            OUR LOCATIONS
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
