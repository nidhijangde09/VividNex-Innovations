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
            Drive impact. Deliver value. Build a sustainable, connected future.
          </p>
        </div>
      </div>
      <h1 className='Careerhead'>Work with reach</h1>
      <p className='Careerheadcontent'>Across continents and industries, your ingenuity and innovation drive meaningful, lasting change</p>
      <Slider />
      <h1 className='Careerhead'>Vividnex is celebrated globally for its commitment to inclusion, diversity, and ethical business practices.</h1>
      <DataAIGridHoverCard />
      <h1 className='Careerhead'>Work with purpose</h1>
      <p className='Careerheadcontent'>Drive change. Improve lives—for our people, clients, and communities worldwide.</p>
      <a href="/Value" className="read-more">
        &nbsp; &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;  View all commitments ➔
      </a>


      <ValuesSection />
      <h1 className='Careerhead'>Become your next best self</h1>
      <p className='Careerheadcontent'>We value continuous learning and curiosity—there’s always more to explore, from emerging technologies to the skills you’ll need to advance your career..</p>
      <GrowthSection />
      <h1 className='Careerhead'>Stay connected</h1>
      <ConnectSection />
      <Footer />
    </div>
  )
}

export default WorkingHere;




