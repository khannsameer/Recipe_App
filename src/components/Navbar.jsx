import { useState } from "react";
import { useLocation } from "react-router-dom"; // For active route detection
import Logo from "../Images/Logo.jpeg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/recipes" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-black/30 backdrop-blur-md shadow-md">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-4 md:px-16">
        {/* Logo + Brand */}
        <a
          href="/"
          className="flex items-center gap-3 px-3 py-1 rounded-lg ml-3"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
          />
          <span className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl tracking-wide leading-tight">
            Tasty<span className="text-[#fc6e51]">Nest</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-white gap-10 mr-10">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.path}
                className="text-white transition duration-300 hover:text-[#fc6e51] 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:h-[2px] after:bg-[#fc6e51] after:w-0 
                 group-hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white text-4xl p-2 rounded-md hover:bg-white/10 transition"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <AiOutlineClose className="text-white text-4xl" />
          ) : (
            <HiMenuAlt3 className="text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Nav with Slide Animation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 text-white flex flex-col gap-6 pt-20 px-6 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            onClick={() => setOpen(false)}
            className={`text-lg hover:text-[#fc6e51] transition ${
              location.pathname === link.path ? "text-[#fc6e51]" : ""
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
