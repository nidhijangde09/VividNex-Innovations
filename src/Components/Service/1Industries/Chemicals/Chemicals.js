import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import ChemicalsStats from './ChemicalsStats';
import chemicalimg from '../../../../assets/images/chemicalimg.jpg';
import ChemicalsCardSection from './ChemicalsCardSection';
import ChemicalsSlider from './ChemicalsSlider';
import ChemicalsSection from './ChemicalsSection';
import ChemicalsGridHoverCard from './ChemicalsGridHoverCard';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import ChemicalsCareer from './ChemicalsCareer';
function Chemicals() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={chemicalimg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Chemical Consulting Services</h1>
          <p>
           Innovation is the catalyst for transformation in the chemical industry. To seize emerging opportunities—from net-zero goals to groundbreaking products—leaders must embed innovation across the entire value chain.
          </p>
        </div>
      </div>
      <h1 className='headings'>Chemical industry </h1>
      <ChemicalsStats />
 <h1 className='headings'>Innovate with Chemical</h1>
      <ChemicalsCardSection />
 <h1 className='headings'>What’s trending </h1>
      <ChemicalsSlider />
 <h1 className='headings'>Awards and recognition</h1>
      <ChemicalsGridHoverCard />

    <ChemicalsCareer />
      <Footer />
    </div>
  )
}

export default Chemicals ;
