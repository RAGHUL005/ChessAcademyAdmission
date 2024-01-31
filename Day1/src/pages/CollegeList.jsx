import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Admin.css'

const CollegeList = ({ colleges, isAdmin, onDelete, onUpdate }) => {
  return (
    <div style={{ textAlign: 'center' }}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h2>Chess Admission Centers</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {colleges.map((college) => (
          <li key={college.id} style={{ marginBottom: '40px' }}>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={college.image}
                  alt={'${college.name} Image'}
                  style={{ width: '500px', height: '300px', marginBottom: '10px', borderRadius: '10px' }}
                />
                <strong style={{ fontSize: '20px' }}>{college.name}</strong>
                <p style={{ fontSize: '16px' ,justifyContent:'center'}}>{college.description}</p>
              </div>
            </Link>
            {isAdmin && (
              <div>
                <button onClick={() => onDelete(college.id)} className='mr-7' style={{backgroundColor:'green'}}>Delete</button>
                <button
                  onClick={() =>
                    onUpdate(
                      college.id,
                      prompt('Enter new name:', college.name),
                      prompt('Enter new image URL:', college.image),
                      prompt('Enter new description:', college.description)
                    )
                  }
                  style={{backgroundColor:'green'}}>
                  Update
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;