// components/TestimonialsSection.js
"use client"; // This directive ensures the component is treated as a client component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Added Autoplay module
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    author: "Jeff Freshman",
    role: "Guest",
    image: "images/testimonials/1.jpg", // Correct path to avatar image
  },
  {
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    author: "Jeff Freshman",
    role: "Guest",
    image: "images/testimonials/1.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      {/* Left Side - Title and Content */}
      <div className="bg-customYellow text-white px-8 py-8 md:px-16 flex flex-col justify-center">
        <h2 className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-2 md:mb-4">
          Read Testimonials
        </h2>
        <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-tight">
          It's always a joy to hear that the work we do has positively reviews
        </p>
      </div>

      {/* Right Side - Testimonial Carousel */}
      <div className="bg-customBlue text-white p-6 md:p-8 flex items-center justify-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full max-w-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="p-4 md:p-6 bg-transparent text-center flex flex-col gap-4"
            >
              <div className="flex flex-col items-center text-center">
                <p className="mb-4 text-white text-base md:text-lg leading-relaxed">
                  {testimonial.message}
                </p>
                <div className="mt-2 md:mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto"
                  />
                  <h4 className="font-semibold text-white text-base md:text-lg mt-2">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs md:text-sm text-customYellow uppercase tracking-widest mb-6">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
