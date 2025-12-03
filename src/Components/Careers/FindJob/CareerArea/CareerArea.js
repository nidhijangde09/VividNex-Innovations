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
      <h1 className='Careerhead'>Where will you lead?</h1>
      <p className='Careerheadcontent'>From industries to individuals, around the world, your ingenuity and innovation will leave a lasting mark</p>
     <h1 className='headings-1'>Areas of interest</h1>
      <ServiceHoverPanel />
  <h1 className='Careerhead'>Find your fit</h1>
      <p className='Careerheadcontent'>"No matter where you are in your career, Vividnex has an opportunity waiting for you."</p>
      <Opportunities />
<h1 className='Careerhead'>Stay connected</h1>
      <ConnectSection />

      <Footer />
    </div>
  )
}

export default CareerArea
