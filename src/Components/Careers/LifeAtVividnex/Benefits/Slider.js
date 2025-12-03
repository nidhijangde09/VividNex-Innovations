import React, { useState } from "react";
import "./Slider.css";

const slides = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/1025419710/photo/nice-healthy-lunch-for-you-stock-image.jpg?b=1&s=612x612&w=0&k=20&c=gIQ5JmwhirInyX8HQsIYWVJ1MPL6FqbbZBsz89qAasg=", // replace with your illustration
    title: "Parental Leave",
    description: "Primary caregivers are entitled to 26 weeks of paid leave, applicable in cases of birth or adoption. Secondary caregivers are eligible for up to 15 working days of paid leave."
},
  {
    id: 2,
    image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg",
    title: "Care for Dependents",
    description: "To support your evolving wellness needs, you have access to the Benefits You program. This program offers a range of personalized services at discounted rates across four pillars: Family Care, Financial Well-being, Fitness & Wellness, and Outpatient Coverage (OPD)."

  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3756036/pexels-photo-3756036.jpeg",
    title: "Childcare Center Benefit",
description: "We provide employees with discounted or subsidized tie-ups with childcare centers."

  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      {/* Left Side - Image */}
      <div className="slider-images">
        <img src={slides[current].image} alt={slides[current].title} />
      </div>

      {/* Right Side - Text */}
      <div className="slider-text">
        <h3>{slides[current].title}</h3>
        <p>{slides[current].description}</p>

        {/* Controls */}
        <div className="slider-controls">
          <button className="pause">⏸</button>
          <div className="arrows">
            <button onClick={prevSlide}>←</button>
            <span>
              {current + 1}/{slides.length}
            </span>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
