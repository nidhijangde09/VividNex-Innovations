import React, { useState } from "react";
import "./Slider.css";

const slides = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/858430316/photo/board-room-meeting.jpg?s=612x612&w=0&k=20&c=BdvLkSq7Ytpy69-qv9fqaB9pWMEIlJPDpjsmlzjsU2A=", // replace with your illustration
    title: "Sam heads out",
    description: "Sam starts the day by getting into their Land Rover Sport to run errands—one of many launches we’ve proudly supported."
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/2214127693/photo/thoughtful-manager-talking-smartphone-working-on-laptop-at-home-office-closeup.jpg?s=612x612&w=0&k=20&c=u1AYR3A4909NByctyfp6hINrZgYhj0GUcm0s4gpy1lA=",
   title: "Morning routine",
   description: "Sam begins the day with a cup of coffee while catching up on the latest updates on their phone."
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x300",
    title: "Work begins",
    description: "Sam arrives at the office and collaborates with their team, tackling challenges and finding solutions together."
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
      <div className="slider-image">
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
