import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import ChemicalsStats from './ChemicalsStats';
import Softwareplatformsimg from '../../../../assets/images/Softwareplatforms.jpg';
import ChemicalsCardSection from './ChemicalsCardSection';
import ChemicalsSlider from './ChemicalsSlider';
import ChemicalsSection from './ChemicalsSection';
import ChemicalsGridHoverCard from './ChemicalsGridHoverCard';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import SoftwareplatformsCareer from './SoftwareplatformsCareer';


function Softwareplatforms() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={Softwareplatformsimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Software Platforms consulting</h1>
          <p>
            Change is the catalyst in the chemical industry. To capture emerging opportunities—from achieving net zero to launching breakthrough products—chemical companies must embrace innovation at every step.
          </p>
        </div>
      </div>
      <h1 className='headings'>Chemical industry now</h1>
      <ChemicalsStats />
      <h1 className='headings'>How to reinvent </h1>
      <ChemicalsCardSection />
      <h1 className='headings'>What’s trending </h1>
      <ChemicalsSlider />
      <h1 className='headings'>Awards and recognition</h1>
      <ChemicalsGridHoverCard />

      <SoftwareplatformsCareer />
      <Footer />
    </div>
  )
}

export default Softwareplatforms
