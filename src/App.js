import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WandSparkles } from "lucide-react";
import Home from './Components/Home/Home';
import Cloud from './Components/Service/Cloud/Cloud';
import Service from './Components/Service/What-we-do/Service';
import CustomerService from './Components/Service/CustomerService/CustomerService';

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
import Aerospaceanddefense from './Components/Service/1Industries/Aerospaceanddefense/Aerospace';
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
import HighTech from './Components/Service/1Industries/HighTech/HighTech';
import Industrial from './Components/Service/1Industries/Industrial/Industrial';
import Lifescience from './Components/Service/1Industries/LifeScience/Lifescience';
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
import WhoWeAre from './Components/Abouts/WhoWeAre/WhoWeAre';
import AwardsRecognition from './Components/Abouts/AwardsRecognition/AwardsRecognition';
import Industries from './Components/Abouts/Industries/Industries';
import Leadership from './Components/Abouts/Leadership/Leadership';
import Locations from './Components/Abouts/Locations/Locations';
import Sustainability from './Components/Abouts/Sustainability/Sustainability';
import Value from './Components/Abouts/Value/Value';
import MediaRelations from './Components/Abouts/MediaRelations/MediaRelations';
import BoardofDirectors from './Components/Abouts/BoardofDirectors/BoardofDirectors';
import InvestorRelation from './Components/Abouts/InvestorRelation/InvestorRelation';
import StratConslt from './Components/Abouts/StratConslt/StratConslt';
import Tech from './Components/Abouts/Tech/Tech';
import Operation from './Components/Abouts/Operation/Operation';
import Song from './Components/Abouts/Song/Song';
import Awards from './View/Awards/Awards';
import Partnersslidercards from './View/Partnersslidercards/Partnersslidercards';
import Partnersslidercards1 from './View/Partnersslidercards/Partnersslidercards1';
import Partnersslidercards2 from './View/Partnersslidercards/Partnersslidercards2';
import ResearchReportcard from './View/ResearchReportcard/ResearchReportcard';

import Modernization from './View/Modernization/Modernization';
import Modernization2 from './View/Modernization/Modernization2';
import Modernization3 from './View/Modernization/Modernization3';
import Modernization4 from './View/Modernization/Modernization4';

import ModernizationCS from './Components/Service/CustomerService/Modernization/ModernizationCS';
import Modernization2CS from './Components/Service/CustomerService/Modernization/Modernization2CS';
import Modernization3CS from './Components/Service/CustomerService/Modernization/Modernization3CS';
import Modernization4CS from './Components/Service/CustomerService/Modernization/Modernization4CS';

import ModernizationCY from './Components/Service/CyberSecurity/Modernization/ModernizationCY';
import Modernization2CY from './Components/Service/CyberSecurity/Modernization/Modernization2CY';
import Modernization3CY from './Components/Service/CyberSecurity/Modernization/Modernization3CY';
import Modernization4CY from './Components/Service/CyberSecurity/Modernization/Modernization4CY';

import ModernizationDA from './Components/Service/DataAi/Modernization/ModernizationDA';
import Modernization2DA from './Components/Service/DataAi/Modernization/Modernization2DA';
import Modernization3DA from './Components/Service/DataAi/Modernization/Modernization3DA';
import Modernization4DA from './Components/Service/DataAi/Modernization/Modernization4DA';

import ModernizationD from './Components/Service/Digital/Modernization/ModernizationD';
import Modernization2D from './Components/Service/Digital/Modernization/Modernization2D';
import Modernization3D from './Components/Service/Digital/Modernization/Modernization3D';
import Modernization4D from './Components/Service/Digital/Modernization/Modernization4D';

import ModernizationET from './Components/Service/EmergingTechnology/Modernization/ModernizationET';
import Modernization2ET from './Components/Service/EmergingTechnology/Modernization/Modernization2ET';
import Modernization3ET from './Components/Service/EmergingTechnology/Modernization/Modernization3ET';
import Modernization4ET from './Components/Service/EmergingTechnology/Modernization/Modernization4ET';

