import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="text-white bg-black mt-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left justify-items-center sm:justify-items-start">
          {/* Branding */}
          <div>
            <p className="font-bold text-3xl">
              Tasty<span className="text-[#fc6e51]">Nest</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold mb-3">QUICK LINKS</p>
            <div className="flex flex-col text-sm space-y-1">
              {["Home", "About", "Services", "Chefs", "Contact"].map((link) => (
                <a
                  href="#"
                  key={link}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold mb-3">LEGAL</p>
            <div className="flex flex-col text-sm space-y-1">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Policy",
                "Copyright Info",
              ].map((link) => (
                <a
                  href="#"
                  key={link}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <p className="font-semibold mb-3">SOCIAL MEDIA</p>
            <div className="flex justify-center sm:justify-start gap-3 mt-3">
              <a className="bg-blue-600 p-2 rounded hover:scale-110 transition">
                <FaFacebook size={18} />
              </a>
              <a className="bg-pink-600 p-2 rounded hover:scale-110 transition">
                <FaInstagram size={18} />
              </a>
              <a className="bg-green-600 p-2 rounded hover:scale-110 transition">
                <FaWhatsapp size={18} />
              </a>
              <a className="bg-red-600 p-2 rounded hover:scale-110 transition">
                <FaYoutube size={18} />
              </a>
            </div>

            <div className="mt-6">
              <Button
                title="Sign up"
                btnType="button"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md px-5 py-1.5"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} TastyNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
