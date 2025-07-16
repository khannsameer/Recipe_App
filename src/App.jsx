import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeDetails from "./Pages/RecipeDetails";

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
        <Route path="recipe/:id" element={<RecipeDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
