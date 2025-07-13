import React from "react";
import { img1, img2, img3, img4, img5 } from "../Images";

const images = [img1, img2, img3, img4, img5];

const Header = ({ title, image, type }) => {
  const bgImage = image ?? images[Math.floor(Math.random() * images.length)];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Recipe"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        {title && <h1>{title}</h1>}

        {type && (
          <div className="w-full flex justify-center px-4">
            <p className="text-sm sm:text-base text-[#A6B37D] bg-[#212121] px-6 sm:px-10 py-4 rounded-full max-w-screen-sm text-center leading-relaxed break-words whitespace-normal">
              Welcome to{" "}
              <span className="font-bold text-[#EEBB4D]">TastyNest</span>, your
              passport to culinary adventures! Discover a treasure trove of
              delectable recipes from around the globe.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
