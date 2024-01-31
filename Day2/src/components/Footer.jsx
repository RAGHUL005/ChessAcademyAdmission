import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>STAR Insurance Company Ltd.</h3>
          <p>IRDA Regn. No. 110 · CIN: U66010MH2000PLC128403</p>
          <p>Registered & Corporate Office: 14th Floor, Tower A, Peninsula Business Park, Senapati Bapat Marg, Lower Parel, Mumbai 400013.</p>
        </div>
        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Contact Information</h3>
          <p>For inquiries and support:</p>
          <p>Email: info@starinsurance.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Trade logo displayed above belongs to STAR Ltd and AIA Group Ltd. and is used by STAR AIA Life Insurance Company Ltd under a license. For any information including cancellation, claims, and complaints, please contact our Insurance Advisor/Intermediary or visit Tata AIA Life's nearest branch office or call 1-860-266-9966 or write to us at customercare@tataaia.com. Visit us at <a href='https://www.tataaia.com' target='_blank' rel='noopener noreferrer'>www.tataaia.com</a>.</p>
        <p>&copy; 2023 STAR Insurance Company Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
