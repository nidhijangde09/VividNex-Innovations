import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import ChemicalsStats from './ChemicalsStats'
import ContentTabs from './ContentTabs';
import ChemicalsSlider from './ChemicalsSlider';
import ChemicalsSection from './ChemicalsSection';
import ChemicalsGridHoverCard from './ChemicalsGridHoverCard';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import CommunicationMediaimg from '../../../../assets/images/CommunicationsMediaImg.jpg'

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
      <h1 className='headings-1'>Communication Media now</h1>
      <ChemicalsStats />
      <ContentTabs />
      <ChemicalsSlider />
      < ChemicalsGridHoverCard  />
      <ChemicalsSection />
       
      <Footer />
    </div>
  )
}

export default CommunicationMedia
