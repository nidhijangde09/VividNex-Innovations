import React from "react";
import "./ConductSection.css";

function ConductSection() {
  const items = [
    {
      icon: "https://dynamicmedia.accenture.com/is/content/accenture/Value-icon?ts=1731923158595&dpr=off", // diamond icon link
      title: "Ethical Excellence",
      text: "Vividnex promotes respect, fairness, and ethical behavior, helping everyone thrive and do their best each day."
    },
    {
      icon: "https://dynamicmedia.accenture.com/is/content/accenture/Cloud-Innovation-80x80?ts=1741803024550&dpr=off", // shield icon link
      title: "Protect People, Information, and Our Business",
      text: "At Vividnex, we work together to build a stronger, more resilient company for the future—safeguarding our brand, information, intellectual property, and our people."
   },
    {
      icon: "https://dynamicmedia.accenture.com/is/content/accenture/Talent_80x80-1?ts=1741803221311&dpr=off", // citizen icon link
      title: "Creating Positive Impact",
text: "Vividnex fosters ethical practices, environmental stewardship, and community engagement to build a better world together."
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
