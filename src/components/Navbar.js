import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import './Navbar.css';

const Navbar = ({itemCount=localStorage.getItem('itemCount')}) => {
  const key = localStorage.getItem("key");
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [cartItemCount, setCartItemCount] = useState(itemCount);

  useEffect(() => {
    fetchCartItemCount();
  }, [itemCount]);

  const fetchCartItemCount = async () => {
    setCartItemCount(itemCount);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`http://localhost:8088/app/logout?role=${role}&key=${key}`);
      localStorage.removeItem('key');
      localStorage.removeItem('itemCount');  
      navigate('/');
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  const handleSearch = () => {
    // Add search functionality here
  };

  const handleNavigateToMainPage = () => {
    navigate('/main');
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__title" onClick={handleNavigateToMainPage}>
          Foody Express
        </h1>
        <Link to='/All-Items' className='navbar-item-link'>Menu</Link>
        <Link to='/restaurants' className='navbar-restaurant-link'>Restaurants</Link>
      </div>
      <div className="navbar__center">
        <input
          type="text"
          className="navbar__search-input"
          placeholder="Search..."
        />
        <button className="navbar__search-button" onClick={handleSearch}>
          <AiOutlineSearch className='search-icon'/>
        </button>
      </div>
      <div className="navbar__right">
      <Link to='/contact-us' className='navbar-contact-us-link'>Contact Us</Link>
      {role==='admin' && (<Link to='/Admin-services' className='navbar-admin-services-link'>Admin Services</Link>)}
      <Link to="/cart" className="navbar__cart-link">
          <FaShoppingCart className="navbar__cart-icon" />
          {cartItemCount > 0 && (
            <span className="navbar__cart-count">{cartItemCount}</span>
          )}
        </Link>
        <span className="navbar__role">{role}</span>
        <button className="navbar__logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;