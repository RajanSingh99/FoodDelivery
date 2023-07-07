import React from "react";
import LoginCard from "./LoginCard";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="heading">
        Foody <span className="shodder">Express</span>
      </h1>
      <LoginCard />
    </div>
  );
};

export default HomePage;
