import React, { lazy } from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (

    <div>
      <Navbar />
      <div className='about-cont6'>
        <h1>Our Motto: Empowering India's Future, One Life at a Time</h1>
        <p>At <span style={{ color: "green", fontWeight: "700" }}>CARRER UNLOCK</span>, we believe in the boundless potential of every individual. Our unwavering commitment is to provide 100% genuine and compassionate medical consultancy services for Indians abroad.

          Your health and well-being are not just our priority—they are our passion. We walk with you through every step of your medical journey, ensuring that you receive the highest standard of care and guidance. Together, we are building a healthier, brighter future for our global Indian community.

          Join us in our mission to make a difference, one life at a time.</p>
        <h1>About CareerUnlock</h1>
        <p>We are an association dedicated to supporting the future generations of bright students from India. Our mission is to connect students with their desired universities without any hidden fees, donations, or sugarcoated promises. We aim to help our fellow brothers and sisters pursue their studies with comfort and care.</p>
        <h1>Studying Medicine Abroad</h1>
        <p>Studying medicine abroad offers students a unique learning experience, exposing them to diverse healthcare systems and broadening their perspectives on global healthcare. The benefits include:</p>

        <h1>Our Commitment</h1>
        <p>Our association plays a critical role in informing and supporting students interested in pursuing a career in medicine and studying abroad. By providing accurate information, resources, and guidance, we help students make informed decisions and achieve their career goals.</p>
        <h1>Our Experience</h1>
        <p>Having faced the challenges students encounter abroad, we are committed to protecting high-achieving students from exploitation by agencies and agents. We provide a transparent view of the financial and social needs of students, ensuring they are well-prepared and supported throughout their educational journey.</p>

        <p style={{ color: "rebeccapurple" }}> <Link style={{ color: "blue" }} to="/contacts">Join Us</Link> in creating a brighter future for Indian <i style={{ color: "red" }} class="fa-solid fa-heart"></i> students, where education is accessible, genuine, and empowering. Together, we can make a difference.</p>
        <div className="line5"></div>
      </div>

      <div className="our-collegescont">
        <h1>Our Colleges: Nurturing Dreams, Building Futures </h1>
        <ul>
          <li>Mordovia state medical university</li>
          <li>North Western medical university peterburg</li>
          <li>Omsk State Medical University</li>
          
          <li>Northen State Medical University</li>
          <li>Bashkir</li>
          <li>NORTHEN SATE MEDICAL</li>
          <li>Ulyanovsk state medical university</li>
          <li>North ossetian medical university</li>
          <li>URAL STATE UNIVERSITY</li>
          <li>Orenburg State Medical University</li>
         
          <li>Kemrovo State Medical University</li>
          <li>Pskov State University</li>
          <li>Perm State Medical University</li>
          <li>Bashkir State Medical University</li>
          <li>Chuvash State Medical University</li>


        </ul>
        <div style={{ background: "#fff" }} className="line5"></div>
      </div>
      

    </div>
  )
}

export default About
