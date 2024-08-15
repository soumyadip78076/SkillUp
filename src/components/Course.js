import React from 'react'
import '../container/course.css';
import Leftdiv from './course_div/Left_div/Leftdiv';
import Rightdiv from './course_div/Right_Div/Rightdiv';

function Course() {
  return (
      <div className='main-file'>
        <Leftdiv/>
        <Rightdiv/>
      </div>
  )
}

export default Course
