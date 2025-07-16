import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="text-white py-20 bg_gradient">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        {/* Branding */}
        <div className="flex">
          <p className="font-bold text-center text-2xl">
            Tasty<span className="text-[#fc6e51] text-xl">Nest</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold mb-2">QUICK LINKS</p>
          <div className="flex flex-col text-start text-sm">
            <a href="#" className="block py-2 hover:text-gray-500">
              Home
            </a>
            <a href="#" className="block py-2 hover:text-gray-500">
              About
            </a>
            <a href="#" className="block py-2 hover:text-gray-500">
              Services
            </a>
            <a href="#" className="block py-2 hover:text-gray-500">
              Chefs
            </a>
            <a href="#" className="block py-2 hover:text-gray-500">
              Contact
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="font-semibold mb-2">LEGAL</p>
          <div className="flex flex-col text-start text-sm">
            <a href="#" className="block py-2 hover:text-gray-500">
              Terms & Conditions
            </a>
            <a href="#" className="block py-2 hover:text-gray-500">
              Privacy Policy
            </a>
            <a href="#" className="block py-2 hover:text-gray-500">
              Cookie Policy
            </a>
            <a href="#" className="block py-2 hover:text-gray-500">
              Copyright Info
            </a>
          </div>
        </div>

        {/* Social + CTA */}
        <div className="flex flex-col">
          <p className="font-semibold mb-2">SOCIAL MEDIA</p>
          <div className="flex mt-4 gap-3">
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-green-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="#"
              className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
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
      <div className="flex items-center justify-center py-10">
        <span className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} TastyNest. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
