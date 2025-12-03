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
      <h1 className='Careerheads1'>Work at the Heart of Change</h1>
      <p className='Careerheadcontents1'>At VividNex, you’ll have the opportunity to grow, learn, and make an impact. Here, bringing your true self isn’t just accepted—it’s celebrated as the driving force behind innovation and meaningful change.</p>

      <button className="simple-btn">See Open Roles</button>
      <h1 className='Careerhead'>Do what you want. Explore your potential.</h1>
      <Slider />
      <h1 className='Careerhead'>Wherever you are in your career</h1>
      <BankingHoverPanel />

      <h1 className='Careerhead'>You Belong Here</h1>
      <p className='Careerheadcontent'>At VividNex, every individual is unique. By focusing on six key areas of well-being, we create an inclusive environment where everyone feels valued, recognized, and empowered—we call this Net Better Off.</p>
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
