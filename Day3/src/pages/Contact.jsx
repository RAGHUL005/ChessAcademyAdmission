import React from 'react';
import '../assets/css/Contact.css'; // Import your CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? Reach out to us using the contact information below.
      </p>

      <div className="contact-info">
        <div className="info-item">
          <h3>Email</h3>
          <p>info@chessacademy.com</p>
        </div>

        <div className="info-item">
          <h3>Phone</h3>
          <p>+1 (123) 456-7890</p>
        </div>

        <div className="info-item">
          <h3>Address</h3>
          <p>123 Chess Street, Cityville, Country</p>
        </div>
      </div>

      <form className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" placeholder="Type your message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
