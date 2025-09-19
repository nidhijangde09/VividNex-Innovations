import React, { useState } from 'react';
import './AccordionSection.css';

const accordionData = [
  { title: "Define your vision and value", content: "Clarify your goals, align stakeholders, and build a plan that works from day one." },
  { title: "Enhance customer engagement with an omnichannel strategy", content: "Bring in experts to enhance capacity and deliver real results across all phases." },
  { title: "Elevate talent and performance to drive customer service excellence", content: "Replace spreadsheets and paper forms with integrated digital workflows." },
  { title: "Optimize sourcing to enhance customer service efficiency", content: "Clarify your goals, align stakeholders, and build a plan that works from day one." },

];

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-section">

      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(index)}>
            <span>{item.title}</span>
            <span className="accordion-icon">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
