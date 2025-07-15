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
    <Link to={`/recipe/${id}`} className="w-full sm:w-[260px]">
      <div className="bg-[#111] rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-200">
        <img
          src={image}
          alt={label}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-4">
          <p className="text-white font-semibold text-[15px] mb-2 line-clamp-2">
            {label}
          </p>
          <div className="flex flex-wrap gap-2">
            {cuisineType?.map((type, idx) => (
              <span
                key={`cuisine-${idx}`}
                className="px-2 py-[2px] text-xs capitalize bg-green-900/20 text-green-400 rounded-full"
              >
                {type}
              </span>
            ))}
            {mealType?.map((type, idx) => (
              <span
                key={`meal-${idx}`}
                className="px-2 py-[2px] text-xs capitalize bg-blue-900/20 text-blue-400 rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
