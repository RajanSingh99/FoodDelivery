import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ItemsCarousel from "../components/ItemsCarousel";
import './MainPage.css';
import RestaurantCarousel from "../components/RestaurantCarousel";
import ItemSlider from "../components/ItemSlider";

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
        <div className="offers-container">
          <ItemSlider/>
        </div>
        <div className="items-container">
          <div className="sub-items">
            <h2>Popular Items</h2>
            <a onClick={handleViewAllClick}>View All</a>
          </div>
          <ItemsCarousel />
          {/* <div className="restaurant-container">
          <div className="sub-restaurant">
            <h2>Restaurants</h2>
            <a onClick={handleViewAllClick2}>View All</a>
          </div>
          <RestaurantCarousel/>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
