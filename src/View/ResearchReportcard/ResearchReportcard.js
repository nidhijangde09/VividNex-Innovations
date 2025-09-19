import React from 'react'
import './ResearchReportcard.css';
import ResearchReport from './ResearchReport';
import InsightsSection from './InsightsSection';
import InsightsSection1 from './InsightsSection1';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

function ResearchReportcard() {
  return (
    <div>
      <Navbar />
      <ResearchReport />
      <h1 className='headings-1'>Why modernize the way capital projects are delivered?</h1>
      <InsightsSection />
      <h1 className='headings-1'>Why modernize the way capital projects are delivered?</h1>
      <InsightsSection1 />
      <Footer />
    </div>
  )
}

export default ResearchReportcard
