import React, { useState } from "react";
import "./PartnersCarouselSection.css";

const data = [
  {
    id: 1,
    name: "AWS",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKDyl68b4_4k9XtONR43lox5I6qeblEqJsFbTa0Kh5vnMp7sIL",
    description:"With AWS’s leading cloud technologies, we help organizations build solutions that reshape industries, uplift communities, and enhance lives—delivering modernization and innovation at scale.",
    link: "#"
  },
  {
    id: 2,
    name: "Salesforce",
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1745995389812&&fmt=webp-alpha&dpr=off",
    description:
      "With Salesforce, organizations can reimagine how they engage customers, streamline operations, and drive growth—transforming industries and communities for the better.",
    link: "#"
  },
  {
    id: 3,
    name: "Google",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEa8QECSRBmkBHGCiC_6wdgjPDj9A55BgVEghusoER1M0fI7JP",
    description:
      "With Google’s cutting-edge AI, data, and cloud solutions, organizations can unlock new possibilities—driving transformation across industries and communities worldwide.",
    link: "#"
  },
  {
    id: 4,
    name: "Microsoft",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoZVLhT34Vngk1wD-nWuzxsXDvFu28iS3JYqB_6Md2Ma1iPBh",
    description:
      "With Microsoft, organizations can accelerate digital transformation—reimagining work, empowering people, and driving innovation at scale.",
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
