import React from 'react'
import Navbar from '../../Navbar/Navbar';
import engeer1 from '../../../assets/images/engeer1.jpg';
import './DigitalEngeneer.css';
function DigitalEngeneer() {
  return (
    <div>
      <Navbar />
       <div className="service-container">
                <div className="service-image">
                    <img src={engeer1} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>Turn every customer interaction into a catalyst for growth.</h1>
                    <p>
                        Inconsistent and impersonal interactions prevent organizations from effectively supporting their customers. Unlocking growth requires delivering seamless, data-driven experiences that feel intuitive, not reactive.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default DigitalEngeneer
