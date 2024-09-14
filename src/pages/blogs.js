import React, { useEffect, useRef } from "react";
import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const blogs = [
  {
    title: "Wake Up and Smell the Coffee",
    backgroundImage: "/images/projects/1.webp",
    link: "/blogs/coffee",
  },
  {
    title: "The Brand New NASA Office",
    backgroundImage: "/images/projects/2.webp",
    link: "/blogs/nasa-office",
  },
  {
    title: "Experience the Saharan Sands",
    backgroundImage: "/images/projects/3.webp",
    link: "/blogs/saharan-sands",
  },
  {
    title: "9 Air-Cleaning Plants Your Home Needs",
    backgroundImage: "/images/projects/4.webp",
    link: "/blogs/air-cleaning-plants",
  },
  {
    title: "One Month Sugar Detox",
    backgroundImage: "/images/projects/5.webp",
    link: "/blogs/sugar-detox",
  },
  {
    title: "Shooting Minimal Instagram Photos",
    backgroundImage: "/images/projects/6.webp",
    link: "/blogs/instagram-photos",
  },
];

const BlogGallery = () => {
  const sectionRef = useRef(null);

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

    const items = sectionRef.current.querySelectorAll(".animate-on-scroll");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

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
        <section
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 animate-on-scroll transform transition-transform duration-500 hover:scale-105 ${getRandomCardSize()}`}
              style={{ minHeight: "300px" }}
            >
              <Image
                src={blog.backgroundImage}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-opacity duration-700 hover:opacity-90"
                alt={blog.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-6 transition-opacity duration-500 hover:bg-opacity-40">
                <h3 className="text-xl font-semibold text-white">
                  <Link href={blog.link} className="hover:text-customYellow">
                    {blog.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </section>
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
