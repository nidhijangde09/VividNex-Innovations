import React, { useState } from "react";
import "./MegaMenu.css";

const menuData = {
  "Comms, Media, Technology": ["5G", "Cloud", "AI"],
  Products: ["Consumer Goods", "Retail", "Automotive"],
  "Financial Services": ["Banking", "Capital Markets", "Insurance"],
  "Health and Public Service": ["Healthcare", "Public Safety", "Education"],
  Resources: ["Energy", "Utilities", "Natural Resources"],
};

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState("Financial Services"); // default active

  return (
    <div className="mega-container">
      {/* Top Menu */}
      <div className="mega-top">
        {Object.keys(menuData).map((menu) => (
          <span
            key={menu}
            className={`mega-item ${activeMenu === menu ? "active" : ""}`}
            onMouseEnter={() => setActiveMenu(menu)} // hover changes submenu
            onClick={() => setActiveMenu(menu)} // for mobile tap
          >
            {menu}
          </span>
        ))}
      </div>

      {/* Submenu */}
      <div className="mega-submenu">
        {menuData[activeMenu].map((sub, i) => (
          <a key={i} href="#" className="mega-link">
            {sub}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
