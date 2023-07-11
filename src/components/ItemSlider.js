import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './ItemSlider.css';

const ItemSlider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const proprietes = {
        duration: 1000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }

  return (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    className='autoplaysider'
  >
    <div data-src={require("./img1.jpg")} className='hello'/>
    <div data-src={require("./img2.png")}  />
    <div data-src={require("./img3.jpg")}  />
    <div data-src={require("./img4.jpg")}  />
  </AutoplaySlider>

  );
};

export default ItemSlider;