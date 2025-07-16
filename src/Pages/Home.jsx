import React from "react";
import Header from "../components/Header";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Header
        title={
          <p className="text-white text-3xl md:text-5xl font-bold text-center font-rokkitt">
            Taste the World with <br />
            TastyNest
          </p>
        }
        type="home"
      />
      <section
        id="recipes"
        className="md:max-w-[1440px] mx-auto px-4 md:px-20 pb-20"
      >
        <Recipes />
      </section>
    </div>
  );
};

export default Home;
