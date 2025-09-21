// PartnersCarousel.js

import React, { useState } from "react";
import "./PartnersCarousel.css";

import Partnersslidercards from '../../../View/Partnersslidercards/Partnersslidercards';
import Partnersslidercards1 from '../../../View/Partnersslidercards/Partnersslidercards1';
import Partnersslidercards2 from '../../../View/Partnersslidercards/Partnersslidercards2';
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "AWS",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKDyl68b4_4k9XtONR43lox5I6qeblEqJsFbTa0Kh5vnMp7sIL",
    description:

      "We develop transformative solutions that positively impact industries, communities, and lives by leveraging AWS’s world-leading cloud technologies. Together, we enable organizations to modernize, optimize, and innovate at scale.",
    link: "/Partnersslidercards"
  },
  {
    id: 2,
    name: "Salesforce",
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1745995389812&&fmt=webp-alpha&dpr=off",
    description: "Securely visualize enterprise-wide operations through an asset model that applies context to real-time processes, alarms, events, and historical data.",
    link: "/Partnersslidercards1"

  },

  {
    id: 3,
    name: "Google",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEa8QECSRBmkBHGCiC_6wdgjPDj9A55BgVEghusoER1M0fI7JP",
    description: "Achieve transformative outcomes with scalable infrastructure, advanced data analytics, robust security, targeted advertising, and cutting-edge generative AI—while fostering a culture of continuous innovation.",
    link: "/Partnersslidercards1"

  },
  {
    id: 4,
    name: "Microsoft",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoZVLhT34Vngk1wD-nWuzxsXDvFu28iS3JYqB_6Md2Ma1iPBh",
    description: "Reinvent the way you work with Microsoft’s secure, agile, and AI-powered platforms and tools—purposefully designed to meet the evolving needs of your organization.",
    link: "/Partnersslidercards2"

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