import ModernizationFM from './Components/Service/FinanceManagement/Modernization/ModernizationFM';
import Modernization2FM from './Components/Service/FinanceManagement/Modernization/Modernization2FM';
import Modernization3FM from './Components/Service/FinanceManagement/Modernization/Modernization3FM';
import Modernization4FM from './Components/Service/FinanceManagement/Modernization/Modernization4FM';

import ModernizationL from './Components/Service/Learning/Modernization/ModernizationL';
import Modernization2L from './Components/Service/Learning/Modernization/Modernization2L';
import Modernization3L from './Components/Service/Learning/Modernization/Modernization3L';
import Modernization4L from './Components/Service/Learning/Modernization/Modernization4L';


import ModernizationSC from './Components/Service/SalesCommerce/Modernization/ModernizationSC';
import Modernization2SC from './Components/Service/SalesCommerce/Modernization/Modernization2SC';
import Modernization3SC from './Components/Service/SalesCommerce/Modernization/Modernization3SC';
import Modernization4SC from './Components/Service/SalesCommerce/Modernization/Modernization4SC';


import ModernizationME from './Components/Service/MarketingExperience/Modernization/ModernizationME';
import Modernization2ME from './Components/Service/MarketingExperience/Modernization/Modernization2ME';
import Modernization3ME from './Components/Service/MarketingExperience/Modernization/Modernization3ME';
import Modernization4ME from './Components/Service/MarketingExperience/Modernization/Modernization4ME';

import ModernizationM from './Components/Service/Metaverse/Modernization/ModernizationM';
import Modernization2M from './Components/Service/Metaverse/Modernization/Modernization2M';
import Modernization3M from './Components/Service/Metaverse/Modernization/Modernization3M';
import Modernization4M from './Components/Service/Metaverse/Modernization/Modernization4M';

