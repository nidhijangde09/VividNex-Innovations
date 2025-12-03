import React from 'react'
import './Tech.css';
import Navbar from '../../Navbar/Navbar';
import Techimg from '../../../assets/images/Tech.jpg';
import QuoteSection from './QuoteSection';
import ServiceHoverPanel from './ServiceHoverPanel';
import AiReinvention from './AiReinvention';
import AISlider from './AISlider';
import Footer from '../../Footer/Footer';
import Slider from './Slider';


function Tech() {
  return (
    <div>
      <Navbar />
      <div className='techhead'>
        <img src={Techimg} alt="Cloud consulting illustration" />
        <h1>Technology is at the <br></br>heart of change</h1>

      </div>
      <h1 className='Careerhead1'>Trusted to innovate and execute</h1>
      <p className='Careerheadcontent'>We help organizations worldwide use technology to reinvent how they work and operate. With global expertise, ever-evolving capabilities and deep industry knowledge, we solve challenges to unlock new possibilities and lasting growth. Together, we’ll make your vision a reality—no matter where you are on your journey.</p>

      <QuoteSection/>

      <AiReinvention />
<h1 className='headings-1'>Our Work</h1>
   <p className='Careerheadcontent'>Transforming industries and solving the world’s most complex business challenges through the power of technology and innovation.</p>
      <Slider />
      <h1 className='headings-1'> areas we support</h1>
      <ServiceHoverPanel />
      <h1 className='headings-1'>What’s next in Data & AI ? </h1>
      <AISlider />

      <Footer />
    </div>
  )
}

export default Tech
