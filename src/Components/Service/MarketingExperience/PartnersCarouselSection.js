import React, { useState } from "react";
import "./PartnersCarouselSection.css";

const data = [
  {
    id: 1,
    name: "AWS",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKDyl68b4_4k9XtONR43lox5I6qeblEqJsFbTa0Kh5vnMp7sIL",
    description:
      "Using AWS’s cloud expertise, we create solutions that positively transform industries and communities, empowering organizations to modernize, optimize, and innovate at scale",
    link: "#"
  },
  {
    id: 2,
    name: "Salesforce",
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1745995389812&&fmt=webp-alpha&dpr=off",
    description:
      "Transform industries, communities, and lives with AWS cloud technologies—modernize, optimize, and innovate at scale.",
    link: "#"
  },
  {
    id: 3,
    name: "Google",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEa8QECSRBmkBHGCiC_6wdgjPDj9A55BgVEghusoER1M0fI7JP",
    description:
      "Drive transformative results with scalable infrastructure, advanced analytics, robust security, targeted advertising, and cutting-edge generative AI—fostering a culture of continuous innovation.",
    link: "#"
  },
  {
    id: 4,
    name: "Microsoft",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoZVLhT34Vngk1wD-nWuzxsXDvFu28iS3JYqB_6Md2Ma1iPBh",
    description:
      "Unlock new levels of productivity and innovation with Microsoft-powered solutions, fueling your digital transformation journey.",
    link: "#"
  }
];

const PartnersCarouselSection = () => {
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
    <div className="partnerscarousel-container">
      <button onClick={prevSlide} className="partnerscarousel-arrow">
        &#8592;
      </button>
      <div className="partnerscarousel-slide">
        <img
          src={data[currentIndex].logo}
          alt={data[currentIndex].name}
          className="partnerscarousel-logo"
        />
        <h2>{data[currentIndex].name}</h2>
        <p>{data[currentIndex].description}</p>
        <a href={data[currentIndex].link}>Learn more</a>
      </div>
      <button onClick={nextSlide} className="partnerscarousel-arrow">
        &#8594;
      </button>
    </div>
  );
};

export default PartnersCarouselSection;
