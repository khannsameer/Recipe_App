import React from "react";
import { img1, img2, img3, img4, img5 } from "../Images";

const images = [img1, img2, img3, img4, img5];

const Header = ({ title, image, type }) => {
  const bgImage = image ?? images[Math.floor(Math.random() * images.length)];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={bgImage}
        alt="Recipe"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Text content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <h1>{title}</h1>
        {type && (
          <p className="text-sm mt-4 text-center text-white bg-[#1a1a1a90] px-8 sm:px-12 py-4 rounded-full">
            Welcome to{" "}
            <span className="text-yellow-400 font-bold">TastyNest</span>, your
            passport to culinary adventures!
            <br className="hidden md:block" />
            Discover a treasure trove of delectable recipes from around the
            globe.
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
