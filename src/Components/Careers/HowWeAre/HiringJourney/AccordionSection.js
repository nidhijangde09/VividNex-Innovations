import React, { useState } from 'react';
import './AccordionSection.css';

const accordionData = [
  { title: "Why is VividNex a great place to start or build your career?", content: "Your first role at VividNex is just the beginning of an exciting journey. With our diverse range of projects, collaborative culture, and focus on innovation, you’ll have endless opportunities to learn, grow, and make an impact. We invest in continuous learning and hands-on experience so your skills evolve with the latest technologies and industry trends. At VividNex, we take pride in fostering an inclusive and growth-oriented environment where ideas are valued, teamwork drives success, and every individual has the opportunity to shape the future." },
  { title: "Get skilled support where you need it most", content: "Bring in experts to enhance capacity and deliver real results across all phases." },
  { title: "Digitize your processes", content: "Replace spreadsheets and paper forms with integrated digital workflows." },
    { title: "Define your strategy from the start", content: "Clarify your goals, align stakeholders, and build a plan that works from day one." },
  { title: "Get skilled support where you need it most", content: "Bring in experts to enhance capacity and deliver real results across all phases." },
  { title: "Gain total project visibility with data", content: "Track performance, monitor risks, and make informed decisions in real time." }
];

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-section">
      <h2>Answers to your most common questions</h2>
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
