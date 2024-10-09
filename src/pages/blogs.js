"use client";

import React, { useState, useEffect, useRef } from "react";
import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import Head from "next/head";

const BlogGallery = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const sectionRef = useRef(null);

  // Fetch blogs from HubSpot API
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch("/api/hubspot-blogs");
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched Blogs in Component:", data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    loadBlogs();
  }, []);

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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

  // Loading spinner
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-full">
      <div className="loader">
        {/* This is a simple loading animation, customize as needed */}
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <style jsx>{`
        .loader {
          display: flex;
          gap: 8px;
          animation: blink 1.5s infinite;
        }

        .dot {
          width: 10px;
          height: 10px;
          background-color: black;
          border-radius: 50%;
          animation: bounce 1s infinite alternate;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }

        @keyframes blink {
          0%,
          20%,
          50%,
          80%,
          100% {
            opacity: 1;
          }
          40% {
            opacity: 0.6;
          }
          60% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );

  return (
    <>
      <Head>
        <title>Our Blog | GDC Consultants - Latest News & Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest news, insights, and updates from GDC Consultants. Explore our blog for expert articles on architecture, engineering, and project management across New Zealand."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://gdcgroup.netlify.app/blogs" />
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/blogs"
          hrefLang="en-nz"
        />
        <link
          rel="alternate"
          href="https://gdcgroup.netlify.app/blogs"
          hrefLang="en"
        />
      </Head>
      <Header />
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div className="w-full h-96 relative" variants={slideInUp}>
          <Image
            src="/images/projects/3.webp"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover transition-opacity duration-700 ease-in-out"
            alt="Background Image"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
          variants={fadeIn}
        ></motion.div>

        <motion.div
          className="absolute bottom-5 left-5 p-6 text-center md:text-left"
          variants={slideInLeft}
        >
          <nav className="text-2xl text-white font-bold mb-2 flex items-center justify-center md:justify-start space-x-1">
            <h1 className="hover:text-customYellow">Our Blog</h1>
          </nav>
          <h1 className="text-white text-5xl font-bold leading-tight">
            Latest News & Updates
          </h1>
        </motion.div>
      </motion.div>
      <div className="px-10 py-10 min-h-screen">
        {loading ? (
          // Display loading spinner only in the blog section
          <LoadingSpinner />
        ) : blogs.length > 0 ? (
          <motion.section
            ref={sectionRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            {blogs.map((blog, index) => {
              const cardSize = getRandomCardSize();

              return (
                <Link href={`/${blog.slug}`} key={index}>
                  <motion.div
                    key={index}
                    className={`relative flex flex-col justify-between rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 ${cardSize}`}
                    style={{ minHeight: "300px" }}
                    variants={fadeIn}
                  >
                    <Image
                      src={
                        blog.featuredImage ||
                        "/images/GDC-OFFICE-EDIT-scaled.webp"
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
                  </motion.div>
                </Link>
              );
            })}
          </motion.section>
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
