// CourseCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Courses.css';

const CourseCard = ({ title, imageUrl, description }) => {
  const handleViewClick = () => {
    console.log(`View clicked for ${title}`);
  };

  return (
    <div className="course-card">
      <div className="card-top">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-center">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-bottom">
        <button className="view-button" onClick={handleViewClick}>
          View
        </button>
        <Link to="/registration">
          <button className="book-button">
            Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
