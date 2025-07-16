import React from "react";
import { Link } from "react-router-dom";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { motion } from "framer-motion";

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

  const tags = [
    ...(cuisineType || []),
    ...(mealType || []),
    ...(dishType || []),
    ...(dietLabels || []),
  ];

  return (
    <Link to={`/recipe/${id}`} className="block">
      <div className="relative rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-black sm:p-2">
        {/* Image with Skeleton */}
        <div className="relative h-48 w-full">
          <ImageWithSkeleton src={image} alt={label} />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 p-4 w-full z-20 text-white">
          <h2
            className="text-lg font-semibold leading-snug truncate"
            title={label}
          >
            {label}
          </h2>
          <p className="text-sm text-gray-300">
            {Math.round(calories)} calories
          </p>

          {/* Animated Tags */}
          <motion.div
            className="mt-2 flex flex-wrap gap-1 text-xs"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {tags.map((tag, idx) => (
              <motion.span
                key={`${tag}-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
