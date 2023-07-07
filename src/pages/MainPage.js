import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ItemsCarousel from "../components/ItemsCarousel";
import './MainPage.css';
import RestaurantCarousel from "../components/RestaurantCarousel";

const MainPage = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/All-Items");
  };
  const handleViewAllClick2 = () => {
    navigate("/All-Items");
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="items-container">
          <div className="sub-items">
            <h2>Items</h2>
            <a onClick={handleViewAllClick}>View All</a>
          </div>
          <ItemsCarousel />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
