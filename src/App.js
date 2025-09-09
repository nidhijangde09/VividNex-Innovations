import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cloud from './Components/Service/Cloud/Cloud';

import Service from './Components/Service/What-we-do/Service';
import CustomerService from './Components/Service/CustomerService/CustomerService';
import DigitalEngeneer from './Components/Service/DigitalE/DigitalEngeneer';
import Dataai from './Components/Service/DataAi/Dataai';
import Ecosystem from './Components/Service/Ecosystem/Ecosystem';
import EmergingTechnology from './Components/Service/EmergingTechnology/EmergingTechnology';
import FinanceManagement from './Components/Service/FinanceManagement/FinanceManagement';
import InfrastructureCapital from './Components/Service/InfrastructureCapitalProjects/InfrastructureCapital';
import Learning from './Components/Service/Learning/Learning';
import ManagedServices from './Components/Service/ManagedServices/ManagedServices';
import MarketingExperience from './Components/Service/MarketingExperience/MarketingExperience';
import TechnologyTransformation from './Components/Service/TechnologyTransformation/TechnologyTransformation';
import Metaverse from './Components/Service/Metaverse/Metaverse';
import SalesCommerce from './Components/Service/SalesCommerce/SalesCommerce';
import StrategyConsulting from './Components/Service/StrategyConsulting/StrategyConsulting';
import SustainabilityConsulting from './Components/Service/SustainabilityConsulting/SustainabilityConsulting';
import SupplyChain from './Components/Service/SupplyChain/SupplyChain';
import TalentOrganization from './Components/Service/TalentOrganization/TalentOrganization';
import WhatWeThink from './Components/WhatWeThink/WhatWeThink';
import Aerospaceanddefense from './Components/Service/1Industries/Aerospaceanddefense/Aerospace'
import './App.css';
import CyberSecurity from './Components/Service/CyberSecurity/CyberSecurity';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Automotive from './Components/Service/1Industries/Automotive/Automotive';
import Banking from './Components/Service/1Industries/Banking/Banking';
import Capital from './Components/Service/1Industries/Capital/Capital';
import Chemicals from './Components/Service/1Industries/Chemicals/Chemicals';
import ConsumerService from './Components/Service/1Industries/ConsumerGoods&Service/ConsumerService';
import CommunicationMedia from './Components/Service/1Industries/CommunicationMedia/CommunicationMedia';
import Energy from './Components/Service/1Industries/Energy/Energy';
import Health from './Components/Service/1Industries/Health/Health';
import HighTech from './Components/Service/1Industries/HighTech/HighTech'
import Benefits from './Components/Career/LifeAtVividnex/Benefit/Benefits';
import CareerBlog from './Components/Career/LifeAtVividnex/CareerBlog/CareerBlog';

import HighTech from './Components/Service/1Industries/HighTech/HighTech';
import Industrial from './Components/Service/1Industries/Industrial/Industrial';
import Lifescience from './Components/Service/1Industries/LifeScience/Lifescience'
import Naturalresources from './Components/Service/1Industries/Naturalresources/Naturalresources';
import Publicsector from './Components/Service/1Industries/Publicsector/Publicsector';
import Retail from './Components/Service/1Industries/Retail/Retail';
import Softwareplatforms from './Components/Service/1Industries/Softwareplatforms/Softwareplatforms';
import Travel from './Components/Service/1Industries/Travel/Travel';
import Utilities from './Components/Service/1Industries/Utilities/Utilities';
import Insurance from './Components/Service/1Industries/Insurance2/Insurance';
import Privateequity from './Components/Service/1Industries/Privateequity/Privateequity';
import SearchForJob from './Components/Careers/FindJob/SearchForJob/SearchForJob';
import CareerArea from './Components/Careers/FindJob/CareerArea/CareerArea';
import WorkingHere from './Components/Careers/LifeAtVividnex/WorkingHere/WorkingHere';
import Benefits from './Components/Careers/LifeAtVividnex/Benefits/Benefits';
import WorkingEnvironment from './Components/Careers/LifeAtVividnex/WorkingEnvironment/WorkingEnvironment';
import CareerBlog from './Components/Careers/LifeAtVividnex/CareerBlog/CareerBlog';
import HiringJourney from './Components/Careers/HowWeAre/HiringJourney/HiringJourney';
import Protips from './Components/Careers/HowWeAre/Protips/Protips';
import Career from './Components/Careers/Career';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cloud" element={<Cloud />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/CustomerService" element={<CustomerService />} />
        <Route path="/CyberSecurity" element={<CyberSecurity />} />
        <Route path="/DigitalEngeneering " element={<DigitalEngeneer />} />
        <Route path="/Dataai" element={<Dataai />} />
        <Route path="/Ecosystem" element={<Ecosystem />} />
        <Route path="/EmergingTechnology" element={<EmergingTechnology />} />
        <Route path="/FinanceManagement" element={<FinanceManagement />} />
        <Route path="/InfrastructureCapital" element={<InfrastructureCapital />} />
        <Route path="/Learning" element={<Learning />} />
        <Route path="/ManagedServices" element={<ManagedServices />} />
        <Route path="/MarketingExperience" element={<MarketingExperience />} />
        <Route path="/Metaverse" element={<Metaverse />} />
        <Route path="/SalesCommerce" element={<SalesCommerce />} />
        <Route path="/StrategyConsulting" element={<StrategyConsulting />} />
        <Route path="/SupplyChain" element={<SupplyChain />} />
        <Route path="/SustainabilityConsulting" element={<SustainabilityConsulting />} />
        <Route path="/TalentOrganization" element={<TalentOrganization />} />
        <Route path="/TechnologyTransformation" element={<TechnologyTransformation />} />
        <Route path="/Aerospace" element={<Aerospaceanddefense />} />
        <Route path="/Automotive" element={<Automotive />} />
        <Route path="/WhatWeThink" element={<WhatWeThink />} />
        <Route path="/Banking" element={<Banking />} />
        <Route path="/Capital" element={<Capital />} />
        <Route path="/Chemicals" element={<Chemicals />} />
        <Route path="/CommunicationMedia" element={<CommunicationMedia />} />
        < Route path="/ConsumerService" element={<ConsumerService />} />
        < Route path="/Energy" element={<Energy />} />
        < Route path="/Health" element={<Health />} />
        < Route path="/HighTech" element={<HighTech />} />
        < Route path="/Industrial" element={<Industrial />} />
        < Route path="/Insurance " element={< Insurance />} />
        < Route path="/Privateequity" element={<Privateequity />} />
        < Route path="/Lifescience" element={<Lifescience />} />
        < Route path="/Naturalresources" element={<Naturalresources />} />
        < Route path="/Publicsector" element={<Publicsector />} />
        < Route path="/Retail" element={<Retail />} />
        < Route path="/Softwareplatforms" element={<Softwareplatforms />} />
        < Route path="/Utilities" element={<Utilities />} />
        < Route path="/Travel" element={<Travel />} />
        < Route path="/SearchForJob" element={<SearchForJob />} />
        < Route path="/CareerArea" element={<CareerArea />} />
        < Route path="/WorkingHere" element={<WorkingHere />} />
        < Route path="/Benefits" element={<Benefits />} />

        < Route path="/CareerBlog" element={<CareerBlog />} />

        < Route path="/WorkingEnvironment" element={<WorkingEnvironment />} />
        < Route path="/CareerBlog" element={<CareerBlog />} />
        < Route path="/HiringJourney" element={<HiringJourney />} />
         < Route path="/Protips" element={<Protips />} />
          < Route path="/Career" element={<Career />} />

      </Routes >
    </Router >
  );
};

export default App;
