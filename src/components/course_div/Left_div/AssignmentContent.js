import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../container/assignmentContent.css';

function AssignmentContent() {

  return (
    <div className='assignment_page'>
        <h1>Assignment Zone</h1>
        <div className='problems'>
              <li value='/cya'><NavLink to="/cya">Complete Your Assigments</NavLink></li>
              <li value='/cyl'><NavLink to="/cyl">Complete Your LAB</NavLink></li>
        </div>
    </div>
  )
}

export default AssignmentContent
