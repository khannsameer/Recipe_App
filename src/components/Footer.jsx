import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Brand */}
          <div className="text-3xl font-bold">
            Tasty<span className="text-[#fc6e51]">Nest</span>
          </div>

          {/* Center: Social Icons */}
          <div className="flex gap-8">
            <a
              href="#"
              aria-label="Facebook"
              className="text-3xl hover:text-[#fc6e51] transition-all duration-300 hover:scale-110 transform"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-3xl hover:text-[#fc6e51] transition-all duration-300 hover:scale-110 transform"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-3xl hover:text-[#fc6e51] transition-all duration-300 hover:scale-110 transform"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-3xl hover:text-[#fc6e51] transition-all duration-300 hover:scale-110 transform"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-lg text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} TastyNest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
