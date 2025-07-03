import React from 'react'
import './Service.css';
import Robot from '../../../assets/images/Robot.jpg';
import Navbar from '../../Navbar/Navbar';
import ServiceHoverPanel from './ServiceHoverPanel';
import InteractiveServicePanel from './InteractiveServicePanel'
export default function Service() {
  return (
    <div>
      <Navbar />
      <div className='head-container-s'>
        <img src={Robot} alt="Logo" className='head-1-img' />
        <div className="head-text-block">
          <h1 className='head-1-s'>Transform the Future <br></br>
            of Your Business</h1>
          <p className='head-1-p'>Our unique blend of expertise, innovation, and
            collaboration helps you transform into the next-level version of your business.

          </p>
        </div>
      </div>
      <h2 className='head-2-s' >Capabilities</h2>
      <h3 className='head-2-p'>Capabilities that drive reinvention</h3>
      <ServiceHoverPanel />
      <h2 className='head-2-s' >Industries</h2>
      <h3 className='head-2-p'>Cunmatched industry expertise</h3>
      <InteractiveServicePanel />
    </div>
  )
}
