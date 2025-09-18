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
      <h1 className='headings-1'>Chemical industry now</h1>
      <ChemicalsStats />
 <h1 className='headings-1'>How to reinvent </h1>
      <ChemicalsCardSection />
 <h1 className='headings-1'>What’s trending </h1>
      <ChemicalsSlider />
 <h1 className='headings-1'>Awards and recognition</h1>
      <ChemicalsGridHoverCard />
 <h1 className='headings-1'>Our leaders</h1>
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

export default Softwareplatforms
