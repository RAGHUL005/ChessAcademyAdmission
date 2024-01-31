import React, { useState } from 'react';
import CourseCardAdmin from '../components/CourseCardAdmin';
import NavigationBarAdmin from '../components/NavigationBarAdmin';
import '../assets/css/Admin.css';

function AdminPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  const [courses, setCourses] = useState([
    { id: 1, title: 'Mastering Openings', description: 'Unlock the secrets of powerful chess openings with our expert instructors.' },
    { id: 2, title: 'Tactical Mastery: Crushing Opponents with Precision Moves', description: 'Learn to dominate your opponents through precise tactical maneuvers.' },
    { id: 3, title: 'Strategic Planning: Building Winning Positions', description: 'Develop strategic thinking and create winning positions on the board.' },
    { id: 4, title: 'Endgame Excellence: Securing Victory in Endgame Scenarios', description: 'Master the endgame to ensure success in all stages of the game.' },
    { id: 5, title: 'Opening Repertoire: Creating a Solid Opening Strategy', description: 'Build a strong opening repertoire for diverse and effective gameplay.' },
    // Add more courses as needed
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleUpdateClick = (title) => {
    const courseToEdit = courses.find((course) => course.title === title);
    setEditCourse(courseToEdit);
  };

  const handleEditSave = (updatedCourse) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.title === updatedCourse.title ? { ...course, ...updatedCourse } : course
      )
    );
    setEditCourse(null);
  };

  const handleDeleteClick = (title) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.title !== title));
    setEditCourse(null); // Clear edit form if the deleted course is being edited
  };

  return (
    <div>
      <NavigationBarAdmin toggleMenu={toggleMenu} showMenu={showMenu} />
      <div className="main-content">
        <h2>Welcome to Chess Academy!</h2>
        <p>Explore our chess courses, learn from experienced coaches, and elevate your chess skills.</p>

        <section className="featured-courses">
          <h3>Featured Courses</h3>
          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCardAdmin
                key={course.id}
                title={course.title}
                description={course.description}
                handleUpdateClick={() => handleUpdateClick(course.title)}
                handleDeleteClick={() => handleDeleteClick(course.title)}
              />
            ))}
          </div>
        </section>

        {editCourse && (
          <div className="edit-form">
            <h3>Edit Course</h3>
            <label>Title:</label>
            <input
              type="text"
              value={editCourse.title}
              onChange={(e) => setEditCourse({ ...editCourse, title: e.target.value })}
            />
            <label>Description:</label>
            <textarea
              value={editCourse.description}
              onChange={(e) => setEditCourse({ ...editCourse, description: e.target.value })}
            />
            <button onClick={() => handleEditSave(editCourse)}>Save Changes</button>
            <button onClick={() => setEditCourse(null)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
