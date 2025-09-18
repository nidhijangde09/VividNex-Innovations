// PartnersCarousel.js

import React, { useState } from "react";
import "./PartnersCarousel.css";

const data = [
  {
    id: 1,
    name: "AWS",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKDyl68b4_4k9XtONR43lox5I6qeblEqJsFbTa0Kh5vnMp7sIL",
    description:
      "Empower industries, strengthen communities, and enhance lives using AWS’s advanced cloud technologies. Together, we drive modernization, efficiency, and innovation at scale.",
    link: "#"
  },
  {
    id: 1,
    name: "Salesforce",
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1745995389812&&fmt=webp-alpha&dpr=off",
    description:
      "Transform customer engagement with Salesforce—powered by data and AI—to create personalized journeys that inspire trust and drive results.",
    link: "#"
  },
  {
    id: 2,
    name: "Google",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEa8QECSRBmkBHGCiC_6wdgjPDj9A55BgVEghusoER1M0fI7JP",
    description:
      "Drive transformation with scalable infrastructure, advanced analytics, robust security, precision advertising, and generative AI—while fostering a culture of constant innovation.",
    link: "#"
  },
  {
    id: 3,
    name: "Microsoft",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoZVLhT34Vngk1wD-nWuzxsXDvFu28iS3JYqB_6Md2Ma1iPBh",
    description:
      "Transform the way you work with Microsoft’s secure, agile, and AI-powered platforms—built to meet your organization’s evolving needs.",
    link: "#"
  }
];

const PartnersCarousel = () => {
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
    <div className="partners-container">
      <button onClick={prevSlide} className="partners-arrow">
        &#8592;
      </button>
      <div className="partners-slide">
        <img
          src={data[currentIndex].logo}
          alt={data[currentIndex].name}
          className="partners-logo"
        />
        <h2>{data[currentIndex].name}</h2>
        <p>{data[currentIndex].description}</p>
        <a href={data[currentIndex].link}>Learn more</a>
      </div>
      <button onClick={nextSlide} className="partners-arrow">
        &#8594;
      </button>
    </div>
  );
};

export default PartnersCarousel;
