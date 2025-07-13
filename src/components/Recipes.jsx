import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Loading from "./Loading";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Chicken");
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return <div>Recipes</div>;
};

export default Recipes;
