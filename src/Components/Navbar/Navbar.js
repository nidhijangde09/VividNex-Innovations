import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const navItems = [
  {
    name: 'What we do',
    href: '#', 
    dropdown: ['Cloud', 'Data & AI', 'Security'],
  },
  {
    name: 'What we think',
    href: '#',
    dropdown: ['Automotive', 'Retail', 'Banking'],
  },
  {
    name: 'Who we are',
    href: '#',
    dropdown: ['Our Story', 'Leadership', 'Sustainability'],
  },
  {
    name: 'Careers',
    href: '#',
    dropdown: ['Search Jobs', 'Life at Accenture'],
  },
  
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
       
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <div className="nav-item-wrapper" key={item.name}>
              <button
                className="nav-item"
                onClick={() => toggleDropdown(index)}
              >
                {item.name}
              </button>
              {activeDropdown === index && (
                <div className="dropdown">
                  {item.dropdown.map((option) => (
                    <a href="#" key={option} className="dropdown-item">
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="nav-search-btn">Search</button>
        </div>

        <div
          className="nav-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


