import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsHeaderCard } from 'react-ui-cards';
import Navbar from '../components/Navbar';
import { Button, Nav } from 'react-bootstrap';
import Select from 'react-dropdown-select';
import './AllItems.css';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const role = localStorage.getItem('role');
  const key= localStorage.getItem('key');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const key = localStorage.getItem('key');
        const response = await axios.get(`http://localhost:8088/items/all?key=${key}`);
        setItems(response.data);
      } catch (error) {
        console.log('Error fetching items:', error);
      }
    };

    fetchData();
  }, []);

  const options = [
    { value: 'all', label: 'All' },
    { value: 'Veg', label: 'Veg' },
    { value: 'Non-Veg', label: 'Non-Veg' },
    { value: 'Beverages', label: 'Beverages' },
    { value: 'Dessert', label: 'Dessert' },
  ];

  const handleCategoryFilter = (selectedOption) => {
    console.log('Selected category:', selectedOption);
    setSelectedCategory(selectedOption[0].value);
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:8088/items/delete/${itemId}?key=${key}`);
      console.log('Delete response:', response.data);
      setItems((prevItems) => prevItems.filter((item) => item.itemId !== itemId));
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  const filteredItems = selectedCategory === 'all' ? items : items.filter((item) => item.category.categoryName === selectedCategory);

  return (
    <div className='main-container'>
      <Navbar />
      <div className='dropdown-container'>
        <Select options={options} onChange={handleCategoryFilter} placeholder='Category' />
      </div>
      <div className='container'>
        <div className='all-items-container'>
          {filteredItems.map((item) => (
            <div key={item.itemId} className='item-card'>
              <NewsHeaderCard
                href={`http://localhost:8088/Items/${item.itemId}`}
                thumbnail={require(`../../resources/${item.itemId > 45 ? 29 : item.itemId}.jpg`)}
                title={item.itemName}
                author={`₹${item.cost}`}
                date={item.category.categoryName}
              />
              {role === 'admin' && (
                <button className='delete-button' onClick={() => handleDelete(item.itemId)}>
                  Delete
                </button>
              )}
              <button className='add-to-cart-button'>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllItems;