import React from 'react'
import '../../../container/certificate.css'
import { NavLink } from 'react-router-dom'; 
function Certificate() {
  return (
    <div>
               <select onChange={(e) => window.location.href = e.target.value}>
                 <option value="/" disabled><NavLink to="/">Certificate Download/Generate </NavLink></option>
                 <option value="/option1"><NavLink to="/option1"></NavLink>Certificate Genarate</option>
               </select>
    </div>
  )
}

export default Certificate
