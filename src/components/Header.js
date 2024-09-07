"use client"; // Add this line to make it a Client Component

import React, { useState, useEffect, useRef } from "react";
import {
  PhoneIcon,
  MapPinIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    // This ensures that `window.location.pathname` is only accessed on the client side
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }

    // Add click event listener to detect outside clicks
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsPortfolioOpen(false);
        setIsAboutUsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === "services") setIsServicesOpen(!isServicesOpen);
    if (dropdown === "portfolio") setIsPortfolioOpen(!isPortfolioOpen);
    if (dropdown === "aboutus") setIsAboutUsOpen(!isAboutUsOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Header Section with Logo, Contact, and Location Info */}
      <div className="bg-white py-3">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-5 md:px-10">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <img src="/images/logo.webp" alt="Logo" className="h-10 md:h-12" />
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
            ref={dropdownRef}
          >
            {[
              { href: "/", label: "HOME" },
              {
                label: "SERVICES",
                dropdown: "services",
                items: [
                  {
                    href: "/services/3-waters",
                    label: "3 Waters & Contamination",
                  },
                  {
                    href: "/services/architectural-designs",
                    label: "Architectural Designs",
                  },
                  {
                    href: "/services/electrical-engineering",
                    label: "Electrical Engineering",
                  },
                  {
                    href: "/services/project-management",
                    label: "Project & Construction Management",
                  },
                  {
                    href: "/services/geotechnical-engineering",
                    label: "Geotechnical Engineering",
                  },
                  {
                    href: "/services/infrastructure",
                    label: "Infrastructure & Subdivision Engineering",
                  },
                  {
                    href: "/services/research-development",
                    label: "Research & Development",
                  },
                  { href: "/services/road-transport", label: "Road Transport" },
                  {
                    href: "/services/seismic-engineering",
                    label: "Seismic Engineering",
                  },
                  {
                    href: "/services/structural-engineering",
                    label: "Structural Engineering",
                  },
                  { href: "/services/planning", label: "Planning" },
                  { href: "/services/surveying", label: "Surveying" },
                  { href: "/services/training", label: "Training" },
                ],
              },
              {
                label: "OUR PORTFOLIO",
                dropdown: "portfolio",
                items: [
                  { href: "/portfolio/all-projects", label: "All Projects" },
                  { href: "/portfolio/view-on-map", label: "View on Map" },
                ],
              },
              {
                label: "ABOUT US",
                dropdown: "aboutus",
                items: [
                  { href: "/about-us/who-we-are", label: "Who We Are" },
                  { href: "/about-us/careers", label: "Careers" },
                  { href: "/about-us/review", label: "Leave us a Review" },
                ],
              },
              { href: "/team", label: "OUR TEAM" },
              { href: "/blog", label: "BLOG" },
              { href: "/locations", label: "OUR LOCATIONS" },
            ].map((item) =>
              item.items ? (
                <li key={item.label} className="md:inline-block relative">
                  <button
                    className={`flex items-center text-white text-sm font-semibold py-2 px-4 cursor-pointer ${
                      currentPath === "/services" ||
                      currentPath === "/portfolio" ||
                      currentPath === "/about-us"
                        ? "bg-customYellow"
                        : "hover:text-customYellow"
                    }`}
                    onClick={() => toggleDropdown(item.dropdown)}
                  >
                    {item.label}
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  {((item.dropdown === "services" && isServicesOpen) ||
                    (item.dropdown === "portfolio" && isPortfolioOpen) ||
                    (item.dropdown === "aboutus" && isAboutUsOpen)) && (
                    <ul className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md overflow-y-auto max-h-60 scrollable-dropdown">
                      {item.items.map((subItem) => (
                        <li key={subItem.href}>
                          <a
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-customBlue hover:text-white"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href} className="md:inline-block">
                  <a
                    href={item.href}
                    className={`block md:inline-block text-white text-sm font-semibold py-2 px-4 ${
                      currentPath === item.href
                        ? "bg-customYellow"
                        : "hover:text-customYellow"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
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
