import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Loading from "./Loading";
import Searchbar from "../components/Searchbar";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipes } from "../utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });
      console.log("Fetched recipes:", data); // to check in console
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log("Fetch error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full pt-28 px-4 min-h-screen bg-black text-white">
      <h1 className="text-white text-2xl font-bold text-center mb-6 w-full">
        Find a Recipe
      </h1>
      <div className="flex justify-center">
        <form className="w-full mb-10">
          <Searchbar
            handleInputChange={handleChange}
            value={query}
            rightIcon={<FaSearch className="text-gray-400" />}
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-10">
          <p className="text-white text-center font-semibold">
            No Recipe Found
          </p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
