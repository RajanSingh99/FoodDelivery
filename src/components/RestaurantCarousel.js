// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import 'react-card-with-image/dist/index.css'

// const RestaurantCarousel = () => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const key = localStorage.getItem("key");
//         const response = await axios.get(
//           `http://localhost:8088/restaurants/view?key=${key}`
//         );
//         setRestaurants(response.data);
//       } catch (error) {
//         console.log("Error fetching restaurants:", error);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   const getRandomRestaurants = () => {
//     const shuffledRestaurants = restaurants.sort(() => Math.random() - 0.5);
//     return shuffledRestaurants.slice(0, 5);
//   };

//   const renderRestaurants = () => {
//     const randomRestaurants = getRandomRestaurants();

//   };

//   return (
//   //   // <>
//   //   //             <CCard style={{ width: '18rem' }}>
//   //   //         <CCardImage orientation="top" src={ReactImg} />
//   //   //         <CCardBody>
//   //   //             <CCardText>
//   //   //             Some quick example text to build on the card title and make up the bulk of the card's content.
//   //   //             </CCardText>
//   //   //         </CCardBody>
//   //   //         </CCard>
//   //   // </>
//   // 
//   )
// };

// export default RestaurantCarousel;