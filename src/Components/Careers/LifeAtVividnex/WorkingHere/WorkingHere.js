import React from 'react'
import work from '../../../../assets/images/work.jpg';
import Slider from './Slider';
import DataAIGridHoverCard from './DataAIGridHoverCard';
import ValuesSection from './ValuesSection';
import GrowthSection from './GrowthSection';
import ConnectSection from './ConnectSection';
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Navbar/Navbar';
import Value from '../../../Abouts/Value/Value';

function WorkingHere() {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <div className="service-image">
          <img src={work} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Here, possibilities have no limits.</h1>
          <p>
            Be part of the change. Drive impact, deliver value, and help build a sustainable, connected future.
          </p>
        </div>
      </div>
      <h1 className='Careerhead'>Work with reach</h1>
      <p className='Careerheadcontent'>From industries to individuals, across continents, you’ll apply ingenuity and <br></br>innovation to make lasting impact.</p>
      <Slider />
      <h1 className='Careerhead'>From our I&D actions to our ethical approach to business,Accenture is recognized around the world.</h1>
      <DataAIGridHoverCard />
      <h1 className='Careerhead'>Work with purpose</h1>
      <p className='Careerheadcontent'>Be part of creating positive change and making the world better for our people, our clients, and the communities where we live and work.</p>
      <a href="/Value" className="read-more">
        &nbsp; &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;  View all commitments ➔
      </a>


      <ValuesSection />
      <h1 className='Careerhead'>Become your next best self</h1>
      <p className='Careerheadcontent'>We value continuous learning and curiosity because there’s always more to know, from new technologies to skills that you’ll need as your career advances.</p>
      <GrowthSection />
      <h1 className='Careerhead'>Stay connected</h1>
      <ConnectSection />
      <Footer />
    </div>
  )
}

export default WorkingHere;




