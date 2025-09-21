import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaGlobe } from "react-icons/fa"; 
import vividlogo from './vivivdlogo.png';
import Service from '../Service/What-we-do/Service';
import Home from '../Home/Home';
import CustomerService from '../Service/CustomerService/CustomerService';
import Cybersecurity from '../Service/CyberSecurity/CyberSecurity';
import Dataai from '../Service/DataAi//Dataai';
import DigitalE from '../Service/Digital/DigitalE';
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
import Benefits from '../Careers/LifeAtVividnex/Benefits/Benefits';
import CareerBlog from '../Careers/LifeAtVividnex/CareerBlog/CareerBlog';
import Industrial from '../Service/1Industries/Industrial/Industrial';
import Lifescience from '../Service/1Industries/LifeScience/Lifescience';
import Naturalresources from '../Service/1Industries/Naturalresources/Naturalresources';
import Privateequity  from '../Service/1Industries/Privateequity/Privateequity';
import Insurance from '../Service/1Industries/Insurance2/Insurance';
import Publicsector from '../Service/1Industries/Publicsector/Publicsector';
import Retail from '../Service/1Industries/Retail/Retail';
import Softwareplatforms from '../Service/1Industries/Softwareplatforms/Softwareplatforms';
import Utilities from '../Service/1Industries/Utilities/Utilities';
import Travel from '../Service/1Industries/Travel/Travel';
import SearchForJob from '../Careers/FindJob/SearchForJob/SearchForJob';
import CareerArea from '../Careers/FindJob/CareerArea/CareerArea';
import WorkingHere from '../Careers/LifeAtVividnex/WorkingHere/WorkingHere';
import WorkingEnvironment from '../Careers/LifeAtVividnex/WorkingEnvironment/WorkingEnvironment';
import HiringJourney from '../Careers/HowWeAre/HiringJourney/HiringJourney';
import Protips from '../Careers/HowWeAre/Protips/Protips';
import Career from '../Careers/Career';
import WhoWeAre from '../Abouts/WhoWeAre/WhoWeAre';
import AwardsRecognition from '../Abouts/AwardsRecognition/AwardsRecognition';
import Industries from '../Abouts/Industries/Industries';
import Leadership from '../Abouts/Leadership/Leadership';
import Locations from '../Abouts/Locations/Locations';
import Sustainability from '../Abouts/Sustainability/Sustainability';
import Value from '../Abouts/Value/Value';
import InvestorRelation from '../Abouts/InvestorRelation/InvestorRelation';
import MediaRelations from '../Abouts/MediaRelations/MediaRelations';
import BoardofDirectors from '../Abouts/BoardofDirectors/BoardofDirectors';
import StratConslt from '../Abouts/StratConslt/StratConslt';
import Tech from '../Abouts/Tech/Tech';
import Operation from '../Abouts/Operation/Operation';
import IndustryX from '../Abouts/IndustryX/IndustryX';
import Song from '../Abouts/IndustryX/IndustryX';
// ... rest of your code stays same ...


const megaMenuData = {
  Services: [
    {
      title: "Capabilities",
      items: [
        { label: "Cloud", path: "/cloud" },
        { label: "Customer Service", path: "/CustomerService" },
        { label: "Cybersecurity", path: "/Cybersecurity" },
        { label: "Data and AI", path: "/Dataai" },
        { label: "Digital engineering & manufacturing", path: "/DigitalE "},
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
        { label: "Awards & Recognition", path: "/AwardsRecognition" },
        { label: "Corpoprate Sustainability", path: "/Sustainability" },
        { label: "Industry Analyst Recognition", path: "/Industries" },
        { label: "Leaders", path: "/Leadership" },
        { label: "Location", path: "/Locations" },
        { label: "360° Value Report", path: "/Value" },
        
      ],
    },
    {
      title: "Media & Investor",
      items: [
        { label: "Media Relations", path: "/MediaRelations" },
        { label: "Investor Relation", path: "/InvestorRelation" },
        { label: "Board of Directors", path: "/BoardofDirectors" },
      ],
    },
    {
      title: "How we serve",
      items: [
        { label: "Strategy & consulting", path: "/StratConslt" },
        { label: "Technology", path: "/Tech" },
        { label: "Operation", path: "/Operation" },
        { label: "Industry X", path: "/IndustryX" },
        { label: "Song", path: "/Song" },
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

          { label: "Work environment", path: "/WorkingEnvironment" },

          { label: "Career blog", path: "/CareerBlog" },
      ],
    },
      {
      title: "How we hire",
      items: [
        { label: "Hiring journey", path: "/HiringJourney" },
          { label: "Pro tips", path: "/Protips" },
         
      ],
    },
  ],
};


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMegaMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <Link className="logo" to="/">
        <img src={vividlogo} alt="Logo" />
      </Link>

      {/* Center Nav Items */}
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
                    <Link
                      to="/Service"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="mega-menu-heading">Services</h3>
                    </Link>
                  )}
                  {menu === "About" && (
                    <Link
                      to="/WhoWeAre"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="mega-menu-heading">About</h3>
                    </Link>
                  )}
                  {menu === "Career" && (
                    <Link
                      to="/Career"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <h3 className="mega-menu-heading">Career</h3>
                    </Link>
                  )}
                  {megaMenuData[menu].map((section, index) => (
                    <div className="mega-column" key={index}>
                      {section.title && <h4>{section.title}</h4>}
                      <ul>
                        {section.items.map((item, i) => (
                          <li key={i}>
                            <Link
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
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

   {/* Right Icons (Search + Globe) */}
<div className="right-icons">
  <Link to="/search" className="search-icon">
    <FaSearch />
  </Link>
  <Link to="/global" className="globe-icon">
    <FaGlobe />
  </Link>
</div>


      {/* Hamburger for mobile */}
      <div
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;


