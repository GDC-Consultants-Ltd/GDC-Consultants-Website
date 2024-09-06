// components/Footer.js
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-customBlue text-white py-10">
      <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Programs Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-customYellow">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customYellow">
                Who We Are
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customYellow">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customYellow">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Service Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-customYellow">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customYellow">
                Our Locations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customYellow">
                Leave Us a Review
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Portfolio</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-customYellow">
                All Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-customYellow">
                Project Map
              </a>
            </li>            
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Newsletter</h2>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-customYellow text-white px-4 py-2 rounded-r-md hover:bg-yellow">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-2 mb-4">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-customYellow">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="text-white hover:text-customYellow">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-white hover:text-customYellow">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-customYellow">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-customYellow">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-white hover:text-customYellow">
              <FaTwitter size={20} />
            </a>
          </div>          
        </div>
      </div>

      {/* Divider and Logo Section */}
      <div className="border-t border-customYellow mt-8 py-4">
        <div className="container mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <img
              src="images/footer-logo.webp" // Replace with your logo path
              alt="Logo"
              className="h-10 w-auto"
            />
            <p className="text-s text-center md:text-left">
              © 2024 GDC Consultants LTD. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
