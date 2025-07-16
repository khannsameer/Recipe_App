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
  const [limit] = useState(20); // fixed number of results per page
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0); // pagination index

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
    setPage(0); // reset to first page
    fetchRecipe();
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  useEffect(() => {
    fetchRecipe();
  }, [page]);

  if (loading) return <Loading />;

  return (
    <div className="w-full pt-28 px-4 text-white">
      <h1 className="text-white text-2xl font-bold text-center mt-15 mb-6 w-full">
        Find a Recipe
      </h1>

      <div className="flex justify-center mb-10">
        <form className="w-full max-w-xl" onSubmit={handleSearch}>
          <Searchbar
            placeholder="e.g. Pasta, Vegan, Chicken"
            handleInputChange={handleChange}
            value={query}
            rightIcon={
              <FaSearch
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={handleSearch}
              />
            }
          />
        </form>
      </div>

      {recipes?.length > 0 ? (
        <>
          <div className="w-full px-4 sm:px-6 md:px-10 pt-6 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recipes.map((item, index) => (
                <RecipeCard recipe={item} key={index} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-6 py-6">
            <Button
              title="Previous"
              isDisabled={page === 0}
              handleClick={handlePrev}
              className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm"
            />
            <Button
              title="Next"
              handleClick={handleNext}
              className="bg-green-700 text-white px-6 py-2 rounded-full text-sm"
            />
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
