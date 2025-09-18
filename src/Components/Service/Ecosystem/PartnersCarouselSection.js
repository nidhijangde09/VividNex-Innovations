import React, { useState } from "react";
import "./PartnersCarouselSection.css";

const data = [
  {
    id: 1,
    name: "AWS",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKDyl68b4_4k9XtONR43lox5I6qeblEqJsFbTa0Kh5vnMp7sIL",
    description:
    "Create solutions that reshape industries, uplift communities, and enrich lives through AWS’s advanced cloud technologies. Together, we help organizations modernize, streamline, and innovate globally.",
    link: "#"
  },
  {
    id: 2,
    name: "Salesforce",
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1745995389812&&fmt=webp-alpha&dpr=off",
    description:
     "Develop solutions that drive change across industries, communities, and lives through AWS’s market-leading cloud technologies. Together, we empower organizations to evolve, optimize, and innovate at scale.",
    link: "#"
  },
  {
    id: 3,
    name: "Google",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEa8QECSRBmkBHGCiC_6wdgjPDj9A55BgVEghusoER1M0fI7JP",
    description:
      "Deliver transformative results using scalable infrastructure, intelligent data analytics, robust security, targeted campaigns, and cutting-edge generative AI. Promote a culture of ongoing innovation.",
    link: "#"
  },
  {
    id: 4,
    name: "Microsoft",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoZVLhT34Vngk1wD-nWuzxsXDvFu28iS3JYqB_6Md2Ma1iPBh",
    description:
      "Boost productivity and optimize business processes with Microsoft solutions, empowering your digital transformation journey.",
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
