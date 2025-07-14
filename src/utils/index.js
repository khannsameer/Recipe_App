import axios from "axios";

export async function fetchRecipes(filter) {
  const { query, limit = 20 } = filter;

  const url = "https://api.edamam.com/api/recipes/v2";

  // Simulate random paging (max index ~ 80 since max=100)
  const maxOffset = 100 - limit;
  const from = Math.floor(Math.random() * maxOffset);
  const to = from + limit;

  const params = {
    type: "public",
    q: query,
    app_id: import.meta.env.VITE_EDAMAM_API_ID,
    app_key: import.meta.env.VITE_EDAMAM_API_KEY,
    from: 0,
    to: limit,
  };

  const headers = {
    "Edamam-Account-User": import.meta.env.VITE_EDAMAM_ACCOUNT_USER_ID,
  };

  console.log("Requesting:", { from, to, query });

  try {
    const response = await axios.get(url, { params, headers });
    return response.data?.hits || []; //return only the recipes array
  } catch (error) {
    console.error("Axios error:", error.message);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Details:", error.response.data);
    }
    return null;
  }
}
