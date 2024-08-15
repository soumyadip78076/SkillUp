import React from 'react'

function SqlContent() {
  return (
    <div className='python-content'>
    <div className='python_video_section'>
      <p>Python Videos</p>
      <div className='python-main'>
        <div className='video-1'>
          <video controls width="250" height="200">
            <source src="/videos/pyVideo1.mp4" type="video/mp4" />
          </video>
          <p>Learn Array</p>
        </div>
        <div className='video-2'>
          <video controls width="250" height="200">
            <source src="/videos/pyVideo1.mp4" type="video/mp4" />
          </video>
          <p>Learn String</p>
        </div>
        <div className='video-3'>
          <video controls width="250" height="200">
            <source src="/videos/pyVideo1.mp4" type="video/mp4" />
          </video>
          <p>Learn Lists</p>
        </div>
        <div className='video-4'>
          <video controls width="250" height="200">
            <source src="/videos/pyVideo1.mp4" type="video/mp4" />
          </video>
          <p>Learn LINK-LIST</p>
        </div>
      </div>
    </div>
    <div className='python-material-section'> 
      <p>Python Study Material</p>  
      <div className='notes'>
        <div className='notes_pdf'>
        <iframe src="/videos/python_pdf.pdf" width="100%" height="300px"></iframe>
        <p>Python Besics</p>
        </div>
        <div className='notes_pdf'>
        <iframe src="/videos/python_pdf.pdf" width="100%" height="300px"></iframe>
        <p>Python Advance</p>
        </div>
        <div className='notes_pdf'>
        <iframe src="/videos/python_pdf.pdf" width="100%" height="300px"></iframe>
        <p>All in One</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SqlContent
