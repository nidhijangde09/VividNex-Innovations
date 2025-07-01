import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import vividlogo from './vivivdlogo.png';

const megaMenuData = {
  Services: [
    {
      title: "Capabilities",
      items: [
        { label: "Cloud", path: "/cloud" },
        { label: "Customer Service", path: "/CustomerService" },
        { label: "Cybersecurity", path: "/Cybersecurity" },
        { label: "Data and AI", path: "/DataandAI" },
        { label: "Digital engineering & manufacturing", path: "/DigitalEngineering" },
        { label: "Ecosystem Partners", path: "/EcosystemPartners" },
        { label: "Emerging Technology", path: "/EmergingTechnology" },
        { label: "Finance & Risk Management", path: "/" },
        { label: "Infrastructure and Capital Projects", path: "/" },
        { label: "Learning", path: "/" },
      ],
    },
    {
      items: [
        { label: "Managed Services", path: "/" },
        { label: "Marketing & Experience", path: "/" },
        { label: "Metaverses", path: "/" },
        { label: "Sales & Commerce", path: "/" },
        { label: "Strategy", path: "/" },
        { label: "Supply Chain", path: "/" },
        { label: "Sustainability", path: "/" },
        { label: "Talent and Organization", path: "/" },
        { label: "Technology Transformation", path: "/" },
      ],
    },
    {
      title: "Industries",
      items: [
        { label: "Aerospace & defense", path: "/" },
        { label: "Automotive", path: "/" },
        { label: "Banking", path: "/" },
        { label: "Capital Market", path: "/" },
        { label: "Chemicals", path: "/" },
        { label: "Communication & Media", path: "/" },
        { label: "Consumer Goods & Service", path: "/" },
        { label: "Energy", path: "/" },
        { label: "Health", path: "/" },
        { label: "High Tech", path: "/" },
      ],
    },
    {
      items: [
        { label: "Industrial", path: "/" },
        { label: "Insurance", path: "/" },
        { label: "Life Science", path: "/" },
        { label: "Natural Resource", path: "/" },
        { label: "Public Service", path: "/" },
        { label: "Private Equity", path: "/" },
        { label: "Retail", path: "/" },
        { label: "Software & Platforms", path: "/" },
        { label: "Travel", path: "/" },
        { label: "Utilities", path: "/" },
      ],
    },
  ],
  About: [
    {
      title: "Our Organization",
      items: [
        { label: "Awards & Recognition", path: "/" },
        { label: "Corpoprate Sustainability", path: "/" },
        { label: "Industry Analyst Recognition", path: "/" },
        { label: "Leaders", path: "/" },
        { label: "Location", path: "/" },
        { label: "360° Value Report", path: "/" },
      ],
    },
    {
      title: "Media & Investor",
      items: [
        { label: "Media Relations", path: "/" },
        { label: "Investor Relation", path: "/" },
        { label: "Board of Directors", path: "/" },
      ],
    },
    {
      title: "How we serve",
      items: [
        { label: "Strategy & consulting", path: "/" },
        { label: "Technology", path: "/" },
        { label: "Operation", path: "/" },
        { label: "Industry X", path: "/" },
        { label: "Song", path: "/" },
      ],
    },
  ],
  Career: [
    {
      title: "Find a job",
      items: [
         { label: "Search for job", path: "/" },
          { label: " Career areas", path: "/" },
      ],
    },
    {
      title: "Life at Vividnex",
      items: [
        { label: "Working here", path: "/" },
          { label: "Benefits", path: "/" },
          { label: "Work environment", path: "/" },
          { label: "Career blog", path: "/" },
      ],
    },
      {
      title: "How we hire",
      items: [
        { label: "Hiring journey", path: "/" },
          { label: "Pro tips", path: "/" },
         
      ],
    },
  ],
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMegaMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img src={vividlogo} alt="Logo" />
      </Link>

      <div
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-items ${isMobileMenuOpen ? "open" : ""}`}>
        {Object.keys(megaMenuData).map((menu) => (
          <li key={menu} className="dropdown-wrapper">
            <div className="dropdown-hover-area">
              <div
                className="dropdown-title"
                onClick={() => toggleMegaMenu(menu)}
              >
                {menu} <span className="arrow">▼</span>
              </div>

              {activeMenu === menu && (
                <div className="mega-menu">
                  {menu === "Services" && (
                    <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="mega-menu-heading">Services</h3>
                    </Link>
                  )}
                  {menu === "About" && (
                    <Link to="/About" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="mega-menu-heading">About Vividnex</h3>
                    </Link>
                  )}
                    {menu === "Career" && (
                    <Link to="/Careert" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="mega-menu-heading">Career</h3>
                    </Link>
                  )}
                  {megaMenuData[menu].map((section, index) => (
                    <div className="mega-column" key={index}>
                      {section.title && <h4>{section.title}</h4>}
                      <ul>
                        {section.items.map((item, i) => (
                          <li key={i}>
                            {typeof item === "string" ? (
                              <Link
                                to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item}
                              </Link>
                            ) : (
                              <Link
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}

        <li>
          <Link to="/who-we-are" onClick={() => setIsMobileMenuOpen(false)}>
            Who we are
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
