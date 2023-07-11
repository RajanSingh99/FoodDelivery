import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './AdminServices.css';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminServices = () => {
    const [customerId, setCustomerId] = useState(0);
    const navigate = useNavigate();
  const handleAddItem = async () => {
    navigate('/add-item')
  };

  const handleDeleteItem = async () => {
    navigate('/delete-item');
  };

  const handleAddRestaurant = async () => {
    toast.error('error occured: try again later')
  };

  const handleDeleteRestaurant = async () => {
    toast.error('error occured: try again later')
  };

  const handleDeleteCustomer = async () => {
    navigate("/delete-customer");
  };

  return (
    <>
    <Navbar/>
    <div className='admin-container'>

        <h1>Admin Panel</h1>
        <div className='admin-main-container'>
            <div className='admin-items'>
                <h3>items</h3>
                <button onClick={handleAddItem} className='green-button'>Add Item</button>
                <button onClick={handleDeleteItem}className='red-button'>Delete Item</button>
            </div>
            <div className='admin-restaurants'>
                <h3>Restaurants</h3>
                <button onClick={handleAddRestaurant}className='green-button'>Add Restaurant</button>
                <button onClick={handleDeleteRestaurant} className='red-button'>Delete Restaurant</button>
            </div>
            <div className='admin-customer'>
                <h3>Customer</h3>
                <button onClick={handleDeleteCustomer} className='red-button'>Delete Customer</button>
            </div>
        </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default AdminServices;