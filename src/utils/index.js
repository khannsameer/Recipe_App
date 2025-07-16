import axios from "axios";

export async function fetchRecipes({ query, limit = 20, from = 0 }) {
  const url = "https://api.edamam.com/api/recipes/v2";

  const params = {
    type: "public",
    q: query,
    app_id: import.meta.env.VITE_EDAMAM_API_ID,
    app_key: import.meta.env.VITE_EDAMAM_API_KEY,
    from,
    to: from + limit,
  };

  // if (mealType) params.mealType = mealType;
  // if (cuisineType) params.cuisineType = cuisineType;

  const headers = {
    "Edamam-Account-User": import.meta.env.VITE_EDAMAM_ACCOUNT_USER_ID,
  };

  try {
    const response = await axios.get(url, { params, headers });
    return response.data?.hits || [];
  } catch (error) {
    console.error("Axios error:", error.message);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Details:", error.response.data);
    }
    return [];
  }
}
