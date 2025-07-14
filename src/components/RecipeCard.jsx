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
    <Link to={`/recipe/${id}`} className="w-full">
      <div className="bg_gradient shadow rounded-lg">
        <img src={image} alt={label} />
      </div>
    </Link>
  );
};

export default RecipeCard;
