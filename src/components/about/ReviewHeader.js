// components/about/ReviewHeader.js

import React from 'react';
import Image from 'next/image';

const ReviewHeader = () => {
  return (
    <section className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src="/images/about/review.png" // Replace with the actual path to your image
          alt="Feedback Illustration"
          width={800} // Adjust width according to your design needs
          height={250}
        />
      </div>

      {/* Text Section */}
      <div className="text-left">
        <h2 className="text-lg uppercase font-semibold text-gray-500">
          Leave us a Review
        </h2>
        <h1 className="text-4xl text-customBlue font-bold mt-2 mb-4">
          Share Your Experience With Us
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Please provide your feedback for any job you have previously completed
          with us, and kindly include the job number for easy reference.
        </p>
      </div>
    </section>
  );
};

export default ReviewHeader;
