import React, { useState } from 'react';
import './AccordionSection.css';

const accordionData = [
  
  { title: "Disclaimer, Forward-Looking Statements, and Trademark References", 
    content: "This site may contain forward-looking statements that involve risks, uncertainties, and factors that are difficult to predict, which could cause actual results to differ materially from those expressed or implied. Words such as “may,” “will,” “should,” “likely,” “commit,” “anticipates,” “expects,” “intends,” “believes,” “estimates,” “plans,” “targets,” and similar expressions are used to identify these forward-looking statements. These statements may relate to our business strategy, goals, operations, corporate responsibility, or sustainability initiatives. Unless specifically indicated otherwise, these statements are not guarantees of future performance and VividNex Innovations undertakes no obligation to update them.Third-party data included on this site has been obtained from sources believed to be reliable, but VividNex Innovations does not independently verify the accuracy or completeness of such data.References to websites throughout this site are for convenience only, and the content on such sites is not incorporated by reference.This site may include marks owned by third parties. All such third-party marks are the property of their respective owners. Unless expressly stated, no sponsorship, endorsement, or approval of this content by the owners of such marks is intended or implied.All amounts are stated in [your currency], except where noted.Some content and imagery used on this site may have been generated using artificial intelligence technology." },
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
