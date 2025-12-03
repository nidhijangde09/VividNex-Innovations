
import React from "react";
import "./ValuesSection.css";


const values = [
  {
    title: "Medical Coverage",
   description: "Your health and your family’s well-being are important to us. You’ll have access to insurance plans that cover a variety of medical conditions for yourself and your loved ones.",
    img: "https://images.pexels.com/photos/8846583/pexels-photo-8846583.jpeg", // replace with your image
  },
  {
   title: "Coverage for Assistive Devices",
   description: "Employees and their dependents (spouse and child) with disabilities can avail reimbursement for assistive devices through the company’s medical insurance.",
    img: "https://images.pexels.com/photos/7500030/pexels-photo-7500030.jpeg",
  },
  {
   title: "Policies for People with Disabilities",
   description: "Our policies provide coverage for a wide range of tests and treatments for apparent and non-apparent disabilities, including gender affirmation surgery, hormone therapy, and facial reconstruction for employees and their partners.",
    img: "https://images.pexels.com/photos/3822220/pexels-photo-3822220.jpeg",
  },
];

function ValuesSection() {
  return (
    <div className="values-container">
      {values.map((item, index) => (
        <div key={index} className="value-card">
          <img src={item.img} alt={item.title} className="value-img" />
          <h3 className="value-title">{item.title}</h3>
          <p className="value-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ValuesSection;