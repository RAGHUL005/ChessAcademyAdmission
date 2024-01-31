import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavigationBarAdmin({ toggleMenu, showMenu }) {
  return (
    <div className={`navbar-container ${showMenu ? 'show-menu' : ''}`}>
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
      <div className={`menu-dropdown ${showMenu ? 'show' : ''}`}>
        <Link className="nav-link" to="/leaderboardadmin">
          LeaderBoard
        </Link>
        <Link className="nav-link" to="/about">
          Academy
        </Link>
        <Link className="nav-link" to="/course">
          Enrolled Course
        </Link>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
        <Link className="nav-link" to="/">
          Logout
        </Link>
      </div>
      <h1 className="nav-name">Chess Academy</h1>
    </div>
  );
}

export default NavigationBarAdmin;
