import '../assets/css/AdminPage.css'; // Import your CSS file
import React from 'react';

function AdminPage() {
  return (

    <div className="admin-container">
      <h1>Welcome, Admin!</h1>
      <p>
        Manage and oversee the operations of Chess Academy with the admin tools.
      </p>

      <div className="admin-options">
        <div className="option-card">
          <h3>User Management</h3>
          <p>Manage user accounts and access permissions.</p>
        </div>

        <div className="option-card">
          <h3>Course Management</h3>
          <p>Add, edit, or remove courses from the academy.</p>
        </div>

        <div className="option-card">
          <h3>Analytics</h3>
          <p>View analytics and insights about user activity.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
