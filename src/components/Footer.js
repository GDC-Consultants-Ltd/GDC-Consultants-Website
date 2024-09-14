import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // Add this line

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/GDC-OFFICE-EDIT-scaled.jpg')" }}
    >
      {/* Dark Overlay for the Entire Footer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Subscription Section */}
      <div className="relative z-10 flex flex-col items-center pt-10">
        <h4 className="text-white text-xl font-bold mb-4 tracking-wide text-center">
          Subscribe to our Newsletter
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none outline-none w-80 text-black mb-2 sm:mb-0"
          />
          <button className="bg-customBlue text-white p-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none tracking-wide">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto bg-customBlue bg-opacity-80 p-10 backdrop-blur-sm shadow-lg mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          {/* Logo and Company Info Column */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/footer-logo.webp"
              alt="GDC Logo"
              width={160}
              height={40}
              className="h-10 mb-4 object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* COMPANY Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about-us/who-we-are"
                  className="hover:text-customYellow tracking-wide"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-customYellow tracking-wide"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/careers"
                  className="hover:text-customYellow tracking-wide"
                >
                  Careers
                </Link>
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
                <Link
                  href="/locations"
                  className="hover:text-customYellow tracking-wide"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-customYellow tracking-wide"
                >
                  Our Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/review"
                  className="hover:text-customYellow tracking-wide"
                >
                  Leave Us a Review
                </Link>
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
                <Link
                  href="/portfolio/all-projects"
                  className="hover:text-customYellow tracking-wide"
                >
                  All Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/view-on-map"
                  className="hover:text-customYellow tracking-wide"
                >
                  Project Map
                </Link>
              </li>
            </ul>
          </div>

          {/* FOLLOW Section */}
          <div>
            <h4 className="font-semibold mb-4 text-md tracking-wide">FOLLOW</h4>
            <div className="flex justify-center md:justify-start space-x-4 text-lg">
              <a
                href="https://www.facebook.com/profile.php?id=61565604038123"
                className="hover:text-customYellow tracking-wide"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/104447018"
                className="hover:text-customYellow tracking-wide"
              >
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
        <div className="flex flex-col sm:flex-row items-center justify-between px-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
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
          <span className="tracking-wide mt-2 sm:mt-0">
            © {currentYear} GDC Consultants LTD. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
