import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById, fetchRecipes } from "../utils";
import Loading from "../components/Loading";
import Header from "../components/Header";
import { AiFillPushpin } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import RecipeCard from "../components/RecipeCard";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);
      const data = await fetchRecipeById(id);
      setRecipe(data);

      if (data?.label) {
        const recommend = await fetchRecipes({ query: data.label, limit: 5 });
        setRecipes(recommend);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading || !recipe) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Header title={recipe?.label} image={recipe?.image} />

      <div className="w-full px-4 lg:px-20 pt-5">
        {/* Stats Section */}
        <div className="flex gap-10 items-center justify-center px-4">
          <div className="flex flex-col justify-between">
            <span className="text-white text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2">
              {recipe?.calories.toFixed(2)}
            </span>
            <p className="text-neutral-100 text-[12px] md:text-md">CALORIES</p>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-white text-center border border-gray-500 py-1.5 rounded-full mb-2">
              {recipe?.totalTime || 0}
            </span>
            <p className="text-neutral-100 text-[12px] md:text-md">
              TOTAL TIME
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-white text-center border border-gray-500 py-1.5 rounded-full mb-2">
              {recipe?.yield}
            </span>
            <p className="text-neutral-100 text-[12px] md:text-md">SERVINGS</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full py-20">
          <div className="w-full flex flex-col md:flex-row gap-8 px-4 sm:px-8 lg:px-12 xl:px-20">
            {/* LEFT SIDE */}
            <div className="w-full md:w-2/4 md:border-r border-slate-800 pr-4">
              <div className="flex flex-col gap-5">
                <p className="text-green-500 text-2xl underline">Ingredients</p>
                {recipe?.ingredientLines?.map((ingredient, index) => (
                  <p key={index} className="text-neutral-100 flex gap-2">
                    <AiFillPushpin className="text-green-800 text-xl" />
                    {ingredient}
                  </p>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-20">
                <p className="text-green-700 text-2xl underline">
                  Health Labels
                </p>
                <div className="flex flex-wrap gap-4">
                  {recipe?.healthLabels?.map((item, index) => (
                    <p
                      key={index}
                      className="text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full"
                    >
                      <BsPatchCheck color="green" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0">
              {recipes?.length > 0 && (
                <>
                  <p className="text-white text-2xl">Also Try This</p>
                  <div className="flex flex-wrap gap-6 pt-3">
                    {recipes?.map((item, index) => (
                      <RecipeCard recipe={item} key={index} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
