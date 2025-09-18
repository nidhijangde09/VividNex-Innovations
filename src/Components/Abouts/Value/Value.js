import React from 'react'
import './Value.css';
import Navbar from '../../Navbar/Navbar';
import ReportsGrid from './ReportsGrid';
import BankingHoverPanel from './BankingHoverPanel';
import DataAIGridHoverCard from './DataAIGridHoverCard';
import Footer from '../../Footer/Footer';
import AccordionSection from './AccordionSection';

function Value() {
  return (
    <div>
      <Navbar />

      <h1 className='Careerhead'>Every day, we build comprehensive value.</h1>
      <p className='Careerheadcontent'>Explore the positive change we bring to our clients, people, shareholders, <br></br>partners, and communities.</p>

      <h1 className='Careerhead1'>What is comprehensive Value at Vividnex</h1>
      <p className='Careerheadcontent1'>At Vividnex, we define 360° Value as delivering not only strong business outcomes but also meaningful impact across every dimension of growth. We partner with our clients to unlock innovation, strengthen digital capabilities, and drive sustainable transformation. Beyond business performance, we focus on fostering inclusion and diversity, enabling continuous reskilling and upskilling, supporting sustainability goals, and creating experiences that inspire both our clients’ people and their customers.</p>
  
  <div className='ValueContainer'>
    <h1>Stories of comprehensive value in action </h1>
    <p>Learn more about 360° value in practice by reviewing our case studies.</p>

  </div>
  
  <ReportsGrid />
  
<h1 className='Careerhead'>Innovation Frameworks</h1>
      <p className='Careerheadcontent'>Explore how our innovation-driven frameworks empower businesses with future-ready solutions, breakthrough technologies, and transformative growth.</p>
  <BankingHoverPanel />
<h1 className='Careerhead'>Innovation Frameworks</h1>
  <DataAIGridHoverCard />


    <h1 className='Careerhead1'>Our innovation approach</h1>
      <p className='Careerheadcontent1'>Curiosity and creativity drive us to push boundaries, ensuring impactful solutions and measurable progress for our stakeholders.</p>
    
    <AccordionSection />
    
    <Footer />
    </div>

  )
}

export default Value;
