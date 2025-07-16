import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame } from "lucide-react"; // Calories icon
import ImageWithSkeleton from "./ImageWithSkeleton";

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
    <Link to={`/recipe/${id}`} className="w-full md:w-[240px]">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="flex flex-col bg-black/70 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
      >
        {/* Image Section */}
        <div className="relative h-[160px] w-full shrink-0">
          <ImageWithSkeleton
            src={image}
            alt={label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
        </div>

        {/* Content Section */}
        <div className="relative z-20 bg-black/80 px-4 pt-4 pb-3 flex flex-col justify-between flex-grow">
          {/* Title */}
          <h3
            className="text-white font-semibold text-sm line-clamp-2 mb-1"
            title={label}
          >
            {label}
          </h3>

          {/* Calories */}
          <p className="text-xs text-gray-300 flex items-center gap-1 mb-2">
            <Flame className="w-3.5 h-3.5 text-red-400" />
            {Math.round(calories)} calories
          </p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mt-auto"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {tags.slice(0, 3).map((tag, idx) => (
              <motion.span
                key={`${tag}-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-green-900/30 text-green-300 text-[11px] px-2 py-[2px] rounded-full capitalize"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default RecipeCard;
