import axios from "axios";

// ✅ Fetch multiple recipes
export async function fetchRecipes({ query, limit = 100, from = 0 }) {
  const url = "https://api.edamam.com/api/recipes/v2";

  const params = {
    type: "public",
    q: query,
    app_id: import.meta.env.VITE_EDAMAM_API_ID,
    app_key: import.meta.env.VITE_EDAMAM_API_KEY,
    from,
    to: from + limit,
  };

  const headers = {
    "Edamam-Account-User": import.meta.env.VITE_EDAMAM_ACCOUNT_USER_ID,
  };

  try {
    const response = await axios.get(url, { params, headers });
    return response.data?.hits || [];
  } catch (error) {
    console.error("Fetch multiple recipes error:", error.message);
    return [];
  }
}

// ✅ V2 API - Fetch a single recipe by ID

export async function fetchRecipeById(id) {
  const url = `https://api.edamam.com/api/recipes/v2/${id}`;

  const params = {
    type: "public",
    app_id: import.meta.env.VITE_EDAMAM_API_ID,
    app_key: import.meta.env.VITE_EDAMAM_API_KEY,
  };

  const headers = {
    "Edamam-Account-User": import.meta.env.VITE_EDAMAM_ACCOUNT_USER_ID,
  };

  try {
    const response = await axios.get(url, { params, headers });
    return response.data?.recipe || null;
  } catch (error) {
    console.error("Fetch single recipe error:", error.message);
    return null;
  }
}
