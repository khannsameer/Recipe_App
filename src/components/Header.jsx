import React from "react";
import { img1, img2, img3, img4, img5 } from "../Images";

const images = [img1, img2, img3, img4, img5];

const Header = ({ title, image }) => {
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
        <h1 className="text-white text-5xl font-bold text-center">
          {title || "Fallback Text"}
        </h1>
      </div>
    </div>
  );
};

export default Header;
