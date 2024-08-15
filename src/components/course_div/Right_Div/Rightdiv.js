import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../../container/rightdiv.css';
import CourseHome from '../Right_Div/CourseHome'
import PythonContent from '../Left_div/PythonContent'
import SqlContent from '../Left_div/SqlContent';
import PowerBiContent from '../Left_div/PowerBiContent';
import QuizContent from '../Left_div/QuizContent';
import AssignmentContent from '../Left_div/AssignmentContent';
import AssignmentQNA from '../Left_div/AssignmentQNA';
import AssignmentLab from '../Left_div/AssignmentLab';
import CertificateGenerate from '../Left_div/CertificateGenerate';
function Rightdiv() {
  return (
    <div className='right_total'>
      <div className='academy-name'>
        <p>Welcome to Skillup Academy</p>
      </div>
      <Routes>
        <Route path="/" element={<CourseHome />} /> {/* Default route */}
        <Route path="/python" element={<PythonContent />} /> {/* Route for Python content */}
        <Route path="/sql" element={<SqlContent />} /> {/* Route for SQL content */}
        <Route path="/powerbi" element={<PowerBiContent />} /> {/* Route for PowerBI content */}
      </Routes>
      <Routes>
        <Route path="/assignment" element={<AssignmentContent />} />
        <Route path="/quiz" element={<QuizContent />} /> 
      </Routes>
      <Routes>
        <Route path="/cya" element={<AssignmentQNA/>} /> 
        <Route path="/cyl" element={<AssignmentLab/>} /> 
      </Routes>
      <Routes>
          <Route path="/option1" element={<CertificateGenerate/>}></Route>
      </Routes>

    </div>
  );
}

export default Rightdiv;
