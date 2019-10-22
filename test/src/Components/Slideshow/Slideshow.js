import React from 'react';
import "./Slideshow.css";
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  
  'Lejonkungen.jpg',
  'Spiderman.jpg',
  'IT.jpg'
];
 
const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
        <>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span></span> {/* Lägg till text mellan span-taggarna för namn på varje slide */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span></span> 
            </div>
          </div>
        </Slide>
      </div>
      </>
    )
}

export default Slideshow;