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
  const [isMobileView, setIsMobileView] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Detect if the current view is mobile or desktop
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 1024); // Set breakpoint for mobile vs desktop
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  // useCallback to memoize handlers and prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Desktop hover functions
  const handleDesktopDropdownMouseEnter = useCallback((dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  }, []);

  const handleDesktopDropdownMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Delay for smooth closing
  }, []);

  // Mobile toggle function
  const handleMobileDropdownToggle = useCallback((dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
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
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Navigation Bar */}
      <div className="max-w-screen-full mx-auto px-5 sm:px-8 md:px-10"> 
        <nav className="flex justify-between items-center py-3 px-4 lg:px-6">
          {/* Hamburger Menu Icon */}
          <div className="flex lg:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-black" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-black" />
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
                height={40}
                priority
                className="h-auto w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:space-x-4 lg:items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent transition-all duration-300 ease-in-out`}
            ref={dropdownRef}
            style={{ maxHeight: "none", overflowY: "visible" }}
          >
            {[
              { href: "/", label: "HOME" },
              {
                label: "SERVICES",
                dropdown: "services",
                items: [
                  { href: "/services/3-waters", label: "3 Waters & Contamination" },
                  { href: "/services/architectural-designs", label: "Architectural Designs" },
                  { href: "/services/electrical-engineering", label: "Electrical Engineering" },
                  { href: "/services/project-management", label: "Project & Construction Management" },
                  { href: "/services/geotechnical-engineering", label: "Geotechnical Engineering" },
                  { href: "/services/infrastructure", label: "Infrastructure & Subdivision Engineering" },
                  { href: "/services/research-development", label: "Research & Development" },
                  { href: "/services/road-transport", label: "Road Transport" },
                  { href: "/services/seismic-engineering", label: "Seismic Engineering" },
                  { href: "/services/structural-engineering", label: "Structural Engineering" },
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
              { href: "/blogs", label: "BLOGS" },
            ].map((item) =>
              item.items ? (
                <li
                  key={item.label}
                  className="lg:inline-block relative"
                  onMouseEnter={
                    !isMobileView
                      ? () => handleDesktopDropdownMouseEnter(item.dropdown)
                      : undefined
                  }
                  onMouseLeave={
                    !isMobileView ? handleDesktopDropdownMouseLeave : undefined
                  }
                >
                  <button
                    className={`flex items-center text-xs sm:text-sm font-semibold py-1 px-2 lg:py-2 lg:px-3 cursor-pointer ${
                      currentPath.startsWith(item.href) || currentPath === item.href
                        ? "text-customYellow"
                        : "text-customBlue"
                    }`}
                    onClick={() =>
                      isMobileView
                        ? handleMobileDropdownToggle(item.dropdown)
                        : null
                    }
                  >
                    {item.label}
                    <ChevronDownIcon className="w-3 h-3 ml-1" />
                  </button>
                  {/* Dropdown Items */}
                  <ul
                    className={`${
                      activeDropdown === item.dropdown ? "block" : "hidden"
                    } lg:block lg:absolute left-0 mt-2 w-full lg:w-48 bg-white opacity-85 shadow-md rounded-md`}
                    style={{
                      display: activeDropdown === item.dropdown ? 'block' : 'none',
                      maxHeight: isMobileView ? '16rem' : 'none',
                      overflowY: isMobileView ? 'auto' : 'visible',
                    }}
                  >
                    {item.items.map((subItem) => (
                      <li key={subItem.href}>
                        <a
                          href={subItem.href}
                          className="block px-3 py-2 text-xs text-customBlue hover:bg-customYellow hover:text-white"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                </li>
              ) : (
                <li key={item.href} className="lg:inline-block">
                  <a
                    href={item.href}
                    className={`block lg:inline-block text-xs sm:text-sm font-semibold py-1 px-2 lg:py-2 lg:px-3 ${
                      currentPath === item.href ? "text-customYellow" : "text-customBlue"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}            
          {/* Mobile version of the "OUR LOCATIONS" button */}
          <li className="block lg:hidden">
              <Link
                href="/locations"
                className="block text-customBlue text-xs sm:text-sm font-semibold px-2 py-1 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                OUR LOCATIONS
              </Link>
            </li>
          </ul>

          {/* Desktop version of the "OUR LOCATIONS" button */}
          <Link
            href="/locations"
            className="hidden lg:block bg-customYellow text-white text-xs sm:text-sm font-semibold px-3 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-yellow-600"
            onClick={() => setIsMenuOpen(false)}
          >
            OUR LOCATIONS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
