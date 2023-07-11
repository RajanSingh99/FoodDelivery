import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsHeaderCard } from 'react-ui-cards';
import Navbar from '../components/Navbar';
import { Button, Nav } from 'react-bootstrap';
import Select from 'react-dropdown-select';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
import './AllItems.css';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const role = localStorage.getItem('role');
  const key= localStorage.getItem('key');
  const [itemCount,setCartItemCount]=useState(localStorage.getItem('itemCount'));
  const [itemsId,setItemsId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const key = localStorage.getItem('key');
        const response = await axios.get(`http://localhost:8088/items/all?key=${key}`);
        setItems(response.data);
        setItemsId(response.data);
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

  const handdleAdd2Cart=(itemId)=>{
    //console.log(itemsId);
    let count=itemCount;
    count++;
    let itemsIdLocal=[itemId]
    setCartItemCount(count);
    localStorage.setItem('itemCount',count);
      setItemsId(previous =>[...itemsId,itemId]);
      if(itemsId.length===0){
        setItemsId(previous =>[...itemsId,itemId]);
        console.log('yes');
      }
    console.log(itemsId);
  }

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
      <Navbar itemCount={itemCount} />
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

              <div className={role=== 'admin'? 'buttons-container':'single-button-container'}>
              {role === 'admin' && (
                <button className='delete-button' onClick={() => handleDelete(item.itemId)}>
                  <AiFillDelete className="navbar__del-icon"/>
                </button>
              )}
              <button className={role==='admin'? 'add-to-cart-button':'add-to-cart-buttonCustomer'} onClick={() =>handdleAdd2Cart(item.itemId)}>
              <FaShoppingCart className="navbar__cart-icon" />
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllItems;