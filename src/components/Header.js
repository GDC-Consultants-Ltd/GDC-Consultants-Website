"use client"; // Add this line to make it a Client Component

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image"; // Importing Image from next/image for optimization
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // useCallback to memoize handlers and prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleDropdownMouseEnter = useCallback((dropdown) => {
    // Cancel the hiding timeout if hovering back
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    // Set a slight delay before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Adjust the delay (200ms) to make it feel more natural
  }, []);

  useEffect(() => {
    // Set the current path for highlighting menu items based on the current route
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }

    // Handle clicks outside the dropdown to close it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Navigation Bar */}
      <div className="max-w-screen-full mx-auto bg-transparent">
        <nav className="flex justify-between items-center py-3 px-5 md:px-10">
          {/* Hamburger Menu Icon */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-customBlue text-black" /> // Changed text color to black for better visibility
              ) : (
                <Bars3Icon className="w-6 h-6 text-customBlue text-black" /> // Changed text color to black for better visibility
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.webp"
                alt="GDC Consultants Ltd Logo"
                width={100}
                height={50}
                priority
                className="h-auto w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full md:static md:flex md:space-x-6 md:w-auto md:block transition-all bg-white`}
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
              { href: "/contact-us", label: "CONTACT US" },
            ].map((item) =>
              item.items ? (
                <li
                  key={item.label}
                  className="md:inline-block relative"
                  onMouseEnter={() => handleDropdownMouseEnter(item.dropdown)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    className={`flex items-center text-sm font-semibold py-2 px-4 cursor-pointer ${
                      currentPath.startsWith(item.href) ||
                      currentPath === item.href
                        ? "text-customYellow"
                        : "text-customBlue"
                    }`}
                  >
                    {item.label}
                    <ChevronDownIcon className="w-4 h-4 ml-1" />
                  </button>
                  {/* Services Dropdown */}
                  <ul
                    className={`absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md overflow-y-auto max-h-60 custom-scrollbar ${
                      activeDropdown === item.dropdown ? "block" : "hidden"
                    }`}
                  >
                    {item.items.map((subItem) => (
                      <li key={subItem.href}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-customYellow hover:text-white"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href} className="md:inline-block">
                  <a
                    href={item.href}
                    className={`block md:inline-block text-sm font-semibold py-2 px-4 ${
                      currentPath === item.href
                        ? "text-customYellow"
                        : "text-customBlue"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
          >
            OUR LOCATIONS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
