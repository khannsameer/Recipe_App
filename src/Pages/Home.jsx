import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p className="text-white text-3xl md:text-5xl font-bold text-center font-rokkitt">
            Taste the World with <br />
            TastyNest
          </p>
        }
        type="home"
      />
    </main>
  );
};

export default Home;
