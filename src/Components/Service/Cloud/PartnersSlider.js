// PartnersSlider.js

import React, { useState } from "react";
import "./PartnersSlider.css";

const data = [
  {
    id: 1,
    name: "AWS",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKDyl68b4_4k9XtONR43lox5I6qeblEqJsFbTa0Kh5vnMp7sIL",
    description:
      "Build solutions that transform industries, communities and lives for the better using AWS world-leading cloud technologies. Together, we empower organizations to modernize, optimize and innovate at scale.",
    link: "#"
  },
  {
    id: 2,
    name: "Google",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEa8QECSRBmkBHGCiC_6wdgjPDj9A55BgVEghusoER1M0fI7JP",
    description:
      "Achieve transformative results through scalable infrastructure, advanced data analytics, robust security, targeted advertising and cutting-edge generative AI. Foster a culture of continuous innovation.",
    link: "#"
  },
  {
    id: 3,
    name: "Microsoft",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoZVLhT34Vngk1wD-nWuzxsXDvFu28iS3JYqB_6Md2Ma1iPBh",
    description:
      "Reinvent productivity and business processes with Microsoft powered solutions to drive your digital transformation journey.",
    link: "#"
  }
];

const PartnersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="arrow">
        &#8592;
      </button>
      <div className="slide">
        <img src={data[currentIndex].logo} alt={data[currentIndex].name} className="logo" />
        <h2>{data[currentIndex].name}</h2>
        <p>{data[currentIndex].description}</p>
        <a href={data[currentIndex].link}>Learn more</a>
      </div>
      <button onClick={nextSlide} className="arrow">
        &#8594;
      </button>
    </div>
  );
};

export default PartnersSlider;