import PrivacyStatement from './Components/Footer/PrivacyStatement/PrivacyStatement';
import TermsConditions from './Components/Footer/TermsConditions/TermsConditions';
import AccessibilityStatement from './Components/Footer/AccessibilityStatement/AccessibilityStatement';
import CookiePolicy from './Components/Footer/CookiePolicy/CookiePolicy';
import Technology5 from './View/Modernization/Technology5';
import IndustryX from './Components/Abouts/IndustryX/IndustryX';
import DigitalE from './Components/Service/Digital/DigitalE';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cloud" element={<Cloud />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/CustomerService" element={<CustomerService />} />
        <Route path="/CyberSecurity" element={<CyberSecurity />} />
        <Route path="/DigitalE" element={<DigitalE />} />
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
        <Route path="/ConsumerService" element={<ConsumerService />} />
        <Route path="/Energy" element={<Energy />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/HighTech" element={<HighTech />} />
        <Route path="/Industrial" element={<Industrial />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/Privateequity" element={<Privateequity />} />
        <Route path="/Lifescience" element={<Lifescience />} />
        <Route path="/Naturalresources" element={<Naturalresources />} />
        <Route path="/Publicsector" element={<Publicsector />} />
        <Route path="/Retail" element={<Retail />} />
        <Route path="/Softwareplatforms" element={<Softwareplatforms />} />
        <Route path="/Utilities" element={<Utilities />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/SearchForJob" element={<SearchForJob />} />
        <Route path="/CareerArea" element={<CareerArea />} />
        <Route path="/WorkingHere" element={<WorkingHere />} />
        <Route path="/Benefits" element={<Benefits />} />
        <Route path="/CareerBlog" element={<CareerBlog />} />
        <Route path="/WorkingEnvironment" element={<WorkingEnvironment />} />
        <Route path="/HiringJourney" element={<HiringJourney />} />
        <Route path="/Protips" element={<Protips />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/AwardsRecognition" element={<AwardsRecognition />} />
        <Route path="/Industries" element={<Industries />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Sustainability" element={<Sustainability />} />
        <Route path="/Value" element={<Value />} />
        <Route path="/MediaRelations" element={<MediaRelations />} />
        <Route path="/InvestorRelation" element={<InvestorRelation />} />
        <Route path="/BoardofDirectors" element={<BoardofDirectors />} />
        <Route path="/StratConslt" element={<StratConslt />} />
        <Route path="/Tech" element={<Tech />} />
        <Route path="/Operation" element={<Operation />} />
        <Route path="/Song" element={<Song />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/Partnersslidercards" element={<Partnersslidercards />} />
        <Route path="/Partnersslidercards1" element={<Partnersslidercards1 />} />
        <Route path="/Partnersslidercards2" element={<Partnersslidercards2 />} />
        <Route path="/ResearchReportcard" element={<ResearchReportcard />} />

        <Route path="/Modernization" element={<Modernization />} />
        <Route path="/Modernization2" element={<Modernization2 />} />
        <Route path="/Modernization3" element={<Modernization3 />} />
        <Route path="/Modernization4" element={<Modernization4 />} />

        <Route path="/ModernizationCS" element={<ModernizationCS />} />
        <Route path="/Modernization2CS" element={<Modernization2CS />} />
        <Route path="/Modernization3CS" element={<Modernization3CS />} />
        <Route path="/Modernization4CS" element={<Modernization4CS />} />

        <Route path="/ModernizationCY" element={<ModernizationCY />} />
        <Route path="/Modernization2CY" element={<Modernization2CY />} />
        <Route path="/Modernization3CY" element={<Modernization3CY />} />
        <Route path="/Modernization4CY" element={<Modernization4CY />} />

        <Route path="/ModernizationDA" element={<ModernizationDA />} />
        <Route path="/Modernization2DA" element={<Modernization2DA />} />
        <Route path="/Modernization3DA" element={<Modernization3DA />} />
        <Route path="/Modernization4DA" element={<Modernization4DA />} />

        <Route path="/ModernizationD" element={<ModernizationD />} />
        <Route path="/Modernization2D" element={<Modernization2D />} />
        <Route path="/Modernization3D" element={<Modernization3D />} />
        <Route path="/Modernization4D" element={<Modernization4D />} />


        <Route path="/ModernizationET" element={<ModernizationET />} />
        <Route path="/Modernization2ET" element={<Modernization2ET />} />
        <Route path="/Modernization3ET" element={<Modernization3ET />} />
        <Route path="/Modernization4ET" element={<Modernization4ET />} />

        <Route path="/ModernizationFM" element={<ModernizationFM />} />
        <Route path="/Modernization2FM" element={<Modernization2FM />} />
        <Route path="/Modernization3FM" element={<Modernization3FM />} />
        <Route path="/Modernization4FM" element={<Modernization4FM />} />

        <Route path="/ModernizationL" element={<ModernizationL />} />
        <Route path="/Modernization2L" element={<Modernization2L />} />
        <Route path="/Modernization3L" element={<Modernization3L />} />
        <Route path="/Modernization4L" element={<Modernization4L />} />

        <Route path="/ModernizationSC" element={<ModernizationSC />} />
        <Route path="/Modernization2SC" element={<Modernization2SC />} />
        <Route path="/Modernization3SC" element={<Modernization3SC />} />
        <Route path="/Modernization4SC" element={<Modernization4SC />} />


        <Route path="/ModernizationME" element={<ModernizationME />} />
        <Route path="/Modernization2ME" element={<Modernization2ME />} />
        <Route path="/Modernization3ME" element={<Modernization3ME />} />
        <Route path="/Modernization4ME" element={<Modernization4ME />} />


        <Route path="/ModernizationM" element={<ModernizationM />} />
        <Route path="/Modernization2M" element={<Modernization2M />} />
        <Route path="/Modernization3M" element={<Modernization3M />} />
        <Route path="/Modernization4M" element={<Modernization4M />} />


        <Route path="/PrivacyStatement" element={<PrivacyStatement />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/AccessibilityStatement" element={<AccessibilityStatement />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/Technology5" element={<Technology5 />} />
        <Route path="/IndustryX" element={<IndustryX />} />
      </Routes>
    </Router>
  );
};

export default App;