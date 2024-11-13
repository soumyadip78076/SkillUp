import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import '../../../container/dsCourseContent.css';

function DsCourseContent() {
  return (
    <div>
      <select onChange={(e) => window.location.href = e.target.value}>
        <option value="/" disabled><NavLink to="/">Select Your Subject</NavLink></option>
        <option value="/python"><NavLink to="/python">Python</NavLink></option>
        <option value="/sql"><NavLink to="/sql">Sql</NavLink></option>
        <option value="/powerbi"><NavLink to="/powerbi">PowerBi</NavLink></option>
      </select>
    </div>
  );
}

export default DsCourseContent;
