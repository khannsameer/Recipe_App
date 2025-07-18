import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="text-white bg-black mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-13 py-13 border-t border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Branding */}
          <div>
            <p className="font-bold text-3xl mt-8">
              {" "}
              {/* Added mt-8 */}
              Tasty<span className="text-[#fc6e51]">Nest</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold mb-2">QUICK LINKS</p>
            <div className="flex flex-col text-sm gap-0">
              {["Home", "About", "Services", "Chefs", "Contact"].map((link) => (
                <a
                  href="#"
                  key={link}
                  className="hover:text-gray-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold mb-2">LEGAL</p>
            <div className="flex flex-col text-sm gap-0">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Policy",
                "Copyright Info",
              ].map((link) => (
                <a
                  href="#"
                  key={link}
                  className="hover:text-gray-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <p className="font-semibold mb-2">SOCIAL MEDIA</p>
            <div className="flex justify-center sm:justify-start gap-3 mt-2">
              <a
                href="#"
                className="bg-blue-600 p-2 rounded hover:scale-110 transition"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="bg-pink-600 p-2 rounded hover:scale-110 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="bg-green-600 p-2 rounded hover:scale-110 transition"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="#"
                className="bg-red-600 p-2 rounded hover:scale-110 transition"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            <div className="mt-6 flex justify-center sm:justify-start">
              <Button
                title="Sign up"
                btnType="button"
                conteinerStyle="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md px-4 py-1"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-gray-400 text-sm mt-10">
          &copy; {new Date().getFullYear()} TastyNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
