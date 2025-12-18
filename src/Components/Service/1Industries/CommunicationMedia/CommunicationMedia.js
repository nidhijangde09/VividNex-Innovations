import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import CapitalStats from './CapitalStats'
import ContentTabs from './ContentTabs';
import ChemicalsSlider from './ChemicalsSlider';
import ChemicalsGridHoverCard from './ChemicalsGridHoverCard';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import CommunicationMediaimg from '../../../../assets/images/CommunicationsMediaImg.jpg'
import CommunicationMediaCareer from './CommunicationMediaCareer';
function CommunicationMedia() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={CommunicationMediaimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Communication Media consulting</h1>
          <p>
            "Change is the catalyst driving the chemical industry forward. To seize emerging opportunities—ranging from achieving net zero emissions to developing breakthrough products—chemical companies must embed innovation at every stage of their journey."</p>
        </div>
      </div>
      <h1 className='headings-1'>Communication Media </h1>
      <CapitalStats />
<h1 className='headings-1'>How to reinvent communications and media</h1>
      <ContentTabs />
  <h1 className='headings-1'>What’s trending in communications & media </h1>
      <ChemicalsSlider />
  <h1 className='headings-1'>Awards & recognition</h1>
      < ChemicalsGridHoverCard />
  
      <CommunicationMediaCareer />
      <Footer />
    </div>
  )
}

export default CommunicationMedia
