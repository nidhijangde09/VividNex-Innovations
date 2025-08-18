import React from "react";
import Slider from "react-slick";
import "./ResearchSlider.css";

const cardData = [
  {
    title: "Making reinvention real with gen AI: From experimentation to impact",
    label: "RESEARCH REPORT",
    image: "https://i.ibb.co/nLdtW3H/statue.jpg"
  },
  {
    title: "Building a reinvention-ready digital core",
    label: "RESEARCH REPORT",
    image: "https://i.ibb.co/ZdQy9xF/finger-lights.jpg"
  },
  {
    title: "Reinventing with a digital core: How to accelerate growth through change",
    label: "RESEARCH REPORT",
    image: "https://i.ibb.co/41RBPXc/digital-grid.jpg"
  },
  {
    title: "Build your tech and balance your debt",
    label: "RESEARCH REPORT",
    image: "https://i.ibb.co/Y3Wzm0X/glasses-woman.jpg"
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

const ResearchSlider = () => {
  return (
    <div className="research-slider-container">
      <Slider {...settings}>
        {cardData.map((card, idx) => (
          <div className="research-card" key={idx}>
            <div
              className="research-card-bg"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="research-card-content">
                <p className="research-label">{card.label}</p>
                <h3 className="research-title">{card.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResearchSlider;
