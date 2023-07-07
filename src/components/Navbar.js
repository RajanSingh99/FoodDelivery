import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const key = localStorage.getItem("key");
  const handleLogout = async () => {
    const url = `http://localhost:8088/app/logout?role=${role}&key=${key}`;
    try {
      await axios.post(url);
      localStorage.removeItem("key");
      navigate("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const handleSearch = () => {
    // Add search functionality here
  };

  const handleNavigateToMainPage = () => {
    navigate("/main");
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__title" onClick={handleNavigateToMainPage}>
          Foody Express
        </h1>
      </div>
      <div className="navbar__center">
        <input
          type="text"
          className="navbar__search-input"
          placeholder="Search..."
        />
        <button className="navbar__search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="navbar__right">
        <span className="navbar__role">{role}</span>
        <button className="navbar__logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;