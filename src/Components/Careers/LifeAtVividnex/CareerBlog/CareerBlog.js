import React from 'react'
import "./CareerBlog.css";
import Navbar from "../../../Navbar/Navbar";
import CareerBlogimg from "../../../../assets/images/CareerBlogimg.jpg";
import FlexConnect from './FlexConnect';
import CardGrid from './CardGrid';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import CaseStudies from './CaseStudies';
import Insights from './Insights';
import ConnectSection from './ConnectSection';
import Footer from '../../../Footer/Footer';

function CareerBlog() {
  return (
    <div>
       <Navbar />

      {/* Service section */}
      <div className="service-container">
        <div className="service-image">
          <img src={CareerBlogimg} alt="Cloud consulting illustration" />
        </div>
        <div className="service-text">
          <h1>With Vividnex, your possibilities are limitless.</h1>
          <p>
            Join Vividnex to drive impact, create value, and shape a 
            sustainable, connected tomorrow
          </p>
        </div>
      </div>


<h1 className="Careerhead">Career advice</h1>
<CardGrid />
<h1 className="Careerhead">Insider views</h1>
<CaseStudies />
<h1 className="Careerhead">Students & interns</h1>
<Insights />
  <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Cloud careers</h1>
        <p>
    Join the Vividnex Cloud Team to help clients across industries build smarter, future-ready solutions..
        </p>
       <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
    <h1 className='Careerhead'>Stay connected</h1>
      <ConnectSection />
      <Footer />
    </div>

  )
}

export default CareerBlog ;
