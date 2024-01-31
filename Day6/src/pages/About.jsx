// About.jsx

import React from 'react';
import '../assets/css/About.css'; // Import your CSS file

function About() {
  return (
    <div className="about-container">
      <h1>About Chess Academy</h1>

      <section className="intro-section">
        <h2>Welcome to Chess Academy</h2>
        <p>
          Chess Academy is a hub for passionate chess enthusiasts, dedicated to helping players reach their full potential in the game of chess.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Chess Academy, we believe that chess is more than just a game; it's a journey of strategic thinking, skill development, and intellectual growth. Our mission is to provide a platform for players of all levels, from beginners to advanced, to learn, practice, and excel in the world of chess.
        </p>
      </section>

      <section className="key-features-section">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li>
            <strong>Experienced Coaches:</strong> Learn from our team of experienced and dedicated chess coaches who are committed to guiding you on your chess journey.
          </li>
          <li>
            <strong>Comprehensive Courses:</strong> Explore our comprehensive courses designed to cover various aspects of chess, including openings, tactics, endgames, and more.
          </li>
          <li>
            <strong>Community Engagement:</strong> Join a thriving community of chess enthusiasts, participate in tournaments, and engage in discussions to enhance your chess experience.
          </li>
        </ul>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          Chess Academy envisions a world where chess is accessible to everyone, fostering critical thinking, strategic planning, and a sense of community among players worldwide.
        </p>
      </section>

      <section className="why-choose-us-section">
        <h2>Why Choose Chess Academy?</h2>
        <ul>
          <li>
            <strong>Personalized Learning:</strong> Our courses cater to individual learning styles and pace, ensuring a personalized and effective learning experience.
          </li>
          <li>
            <strong>State-of-the-Art Platform:</strong> Experience chess learning on a modern and user-friendly platform, equipped with advanced features for a seamless educational journey.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> We are committed to continuous improvement, regularly updating our courses, and incorporating feedback to enhance your learning experience.
          </li>
        </ul>
      </section>

      <section className="get-started-section">
        <h2>Get Started Today!</h2>
        <p>
          Whether you're a beginner or an experienced player, Chess Academy is here to support your chess aspirations. Join us on this exciting journey and elevate your chess skills!
        </p>
      </section>
    </div>
  );
}

export default About;
