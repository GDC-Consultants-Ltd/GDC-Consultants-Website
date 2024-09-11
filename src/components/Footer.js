import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaVimeo,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/GDC-OFFICE-EDIT-scaled.jpg')" }} // Ensure the path to the image is correct
    >
      {/* Dark Overlay for the Entire Footer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Subscription Section */}
      <div className="relative z-10 flex flex-col items-center pt-10">
        <h4 className="text-white text-xl text-bold mb-4 tracking-wide">
          Subscribe to our Newsletter
        </h4>
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-l-lg outline-none w-80 text-black"
          />
          <button className="bg-customBlue text-white p-3 rounded-r-lg tracking-wide">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="relative z-10 mx-auto bg-customBlue bg-opacity-80 p-10 backdrop-blur-sm shadow-lg mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
          {/* Logo and Company Info Column */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/footer-logo.webp"
              alt="GDC Logo"
              width={160} // Set desired width
              height={40} // Set desired height
              className="h-10 mb-4 object-contain" // Utility class for object fit
              style={{ objectFit: "contain" }} // Inline style for object fit
            />
          </div>

          {/* COMPANY Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">
              GET IN TOUCH
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  Our Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  Leave Us a Review
                </a>
              </li>
            </ul>
          </div>

          {/* PORTFOLIO Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">
              PORTFOLIO
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-customYellow tracking-wide">
                  Project Map
                </a>
              </li>
            </ul>
          </div>

          {/* FOLLOW Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">FOLLOW</h4>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="hover:text-customYellow tracking-wide">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-customYellow tracking-wide">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-customYellow tracking-wide">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section with Transparent Background */}
      <div className="relative z-10 bg-[#0E1B24] bg-opacity-80 text-gray-400 text-xs py-4 mx-auto backdrop-blur-sm">
        <div className="flex justify-between px-10">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white tracking-wide">
              TERMS & CONDITIONS
            </a>
            <a href="#" className="hover:text-white tracking-wide">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-white tracking-wide">
              SITEMAP
            </a>
          </div>
          <span className="tracking-wide">
            © {currentYear} GDC Consultants LTD. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
