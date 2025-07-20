import { useState } from "react";
import { useLocation } from "react-router-dom";
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
      <nav className="w-full max-w-[1440px] mx-auto flex items-center justify-between py-[18px] px-4 md:px-12 lg:px-20">
        {/* Logo + Brand */}
        <a
          href="/"
          className="flex items-center gap-3 px-3 py-1 pr-4 rounded-lg"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
          />
          <span className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl tracking-wide leading-tight">
            Tasty<span className="text-green-500 text-xl">Nest</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex text-white gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.path}
                className="text-white hover:text-green-500 transition duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:h-[2px] after:bg-green-500 after:w-0 
                  group-hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="block md:hidden text-white text-3xl p-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <AiOutlineClose className="text-white text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-white text-3xl" />
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      {open && (
        <div
          className="absolute top-[5px] right-8 w-[120px] rounded-xl z-40 flex flex-col gap-5 px-6 py-6
    bg-black/90 backdrop-blur-md shadow-xl text-white transition-all duration-500 ease-in-out"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}
              className="text-white text-base relative group pl-2"
            >
              <span className="group-hover:text-[#fc6e51] transition-colors duration-300">
                {link.name}
              </span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fc6e51]
          group-hover:w-full transition-all duration-300"
              ></span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
