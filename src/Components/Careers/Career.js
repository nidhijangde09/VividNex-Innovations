import React from 'react'
import './Career.css';
import Navbar from '../Navbar/Navbar';
import Slider from './Slider';
import BankingHoverPanel from './BankingHoverPanel';
import WellBeingSection from './WellBeingSection';
import Beign from './Beign';
import CloudStats from './CloudStats';
import ConnectSection from './ConnectSection';
import Footer from '../Footer/Footer';

function Career() {
  return (
    <div>
      <Navbar />
      <h1 className='Careerhead1'>Work at the heart<br></br> of change</h1>
      <p className='Careerheadcontent1'>Here, you can grow, learn, and connect—bringing your whole <br></br>self is not just welcome, it’s celebrated..</p>

      <button className="simple-btn">See Open Roles</button>
      <h1 className='Careerhead'>Do what you want. Explore your potential.</h1>
      <Slider />
      <h1 className='Careerhead'>Wherever you are in your career</h1>
      <BankingHoverPanel />

      <h1 className='Careerhead'>You belong here</h1>
      <p className='Careerheadcontent'>Everyone is unique. Our six areas of well-being ensure an inclusive <br></br>environment where all feel valued, seen, and heard—our Net Better Off promise.</p>
      <WellBeingSection />
      <Beign />

      <h1 className='Careerhead'>We are everywhere</h1>
      <CloudStats />

      <h1 className='Careerhead'>Stay connected</h1>
      <ConnectSection />

      <Footer />
    </div>
  )
}

export default Career
