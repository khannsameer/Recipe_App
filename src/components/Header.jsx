import React from "react";
import { img1, img2, img3, img4, img5 } from "../Images";

const images = [img1, img2, img3, img4, img5];

const Header = ({ title, image, type }) => {
  const bgImage = image ?? images[Math.floor(Math.random() * images.length)];

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-32">
        {title && (
          <h1 className="text-white text-3xl sm:text-5xl font-bold leading-tight drop-shadow-lg">
            {title}
          </h1>
        )}

        {type && (
          <p className="mt-5 text-sm sm:text-base max-w-md px-5 py-3 bg-black/60 text-green-400 rounded-full shadow-md backdrop-blur-md">
            Welcome to{" "}
            <span className="font-semibold text-orange-400">TastyNest</span>,
            your passport to culinary adventures!
            <br />
            Discover a treasure trove of delectable recipes from around the
            globe.
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
