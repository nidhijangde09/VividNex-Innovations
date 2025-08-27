import React from 'react'
import './CareerArea.css';
import Navbar from '../../../Navbar/Navbar';
import ServiceHoverPanel from './ServiceHoverPanel';
import Opportunities  from './Opportunities';
import ConnectSection from './ConnectSection';
import Footer from '../../../Footer/Footer';




function CareerArea() {
  return (
    <div>
        <Navbar />
      <h1 className='Careerhead'>Where will you rise?</h1>
      <p className='Careerheadcontent'>From industries to individuals, across continents, you’ll apply ingenuity and <br></br>innovation to make lasting impact.</p>
     <h1 className='headings-1'>Areas of interest</h1>
      <ServiceHoverPanel />
  <h1 className='Careerhead'>Find your fit</h1>
      <p className='Careerheadcontent'>No matter where you are in your career, there’s an opportunity waiting for you here.</p>
      <Opportunities />
<h1 className='Careerhead'>Stay connected</h1>
      <ConnectSection />

      <Footer />
    </div>
  )
}

export default CareerArea
