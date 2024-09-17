"use client";

import React, { useState, useEffect, useRef } from "react";
import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const BlogGallery = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null); // State to handle errors
  const sectionRef = useRef(null);

  // Fetch blogs from HubSpot API
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch("/api/hubspot-blogs"); // Fetch from the API route
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched Blogs in Component:", data); // Log to ensure data is fetched
        setBlogs(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
      }
    };

    loadBlogs();
  }, []);

  // Intersection Observer to trigger animations when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  // Handle cases when fetching fails or data is empty
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="relative">
        <div className="w-full h-96 relative">
          <Image
            src="/images/projects/3.webp"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover transition-opacity duration-700 ease-in-out"
            alt="Background Image"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        <div className="absolute bottom-5 left-5 p-6 text-left">
          <nav className="text-2xl text-white font-bold mb-2 flex items-center space-x-1">
            <Link href="/" className="hover:text-customYellow">
              Home
            </Link>
            <span>&gt;</span>
            <span className="hover:text-customYellow">Our Blog</span>
          </nav>
          <h1 className="text-white text-5xl font-bold leading-tight">
            Latest News & Updates
          </h1>
        </div>
      </div>
      <div className="px-10 py-10 min-h-screen">
        {blogs.length > 0 ? (
          <section
            ref={sectionRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {blogs.map((blog, index) => (
              <Link href={`/${blog.slug}`} key={index}>
                <div
                  key={index}
                  className={`relative flex flex-col justify-between rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 ${getRandomCardSize()}`}
                  style={{ minHeight: "300px" }}
                >
                  <Image
                    src={
                      blog.featuredImage || // Correctly mapping the featured image URL
                      "/images/GDC-OFFICE-EDIT-scaled.jpg"
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-opacity duration-700 hover:opacity-90"
                    alt={blog.featuredImageAltText || "Blog Post"}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-6 transition-opacity duration-500 hover:bg-opacity-40">
                    <h3 className="text-xl font-semibold text-white">
                      {blog.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <p className="text-center text-gray-500">No blogs available.</p>
        )}
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

// Function to randomly assign size and positioning to the card
const getRandomCardSize = () => {
  const sizes = [
    "sm:col-span-2 lg:col-span-2 row-span-2",
    "lg:row-span-2",
    "lg:col-span-2",
    "",
  ];

  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
};

export default BlogGallery;
