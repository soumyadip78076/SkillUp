
import React from 'react'

function CourseHome() {
  return (
    <div>
       <div className='course-source'>
        <div className='sub1'>
          <video width="300" height="200" controls>
            <source src="/videos/skillupvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='sub2'>
          <video width="300" height="200" controls>
            <source src="/videos/skillupvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='sub3'>
          <video width="300" height="200" controls>
            <source src="/videos/skillupvideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default CourseHome