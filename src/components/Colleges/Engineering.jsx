import React from 'react'
import './Engineering.css'
import Navbar from '../Navbar/Navbar'
import Mipt from './pages/Mipt'
import scolarship from '../../assets/images/Scolarship.png'

const Engineering = () => {
  return (
    <div className='eng-cont' >
      <div className="scolar">
        <img src={scolarship} alt="" />
      </div>
      <Navbar/>
      <Mipt/>
    </div>
  )
}

export default Engineering
