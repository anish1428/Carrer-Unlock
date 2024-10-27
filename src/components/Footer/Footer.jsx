import React from 'react'
import './Footer.css'
import india from '../../assets/images/india.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer-cont'>
       <div className="info-client">
       
          <h2>Get In Touch With Us</h2>
           <div className='info'><i class="fa-brands fa-whatsapp"></i>/<i class="fa-solid fa-phone"></i><p>+91 95462 93955</p></div>
           <div className="info"><i class="fa-solid fa-envelope"></i><p> <a href="mailto:carrerunlock@gmail.com">carrerunlock@gmail.com</a></p></div>
           <div className="info" style={{gap:"20px"}}>
              <a target='_blank' href="https://www.instagram.com/careerunlock"><i class="fa-brands fa-instagram"></i></a>
              <a target='_blank' href="https://wa.me/919546293955"><i class="fa-brands fa-whatsapp"></i></a>
           </div>
           
           <p>CARRER UNLOCK <i class="fa-regular fa-copyright"></i> 2024 All Rights Rerserved</p>
           <div className="info"><p>JAY HIND</p><img src={india} alt="" /></div>
       </div>
    </div>
  )
}

export default Footer
