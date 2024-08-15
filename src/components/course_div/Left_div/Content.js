import React from 'react'
import '../../../container/content.css';
import DsCourseContent from './DsCourseContent'
import QuizAss from './QuizAss'
import Certificate from './Certificate'
function Content() {
  return (
    <div className='content-part'>
         <div>
               <h3>Course Content</h3>
               <DsCourseContent/>
         </div>
         <div>
               <h3>Assignment and Quiz</h3>
               <QuizAss/>
         </div>
         <div>Discusson Forum</div>
         <div>
         <h3>Certificate</h3>
               <Certificate/>
         </div>
    </div>
  )
}

export default Content
