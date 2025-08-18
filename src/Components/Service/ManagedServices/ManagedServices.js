import React from 'react'
import './ManagedServices.css';

import ManagedServicesImg from '../../../assets/images/ManagedService.jpg';

function ManagedServices() {
  return (
    <div>
     
      <div className="service-container">
        <div className="service-image">
          <img src={ManagedServicesImg} alt="Cloud consulting illustration" /> {/* Updated here */}
        </div>
        <div className="service-text">
          <h1>Metaverse services</h1>
          <p>
            The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.+
          </p>
        </div>
      </div>
       <h1 className='headings-1'>Metaverse now</h1>
    </div>
  )
}

export default ManagedServices
