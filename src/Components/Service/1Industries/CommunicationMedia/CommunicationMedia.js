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
           Change is the catalyst in the chemical industry. To capture emerging opportunities—from achieving net zero to launching breakthrough products—chemical companies must embrace innovation at every step.
          </p>
        </div>
      </div>
      <h1 className='headings-1'>Communication Media now</h1>
      <ChemicalsStats />
      <ContentTabs />
      <ChemicalsSlider />
      < ChemicalsGridHoverCard  />
      <ChemicalsSection />
        <div className='head-container-6'>
                    <img src={customer3} alt="Logo" className='head-2-img' />
                    <h1>Chemicals careers</h1>
                    <p>
                     Harness innovation-first thinking to enable chemical companies to achieve sustainable growth.
                    </p>
                    <Link to="/" className="learn-more-btn">Learn More</Link>
                  </div>
      <Footer />
    </div>
  )
}

export default CommunicationMedia
