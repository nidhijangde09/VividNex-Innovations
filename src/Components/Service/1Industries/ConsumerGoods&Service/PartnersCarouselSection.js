import React, { useState } from "react";
import "./PartnersCarouselSection.css";
import Partnersslidercards from '../../../../View/Partnersslidercards/Partnersslidercards';
import Partnersslidercards1 from '../../../../View/Partnersslidercards/Partnersslidercards1';
import Partnersslidercards2 from '../../../../View/Partnersslidercards/Partnersslidercards2';
import { Link } from "react-router-dom";

const data = [
 {
    id: 1,
    name: "AWS",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKDyl68b4_4k9XtONR43lox5I6qeblEqJsFbTa0Kh5vnMp7sIL",
    description:" We create transformative solutions that empower industries, communities, and people—leveraging AWS’s leading cloud technologies to modernize, optimize, and innovate at scale.",
    link: "/Partnersslidercards"
  },
  {
    id: 2,
    name: "Salesforce",
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1745995389812&&fmt=webp-alpha&dpr=off",
    description: "Gain secure, real-time insights into operations by mapping assets and contextualizing processes, events, and historical data.",
    link: "/Partnersslidercards"

  },

  {
    id: 3,
    name: "Google",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEa8QECSRBmkBHGCiC_6wdgjPDj9A55BgVEghusoER1M0fI7JP",
    description: "Drive measurable impact with scalable technology, intelligent data analytics, secure systems, precision advertising, and generative AI—empowering your teams to innovate continuously.",
    link: "/Partnersslidercards1"

  },
  {
    id: 4,
    name: "Microsoft",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoZVLhT34Vngk1wD-nWuzxsXDvFu28iS3JYqB_6Md2Ma1iPBh",
   description: "Unlock new levels of productivity and growth with Microsoft’s secure, adaptive, and AI-driven platforms designed for the future of work.",
    link: "/Partnersslidercards2"

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
