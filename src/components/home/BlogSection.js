"use client"; // Ensure this is treated as a client component in Next.js

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import {
  CalendarIcon,
  UserIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import axios from "axios"; // Import Axios for fetching data

const BlogSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/hubspot-blogs");
        const fetchedBlogs = response.data;

        // Sort the blogs by date and slice to get the most recent 3 blogs
        const sortedBlogs = fetchedBlogs
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) // Sort by date
          .slice(0, 3); // Get the 3 most recent blogs

        // Fetch comments for each blog
        const blogsWithComments = await Promise.all(
          sortedBlogs.map(async (blog) => {
            try {
              const commentsResponse = await axios.get(
                `/api/get-comments?formId=${process.env.NEXT_PUBLIC_HUBSPOT_COMMENT_FORM_ID}&slug=${blog.slug}`
              );
              const comments = commentsResponse.data;
              return { ...blog, commentsCount: comments.length };
            } catch (error) {
              console.error(
                `Error fetching comments for blog ${blog.slug}:`,
                error
              );
              return { ...blog, commentsCount: 0 }; // Default to 0 comments if fetch fails
            }
          })
        );

        setBlogs(blogsWithComments);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Define animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <motion.div
      ref={sectionRef}
      className="py-12 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={fadeInUpVariants}
      >
        <motion.div
          className="text-center mb-12 px-6 md:px-10 xl:px-16"
          variants={fadeInUpVariants}
        >
          <h2 className="text-4xl text-customYellow uppercase font-bold mt-2">
            Latest News & Updates
          </h2>
          <h3 className="text-md text-customBlue tracking-wide">
            Stay up-to-date with the latest news and insights from the
            construction industry by checking out our blog.
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={fadeInUpVariants}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition duration-300"
              variants={scaleUpVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src={blog.featuredImage || "/images/default-blog.webp"} // Use a default image if none is provided
                alt={blog.htmlTitle}
                width={600}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="flex items-center mr-4">
                    <CalendarIcon className="w-5 h-5 text-customYellow mr-1" />
                    {new Date(blog.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center mr-4">
                    <UserIcon className="w-5 h-5 text-customYellow mr-1" />
                    {blog.authorName || "Admin"}
                  </span>
                  <span className="flex items-center">
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-customYellow mr-1" />
                    {blog.commentsCount || 0}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-customBlue mb-4 group-hover:text-customYellow transition-colors duration-300">
                  {blog.htmlTitle}
                </h4>

                <a
                  href={blog.slug || "#"}
                  className="inline-block text-sm text-white bg-customBlue py-2 px-4 rounded-full hover:bg-customYellow transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BlogSection;
