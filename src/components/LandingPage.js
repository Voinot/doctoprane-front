import React from 'react'
import { Link } from 'react-router-dom'

import './LandingPage.css'

import logo from '../images/logo.png'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className="flex-container">
      <div><img src={logo} alt='Logo' /></div>
      <p>Log in as</p>
      <Link to={{
        pathname: '/doctor_prescription',
        doctor_id: 1
      }} ><div>
          <button>Doctor<hr /><b>Hwarang</b></button></div>
      </Link>
      <Link to={{
        pathname: '/doctor_prescription',
        doctor_id: 1
      }} ><div>
            <button>Doctor<hr /><b>Devicci</b></button></div>
      </Link>
      <Link to={{
          pathname: '/patient',
        patient_id_id: 2
      }} ><div>
            <button>Patient<hr /><b>Jérôme</b></button></div>
      </Link>
      <Link to={{
          pathname: '/patient',
        patient_id: 1
      }} >
        <div>
            <button>Patient <hr /><b>Florent</b></button>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage