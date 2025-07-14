// const queryStrings = {
//   app_id: import.meta.env.VITE_EDAMAM_API_ID,
//   app_key: import.meta.env.VITE_EDAMAM_API_KEY,
// };

// // https://api.edamam.com/api/recipes/v2?type=public&q=chicken
// export const fetchData = async (defaultQuery) => {
//   const { app_id, app_key } = queryStrings; // ✅ FIXED

//   try {
//     const data = await fetch(
//       `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Edamam-Account-User": "sameerskworld@gmail.com", // ✅ required for user-based apps
//         },
//       }
//     );

//     const response = await data.json();
//     return response;
//   } catch (e) {
//     console.error("API fetch error:", e);
//     return e;
//   }
// };

// export const fetchTabData = async (defaultQuery) => {
//   const { app_id, app_key } = queryStrings;
//   try {
//     const data = await fetch(
//       `https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`
//     );
//     const response = await data.json();
//     return response;
//   } catch (e) {
//     console.log(e, "something went wrong");
//     return e;
//   }
// };
