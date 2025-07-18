import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeDetails from "./Pages/RecipeDetails";
import Recipes from "./Pages/Recipes"; // ✅ Create this page
import Favorites from "./Pages/Favorites"; // ✅ Create this page

const Layout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} /> {/* ✅ Added */}
        <Route path="favorites" element={<Favorites />} /> {/* ✅ Added */}
        <Route path="recipe/:id" element={<RecipeDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
