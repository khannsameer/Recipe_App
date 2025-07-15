import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const {
    image,
    calories,
    dietLabels,
    dishType,
    label,
    cuisineType,
    mealType,
    uri,
  } = recipe?.recipe;

  const id = uri?.split("#")[1];

  return (
    <Link to={`/recipe/${id}`} className="w-[90%] sm:w-[260px] mx-auto">
      <div className="relative rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-black">
        {/* Image */}
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={label}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 p-4 w-full z-20 text-white">
          <h2 className="text-lg font-semibold leading-snug truncate">
            {label}
          </h2>
          <p className="text-sm text-gray-300">
            {Math.round(calories)} calories
          </p>

          {/* Tags */}
          <div className="mt-2 flex flex-wrap gap-1 text-xs">
            {[...(cuisineType || []), ...(mealType || [])].map((tag, idx) => (
              <span
                key={idx}
                className="bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {dishType?.map((type, idx) => (
              <span
                key={idx}
                className="bg-purple-500/30 text-white px-2 py-0.5 rounded-full"
              >
                {type}
              </span>
            ))}
            {dietLabels?.map((label, idx) => (
              <span
                key={idx}
                className="bg-green-500/30 text-white px-2 py-0.5 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
