import React from "react";
import "./ConductSection.css";

function ConductSection() {
  const items = [
    {
      icon: "https://dynamicmedia.accenture.com/is/content/accenture/Value-icon?ts=1731923158595&dpr=off", // diamond icon link
      title: "Make your conduct count",
      text: "Making your conduct count is about fostering respect, fairness and shared ethical values and describes behaviors that we expect from—and for—our people so that they can be at their best each day."
    },
    {
      icon: "https://dynamicmedia.accenture.com/is/content/accenture/Cloud-Innovation-80x80?ts=1741803024550&dpr=off", // shield icon link
      title: "Protect people, information and our business",
      text: "We work together to build a better, stronger company for future generations, protecting the Accenture brand, information, intellectual property and our people."
    },
    {
      icon: "https://dynamicmedia.accenture.com/is/content/accenture/Talent_80x80-1?ts=1741803221311&dpr=off", // citizen icon link
      title: "Be a good corporate citizen",
      text: "We support and respect human rights, foster environmental responsibility and encourage our people's involvement in the communities where we work and live."
    }
  ];

  return (
    <div className="conduct-container">
      {items.map((item, index) => (
        <div className="conduct-item" key={index}>
          <div className="conduct-icon">
            <img src={item.icon} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ConductSection;
