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
      <p className='Careerheadcontent1'>This is a place to grow, learn and connect. Everything that makes you who<br></br> you are is welcome here.</p>

      <button className="simple-btn">See Open Roles</button>
      <h1 className='Careerhead'>Whatever you want to do</h1>
      <Slider />
      <h1 className='Careerhead'>Wherever you are in your career</h1>
      <BankingHoverPanel />

      <h1 className='Careerhead'>You belong here</h1>
      <p className='Careerheadcontent'>No two people are the same. By prioritizing six areas of well-being, we foster<br></br> an inclusive environment where we all feel valued, seen and heard—we call<br></br> this Net Better Off.</p>
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
