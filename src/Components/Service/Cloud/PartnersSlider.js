// PartnersSlider.js

import React, { useState } from "react";
import "./PartnersSlider.css";

const data = [
  {
    id: 1,
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description:
      "Build solutions that transform industries, communities and lives for the better using AWS world-leading cloud technologies. Together, we empower organizations to modernize, optimize and innovate at scale.",
    link: "#"
  },
  {
    id: 2,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description:
      "Achieve transformative results through scalable infrastructure, advanced data analytics, robust security, targeted advertising and cutting-edge generative AI. Foster a culture of continuous innovation.",
    link: "#"
  },
  {
    id: 3,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
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
