import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import vividlogo from './vivivdlogo.png';
import Service from '../Service/What-we-do/Service';
import Home from '../Home/Home';

import CustomerService from '../Service/CustomerService/CustomerService';
import Cybersecurity from '../Service/CyberSecurity/CyberSecurity';
import Dataai from '../Service/DataAi//Dataai';
import DigitalEngeneer from '../Service/DigitalE/DigitalEngeneer';
import Ecosystem from '../Service/Ecosystem/Ecosystem';
import EmergingTechnology from '../Service/EmergingTechnology/EmergingTechnology';
import FinanceManagement from '../Service/FinanceManagement/FinanceManagement'; 
import InfrastructureCapital from '../Service/InfrastructureCapitalProjects/InfrastructureCapital';
import Learning from "../Service/Learning/Learning";
import Managedservices from '../Service/ManagedServices/ManagedServices';
import MarketingExperience from '../Service/MarketingExperience/MarketingExperience';
import Metaverse from '../Service/Metaverse/Metaverse';
import SalesCommerce from "../Service/SalesCommerce/SalesCommerce";
import StrategyConsulting from '../Service/StrategyConsulting/StrategyConsulting';
import SupplyChain from '../Service/SupplyChain/SupplyChain';
import SustainabilityConsulting from '../Service/SustainabilityConsulting/SustainabilityConsulting';
import TalentOrganization from '../Service/TalentOrganization/TalentOrganization';
import TechnologyTransformation from '../Service/TechnologyTransformation/TechnologyTransformation';
import Aerospaceanddefense from '../Service/1Industries/Aerospaceanddefense/Aerospace';
import WhatWeThink from '../WhatWeThink/WhatWeThink';
import Automotive from '../Service/1Industries/Automotive/Automotive';
import Banking from '../Service/1Industries/Banking/Banking';
import Capital from '../Service/1Industries/Capital/Capital';
import Chemicals from '../Service/1Industries/Chemicals/Chemicals';
import CommunicationMedia from '../Service/1Industries/CommunicationMedia/CommunicationMedia';
import ConsumerService from '../Service/1Industries/ConsumerGoods&Service/ConsumerService'
import Energy from '../Service/1Industries/Energy/Energy';
import Health from '../Service/1Industries/Health/Health';
import HighTech from '../Service/1Industries/HighTech/HighTech';
import Industrial from '../Service/1Industries/Industrial/Industrial';
import Lifescience from '../Service/1Industries/LifeScience/Lifescience';
import Naturalresources from '../Service/1Industries/Naturalresources/Naturalresources';
import Privateequity  from '../Service/1Industries/Privateequity/Privateequity';
import Insurance from '../Service/1Industries/Insurance2/Insurance';
import Publicsector from '../Service/1Industries/Publicsector/Publicsector';
import  Retail from '../Service/1Industries/Retail/Retail';
import Softwareplatforms from '../Service/1Industries/Softwareplatforms/Softwareplatforms';
import Utilities from '../Service/1Industries/Utilities/Utilities';
import Travel from '../Service/1Industries/Travel/Travel';
import SearchForJob from '../Careers/FindJob/SearchForJob/SearchForJob';
import CareerArea from '../Careers/FindJob/CareerArea/CareerArea';
import WorkingHere from '../Careers/LifeAtVividnex/WorkingHere/WorkingHere';
import Benefits from '../Careers/LifeAtVividnex/Benefits/Benefits';

const megaMenuData = {
  Services: [
    {
      title: "Capabilities",
      items: [
        { label: "Cloud", path: "/cloud" },
        { label: "Customer Service", path: "/CustomerService" },
        { label: "Cybersecurity", path: "/Cybersecurity" },
        { label: "Data and AI", path: "/Dataai" },
        { label: "Digital engineering & manufacturing", path: "/DigitalEngeneer" },
        { label: "Ecosystem Partners", path: "/Ecosystem" },
        { label: "Emerging Technology", path: "/EmergingTechnology" },
        { label: "Finance & Risk Management", path: "/FinanceManagement" },
        { label: "Infrastructure and Capital Projects", path: "/InfrastructureCapital" },
        { label: "Learning", path: "/Learning" },
        
      ],
    },
    {
      items: [
        { label: "Managed Services", path: "/ManagedServices" },
        { label: "Marketing & Experience", path: "/MarketingExperience" },
        { label: "Metaverses", path: "/Metaverse" },
        { label: "Sales & Commerce", path: "/SalesCommerce" },
        { label: "Strategy", path: "/StrategyConsulting" },
        { label: "Supply Chain", path: "/SupplyChain" },
        { label: "Sustainability", path: "/SustainabilityConsulting" },
        { label: "Talent and Organization", path: "/TalentOrganization" },
        { label: "Technology Transformation", path: "/TechnologyTransformation" },
      ],
    },
    {
      title: "Industries",
      items: [
        { label: "Aerospace & defense", path: "/Aerospace" },
        { label: "Automotive", path: "/Automotive" },
        { label: "Banking", path: "/Banking" },
        { label: "Capital Market", path: "/Capital" },
        { label: "Chemicals", path: "/Chemicals" },
        { label: "Communication & Media", path: "/CommunicationMedia" },
        { label: "Consumer Goods & Service", path: "/ConsumerService" },
        { label: "Energy", path: "/Energy" },
        { label: "Health", path: "/Health" },
        { label: "High Tech", path: "/HighTech" },
      ],
    },
    {
      items: [
        { label: "Industrial", path: "/Industrial" },
        { label: "Insurance", path: "/Insurance" },
        { label: "Life Science", path: "/Lifescience" },
        { label: "Natural Resource", path: "/Naturalresources" },
        { label: "Public Service", path: "/Publicsector" },
        { label: "Private Equity", path: "/Privateequity" },
        { label: "Retail", path: "/Retail" },
        { label: "Software & Platforms", path: "/Softwareplatforms" },
        { label: "Travel", path: "/Travel" },
        { label: "Utilities", path: "/Utilities" },
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
         { label: "Search for job", path: "/SearchForJob" },
          { label: " Career areas", path: "/CareerArea" },
      ],
    },
    {
      title: "Life at Vividnex",
      items: [
        { label: "Working here", path: "/WorkingHere" },
          { label: "Benefits", path: "/Benefits" },
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
               {menu} <span className="arrow-down"></span>

              </div>

              {activeMenu === menu && (
                <div className="mega-menu">
                  {menu === "Services" && (
                    <Link to="/Service" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="mega-menu-heading">Services</h3>
                    </Link>
                  )}
                  {menu === "About" && (
                    <Link to="/About" onClick={() => setIsMobileMenuOpen(false)}>
                      <h3 className="mega-menu-heading">About </h3>
                    </Link>
                  )}
                    {menu === "Career" && (
                    <Link to="/CareerPage" onClick={() => setIsMobileMenuOpen(false)}>
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
          <Link to="/WhatWeThink" onClick={() => setIsMobileMenuOpen(false)}>
          What We Think
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
