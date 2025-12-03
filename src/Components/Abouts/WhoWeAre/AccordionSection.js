import React, { useState } from 'react';
import './AccordionSection.css';

const accordionData = [
  { title: "Driving Value in Every Direction", content: "See how we deliver meaningful outcomes to our clients, teams, shareholders, partners, and communities." },
  { title: "Code of Business Ethics", content: "At VividNex, we believe that success begins with integrity. Our people are committed to doing what’s right—delivering value to our clients and partners, creating opportunities for our teams, and driving innovation responsibly. Together, we uphold the highest ethical standards and strive to make a positive impact in everything we do." },
  { title: "Innovation", content: "At VividNex, innovation is at the heart of everything we do. We combine technology, creativity, and collaboration to turn bold ideas into real solutions that drive lasting value for our clients and communities." },
    { title: "Sustainability", content: "At VividNex, we’re committed to integrating sustainability into everything we do. We support our clients in achieving their environmental, social, and governance goals, run our operations responsibly with respect for people and the planet, and strive to create lasting value for communities everywhere." },
  { title: "Inclusion and Diversity", content: "At VividNex, we value the power of diverse perspectives. We hire and nurture people from varied backgrounds, experiences, and viewpoints—believing that true innovation thrives when different minds come together. This diversity fuels creativity, strengthens collaboration, and drives the transformative ideas that shape our success." },
  { title: "Responsible AI", content: "At VividNex, we recognize that powerful technologies like generative AI bring immense potential—along with important responsibilities. We help our clients design, develop, and deploy AI solutions ethically and transparently to unlock value while building trust." }
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
