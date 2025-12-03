import React from 'react'
import "./Home.css";
import Navbar from '../Navbar/Navbar';
import h2 from './h2.jpg';
import CardGrid from './CardGrid';
import Slider from './Slider';
import Footer from '../Footer/Footer';
import HoverCards from './HoverCards';
import MEETIMG from '../../assets/images/MEET.jpg';
import NewsSlider from './NewsSlider';
import QuoteSection from './QuoteSection';
import Career from '../Careers/Career';

export default function Home() {
  return (

    <div>
      <Navbar />
      <div className="head-container">
        <img src={h2} alt="Logo" className="home1-img" />

        {/* Flex wrapper for text + content */}
        <div className="head-text-wrapper">
          <h1 className="loading-text">
            <span>Inspiring Digital</span> <br />
            <span>Excellence</span> <br />

          </h1>

          <p className="head1-content">
            The technology we use, the ideas we share, <br />
            the shows that inspire, the meals we enjoy, <br />
            the styles we wear, the roads we travel, <br />
            the homes we build, the dreams we chase, <br />
            the future we shape—together, <br />
            we can reimagine everything.
          </p>
        </div>
      </div>

      < CardGrid />

      <div>
        <h2 className='value'> Integrated Values</h2>
        <p className='value-content' >Each day, we drive transformation and deliver value<br></br>
          to our stakeholders across the globe.</p>
      </div>
      <Slider />

    

      <div className="award-section">
        <h1 className="g-name">Global recognition and
          <br></br> awards</h1>
      </div>
      <HoverCards />

      <div className="cloud-section">
        <div className="cloud-image">
          <img src={MEETIMG} alt="Cloud illustration" />
        </div>
        <div className="cloud-text">
          <p>Career</p>
          <h1>Shape your future at the forefront of innovation.</h1>
          <p>
            This is your moment—let your creativity, curiosity, and bold ideas lead the way.
          </p>
          <a href="/Career" className="read-more">
            Read more ➡
          </a>
        </div>
      </div>

      <NewsSlider />
      <Footer />
    </div>

  )
}
