import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeDetails from "./Pages/RecipeDetails";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="bg-black">
      <Routes>
        {/* Parent Layout Route */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes inside Layout */}
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
