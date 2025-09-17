import React from 'react'
import Access from './Access';
import './AccessibilityStatement.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';
import AccessibilityPoints from './AccessibilityPoints';



function AccessibilityStatement() {
  return (
    <div>
      <Navbar />
      <Access />
      <p className='textp'>At Vividnex Innovations Pvt. Ltd., we are deeply committed to ensuring that our digital platforms are inclusive and accessible to all individuals, including those with disabilities. We design our site templates with careful attention to color contrast, logical heading order, and consistent design elements, enabling users to navigate and understand content with ease. Our coding practices ensure that every page is compatible with a wide range of input and output devices, such as keyboards, screen readers, and other assistive technologies. We also make certain that non-textual elements are accompanied by meaningful alternatives, such as descriptive “alt text” for images and transcripts or captions for video and audio content. By following the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA, we continuously strive to make vividnex.com accessible to people of all abilities, while fostering a culture of inclusion and equal opportunity.</p>
      <AccessibilityPoints />
      <p className='textp'>In addition to our commitment to accessibility, we recognize the importance of privacy and user experience through our use of cookies. Cookies are small text files stored on your device that allow us to improve the functionality and performance of our website. They enable us to remember your preferences, such as accessibility settings or language choices, and help us analyze site usage to provide a smoother and more personalized browsing experience. Some cookies are essential for the operation of our site, while others support performance, functionality, and analytics. You may choose to manage or disable cookies at any time through your browser settings, but please note that certain features of the site may not function properly without them.</p>


      <p className='textp'>At Vividnex Innovations Pvt. Ltd., your privacy and trust are of utmost importance. All cookies are used responsibly and in compliance with applicable data protection laws. By continuing to use our website, you consent to our use of cookies in accordance with this policy. If you encounter any difficulties accessing content on vividnex.com or wish to learn more about how we use cookies, we encourage you to reach out to us at [insert official email/phone], and we will be happy to assist you.</p>

      <Footer />

    </div>
  )
}

export default AccessibilityStatement;
