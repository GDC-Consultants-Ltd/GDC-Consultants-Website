import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white py-5 overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0 bg-customBlue z-[-3]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-customBlue to-transparent z-[-1]"></div>

      {/* Background Image */}
      <img
        src="/images/footer.png" // Ensure this path matches the image location in the public folder
        alt="Buildings Background"
        className="absolute inset-x-0 bottom-0 w-full object-cover h-[150px] md:h-[180px] lg:h-[350px] z-[-2]"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left mb-16 md:mb-20 lg:mb-24">
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
        <div>
          <h2 className="text-lg font-bold mb-4">Newsletter</h2>
          <form className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow w-full sm:w-auto px-4 py-2 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-customYellow mb-2 sm:mb-0"
            />
            <button
              type="submit"
              className="bg-customYellow text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-customBlue transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="relative z-10 flex justify-center space-x-4 mt-6">
        <a href="#" className="hover:text-customYellow">
          <FaWhatsapp size={20} />
        </a>
        <a href="#" className="hover:text-customYellow">
          <FaYoutube size={20} />
        </a>
        <a href="#" className="hover:text-customYellow">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="hover:text-customYellow">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="hover:text-customYellow">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="hover:text-customYellow">
          <FaTwitter size={20} />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-white mt-8 py-4 text-center">
        <p className="text-xs">
          © {currentYear} GDC Consultants LTD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
