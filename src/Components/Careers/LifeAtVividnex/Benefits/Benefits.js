import React from 'react'
import './Benefits.css';
import Navbar from '../../../Navbar/Navbar';
import benefitsimg from '../../../../assets/images/benefitsimg.jpg';
import FlexConnect from './FlexConnect';
import  WorkConnections from './WorkConnections'

function Benefits() {
  return (
    <div>
      <Navbar />
   <div className="service-container">
          <div className="service-image">
            <img src={benefitsimg} alt="Cloud consulting illustration" /> {/* Updated here */}
          </div>
          <div className="service-text">
            <h1>Here, possibilities have no limits.</h1>
            <p>
              Be part of the change. Drive impact, deliver value, and help build a sustainable, connected future.
            </p>
          </div>
        </div>

<FlexConnect />

< WorkConnections />
    </div>
  )
}

export default Benefits;
