import React from "react";
import { img1, img2, img3, img4, img5 } from "../Images";

const images = [img1, img2, img3, img4, img5];

const Header = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Recipes"
        />
      </div>
    </div>
  );
};

export default Header;
