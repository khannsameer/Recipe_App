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
    <div className="w-full min-h-screen bg-black text-white py-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center max-w-2xl mx-auto mb-12 px-4"
        >
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

        {recipes.length > 0 ? (
          <>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Recipe Grid aligned to the right */}
              <div className="flex justify-center md:justify-end">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {recipes.map((r, i) => (
                    <RecipeCard key={i} recipe={r} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-10">
              <Button
                title="Previous"
                isDisabled={page === 0}
                handleClick={handlePrev}
                containerStyle="bg-gray-700 text-white px-3 py-1 rounded-full text-sm disabled:opacity-40"
              />
              <Button
                title="Next"
                handleClick={handleNext}
                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
              />
            </div>
          </>
        ) : (
          <p className="text-center py-10">No Recipe Found</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
