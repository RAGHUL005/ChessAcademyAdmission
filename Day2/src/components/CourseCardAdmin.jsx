import React from 'react';

function CourseCardAdmin({ title, description, handleUpdateClick, handleDeleteClick }) {
  return (
    <div className="course-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={handleUpdateClick}>Update</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default CourseCardAdmin;
