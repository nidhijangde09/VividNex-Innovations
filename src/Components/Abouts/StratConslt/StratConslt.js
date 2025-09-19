import React from 'react'
import StrategyConsultingImg from '../../../assets/images/StrategyConsultingImg.jpg';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ReinventionSection from './ReinventionSection';
import CloudStats from './CloudStats';
import './StratConslt.css';
import MegaMenu from './MegaMenu';
import CareersSection from './CareersSection';

function StratConslt() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={StrategyConsultingImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1> Strategy Consulting Services</h1>
          <p>
            Embrace bold reinvention and join the forward-thinking few who are not only unlocking exceptional business growth, but also creating meaningful impact for society.
          </p>
        </div>
      </div>
      <ReinventionSection />

      <CloudStats />

      <h1 className='Careerhead1'>Reinventing across industries</h1>
      <p className='Careerheadcontent'>We believe reinvention requires industry-specific knowledge and insights to happen at the speed required today. </p>


      <MegaMenu />

      <h1 className='Careerhead1'>The advantage of a boundaryless <br></br>approach to reinvention</h1>
      <p className='Careerheadcontent'>The future enterprise requires fundamentally reinventing cross-functional processes and ways of working to streamline operations, enhance experience and accelerate innovation.</p>

      <CareersSection />
      <Footer />
    </div>
  )
}

export default StratConslt
