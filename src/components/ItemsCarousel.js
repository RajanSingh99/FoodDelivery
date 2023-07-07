import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactCardSlider from 'react-card-slider-component';
import './itemsCarousel.css';

const ItemsCarousel = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const key = localStorage.getItem("key");
      const response = await axios.get(`http://localhost:8088/items/all?key=${key}`);
      setItems(response.data);
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
   
  const sliderClick = (slider) => {
    alert("hello world");
  };

  const slides = items.map((item) => ({
    image: require(`../../resources/${(item.itemId)>45? 29:item.itemId}.jpg`), 
    title: item.itemName,
    description: `Cost: ${item.cost}`,
    clickEvent: sliderClick,
  }));


  return (
    <ReactCardSlider slides={slides}  autoPlay={true} infinite/>
  );
};

export default ItemsCarousel;