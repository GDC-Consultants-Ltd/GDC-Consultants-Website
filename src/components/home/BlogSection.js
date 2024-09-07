"use client"; // Ensure this is treated as a client component in Next.js

import React from "react";
import {
  CalendarIcon,
  UserIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline"; // Importing icons

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Best for any industrial & business solution",
    date: "Sept. 06, 2020",
    author: "Admin",
    comments: 3,
    image: "images/services/architectural.webp",
  },
  {
    id: 2,
    title: "Best for any industrial & business solution",
    date: "Sept. 06, 2020",
    author: "Admin",
    comments: 3,
    image: "images/services/architectural.webp",
  },
  {
    id: 3,
    title: "Best for any industrial & business solution",
    date: "Sept. 06, 2020",
    author: "Admin",
    comments: 3,
    image: "images/services/architectural.webp",
  },
];

const BlogSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-12 px-6 md:px-10 xl:px-16">
          <h2 className="text-4xl text-customYellow uppercase font-bold mt-2">
            Latest News & Updates
          </h2>
          <h3 className="text-md text-customBlue tracking-wide">
            Stay up-to-date with the latest news and insights from the
            construction industry by checking out our blog.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="flex items-center mr-4">
                    <CalendarIcon className="w-5 h-5 text-customYellow mr-1" />
                    {blog.date}
                  </span>
                  <span className="flex items-center mr-4">
                    <UserIcon className="w-5 h-5 text-customYellow mr-1" />
                    {blog.author}
                  </span>
                  <span className="flex items-center">
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-customYellow mr-1" />
                    {blog.comments}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-customBlue mb-4 group-hover:text-customYellow transition-colors duration-300">
                  {blog.title}
                </h4>

                <a
                  href="#"
                  className="inline-block text-sm text-white bg-customBlue py-2 px-4 rounded-full hover:bg-customYellow transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
