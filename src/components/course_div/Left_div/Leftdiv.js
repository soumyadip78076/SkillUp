import React from 'react'
import '../../../container/leftdiv.css';
import Content from './Content';

function Leftdiv() {
  const logoUrl = `${process.env.PUBLIC_URL}/photos/logo.png`;
  return (
    <div className='left'>
           
           <img  id="logo" src={logoUrl} alt="Logo"  width={100} />
            <h1 id='course-name'>Data Science</h1>
            <div>
            <Content/>
            </div>
  </div>

  )
}
 
export default Leftdiv
