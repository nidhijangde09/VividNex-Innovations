import React, { useState } from "react";
import "./DropdownSelect.css";

const DropdownSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select a value");

  const options = [
    "AI Refinery",
    "Academic or Professional Researcher",
    "New hires",
    "Accounts Payable & Receivable",
    "Partner Relations"
  ];

  return (
    <div className="dropdown-container">
      <label className="dropdown-label">Inquiry Type*</label>

      <div 
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedValue}</span>
        <span className={`arrow ${isOpen ? "up" : "down"}`}>⌃</span>
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {options.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedValue(item);
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelect;
