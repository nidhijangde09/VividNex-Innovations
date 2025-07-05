import React from 'react'
import "./Home.css";
import Navbar from '../Navbar/Navbar';
import h2 from './h2.jpg';
import CardGrid from './CardGrid';
import Slider from './Slider';
import Footer from '../Footer/Footer';
import HoverCards from './HoverCards';
export default function Home() {
  return (

    <div>
      <Navbar />
      <div className='head-container'>
        <img src={h2} alt="Logo" className='home1-img' />
        <h1 className='loading-text'><span>REINVENT WHAT</span> <br></br>
          &nbsp; &nbsp;&nbsp;  &nbsp;  <span>YOUR BUSINESS</span> <br></br>
          <span> COULD BE</span></h1>
        <p className='head1-content' >The technology we use, the ideas we share,<br></br>
          the shows that inspire, the meals we enjoy,<br></br>
          the styles we wear, the roads we travel, <br></br>
          the homes we build, the dreams we chase, <br></br>
          the future we shape—together, <br></br>
          we can reimagine everything.</p>
      </div>
      < CardGrid />

      <div>
        <h2 className='value'>360° VALUE</h2>
        <p className='value-content' >Each day, we drive transformation and deliver value<br></br>
          to our stakeholders across the globe.</p>
      </div>
      <Slider />
      <div className="award-section">
        <h1 className="g-name">Global recognition and
          <br></br> awards</h1>
      </div>
      <HoverCards />

      <Footer />
    </div>

  )
}
