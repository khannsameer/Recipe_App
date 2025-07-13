import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Loading from "./Loading";
import Searchbar from "../components/Searchbar";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full pt-28 px-4 min-h-screen bg-black text-white">
      <h1 className="text-white text-2xl text-center mb-6 font-bold">
        Find a Recipe
      </h1>
      <div className="flex justify-center">
        <form className="w-full max-w-xl rounded-full">
          <Searchbar
            placeholder="Search for recipes..."
            handleInputChange={handleChange}
            value={query}
            rightIcon={<FaSearch className="text-gray-400" />}
          />
        </form>
      </div>
    </div>
  );
};

export default Recipes;
