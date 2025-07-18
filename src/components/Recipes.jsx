import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Loading from "./Loading";
import Searchbar from "./Searchbar";
import RecipeCard from "./RecipeCard";
import Button from "./Button";
import { fetchRecipes } from "../utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("pasta");
  const [limit] = useState(100);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const handleChange = (e) => setQuery(e.target.value);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const data = await fetchRecipes({ query, limit, from: page * limit });
      setRecipes(data || []);
    } catch (err) {
      console.error("Error fetching recipes:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(0);
    fetchRecipe();
  };

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => page > 0 && setPage((prev) => prev - 1);

  useEffect(() => {
    fetchRecipe();
  }, [page]);

  if (loading) return <Loading />;

  return (
    <div className="w-full min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Search */}
        <div className="w-full flex justify-center mb-10">
          <form className="w-full max-w-xl" onSubmit={handleSearch}>
            <Searchbar
              placeholder="e.g. Pasta, Vegan, Chicken"
              handleInputChange={handleChange}
              value={query}
              rightIcon={
                <FaSearch
                  className="text-gray-400 cursor-pointer"
                  onClick={handleSearch}
                />
              }
            />
          </form>
        </div>

        {/* Recipe Grid */}
        {recipes?.length > 0 ? (
          <>
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl">
                {recipes.map((recipe, index) => (
                  <RecipeCard key={index} recipe={recipe} />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex w-full items-center justify-center gap-4 py-10">
              <Button
                title="Previous"
                isDisabled={page === 0}
                handleClick={handlePrev}
                containerStyle="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
              />
              <Button
                title="Next"
                handleClick={handleNext}
                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
              />
            </div>
          </>
        ) : (
          <div className="w-full flex items-center justify-center py-10">
            <p className="text-center text-white">No Recipe Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
