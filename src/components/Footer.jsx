import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="text-white bg_gradient">
      {/* Outer container with padding */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-20 border-t border-slate-800">
        {/* Inner content in row layout */}
        <div className="flex flex-col gap-10 md:flex-row justify-between">
          {/* Branding */}
          <div className="min-w-[160px]">
            <p className="font-bold text-2xl">
              Tasty<span className="text-[#fc6e51] text-xl">Nest</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-[160px]">
            <p className="font-semibold mb-2">QUICK LINKS</p>
            <div className="flex flex-col text-sm">
              {["Home", "About", "Services", "Chefs", "Contact"].map((link) => (
                <a
                  href="#"
                  key={link}
                  className="block py-2 hover:text-gray-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="min-w-[160px]">
            <p className="font-semibold mb-2">LEGAL</p>
            <div className="flex flex-col text-sm">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Policy",
                "Copyright Info",
              ].map((link) => (
                <a
                  href="#"
                  key={link}
                  className="block py-2 hover:text-gray-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & Sign Up */}
          <div className="min-w-[160px]">
            <p className="font-semibold mb-2">SOCIAL MEDIA</p>
            <div className="flex mt-4 gap-3">
              <a
                href="#"
                className="bg-blue-600 p-1.5 rounded-sm text-white hover:scale-110 transition-transform"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="bg-pink-600 p-1.5 rounded-sm text-white hover:scale-110 transition-transform"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="bg-green-600 p-1.5 rounded-sm text-white hover:scale-110 transition-transform"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="#"
                className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110 transition-transform"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            <Button
              title="Sign up"
              btnType="button"
              conteinerStyle="mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-center pt-16">
          <span className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} TastyNest. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
