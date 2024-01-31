import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CourseCard from '../components/CourseCard'; // Import the CourseCard component
import Profile from "./Profile";
import '../assets/css/UserPage.css';

function UserPage() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleViewClick = (title) => {
    console.log(`View clicked for ${title}`);
  };

  const handleBookClick = (title) => {
    console.log(`Book clicked for ${title}`);
  };

  return (
    <div>
      <div className="header-container">
        <div id="siteinfo"></div>
      </div>
      <div className={`navbar-container ${showMenu ? 'show-menu' : ''}`}>
        <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
        <div className={`menu-dropdown ${showMenu ? 'show' : ''}`}>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/leaderboarduser">LeaderBoard</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/">Logout</Link>
        </div>
        <h1 className="nav-name">Chess Academy</h1>
      </div>
      <div className="main-content">
        <h2>Welcome to Chess Academy!</h2>
        <p>
          Explore our chess courses, learn from experienced coaches, and elevate your chess skills.
        </p>
        
        <section className="featured-courses">
          <h3>Featured Courses</h3>
          <div className="courses-grid">
            <CourseCard
              title="Mastering Openings"
              description="Unlock the secrets of powerful chess openings with our expert instructors."
              handleViewClick={() => handleViewClick("Mastering Openings")}
              handleBookClick={() => handleBookClick("Mastering Openings")}
            />
            <CourseCard
              title="Endgame Strategies"
              description="Learn endgame techniques to secure victory in challenging chess situations."
              handleViewClick={() => handleViewClick("Endgame Strategies")}
              handleBookClick={() => handleBookClick("Endgame Strategies")}
            />
            <CourseCard
              title="Endgame Strategies"
              description="Learn endgame techniques to secure victory in challenging chess situations."
              handleViewClick={() => handleViewClick("Endgame Strategies")}
              handleBookClick={() => handleBookClick("Endgame Strategies")}
            />
            <CourseCard
              title="Endgame Strategies"
              description="Learn endgame techniques to secure victory in challenging chess situations."
              handleViewClick={() => handleViewClick("Endgame Strategies")}
              handleBookClick={() => handleBookClick("Endgame Strategies")}
            />
            <CourseCard
              title="Endgame Strategies"
              description="Learn endgame techniques to secure victory in challenging chess situations."
              handleViewClick={() => handleViewClick("Endgame Strategies")}
              handleBookClick={() => handleBookClick("Endgame Strategies")}
            />
            <CourseCard
              title="Endgame Strategies"
              description="Learn endgame techniques to secure victory in challenging chess situations."
              handleViewClick={() => handleViewClick("Endgame Strategies")}
              handleBookClick={() => handleBookClick("Endgame Strategies")}
            />
          </div>
        </section>

        {/* Add more content sections or components as needed */}
      </div>
    </div>
  );
}

export default UserPage;
