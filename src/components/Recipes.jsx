import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Loading from "./Loading";
import Searchbar from "../components/Searchbar";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipes } from "../utils";
import Button from "./Button";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("pasta");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
  };

  const handleSearchRecipe = async (e) => {
    e.preventDefault();
    setLimit(30); // reset limit on new search
    fetchRecipe(); // Call the fetch manually
  };

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const data = await fetchRecipes({ query, limit });
      // console.log("Fetched recipes:", data);
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log("Fetch error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch when limit or query changes
  useEffect(() => {
    fetchRecipe();
  }, [limit]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full pt-28 px-4 min-h-screen bg-black text-white">
      <h1 className="text-white text-2xl font-bold text-center mb-6 w-full">
        Find a Recipe
      </h1>
      <div className="flex justify-center mb-16">
        <form className="w-full max-w-xl mb-10" onSubmit={handleSearchRecipe}>
          <Searchbar
            handleInputChange={handleChange}
            value={query}
            rightIcon={
              <FaSearch className="absolute top-1/2 right-1 -translate-y-20/9 text-gray-400" />
            }
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div
            className="w-full flex flex-wrap justify-center gap-6 md:gap-10 px-4 pt-16 pb-10"
            style={{ marginLeft: "1cm" }}
          >
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>

          <div className="w-full flex items-center justify-center py-10">
            <Button
              className="bg-green-700 text-white px-6 py-2 rounded-full text-base border border-white shadow-lg"
              onClick={showMore}
            >
              Show more
            </Button>
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
