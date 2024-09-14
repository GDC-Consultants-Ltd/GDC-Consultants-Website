// pages/about-us/view-on-map.js

import React from "react";
import Header from "@/components/Header";
import "../../app/globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ViewOnMap = () => {
  return (
    <>
      <Header />
      <section className="px-6 py-6 bg-white text-center animate-fade-in">
        <h2 className="text-lg uppercase font-semibold text-gray-500">
          View on Map
        </h2>
        <h1 className="text-4xl text-customBlue font-bold mt-2 mb-4">
          GDC Consultants LTD
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Find all our past projects on the map
        </p>
      </section>

      {/* Map Section */}
      <section className="relative overflow-hidden bg-gray-100 px-4 md:px-16 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1VOKLAGKYjMDlITg67m82W1qwAhIpZt4&ehbc=2E312F"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ViewOnMap;
