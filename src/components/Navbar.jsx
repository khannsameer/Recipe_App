import React, { useState } from "react";
import Logo from "../Images/Logo.jpeg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed z-50 bg-black/90 text-white">
      <nav className="flex items-center justify-between px-4 md:px-20 py-3">
        {/* Logo + Brand Name */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block w-8 h-8 lg:h-14 lg:w-14 object-contain rounded-full"
          />
          <span className="text-xl font-semibold">
            Tasty<span className="text-[#fc6e51]">Nest</span>
          </span>
        </a>
        <ul className="hidden md:flex text-white gap-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/recipes">Explore</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
        </ul>
        <Button
          title="Sign in"
          containerStyle="hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]"
        />

        <button className="block md:hidden text-white text-xl">
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
