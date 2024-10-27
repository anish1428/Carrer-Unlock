

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import menu from '../../assets/images/menu-icon.png';
import close from '../../assets/images/close-icon.png'; // Import close icon image
import { Link, NavLink } from 'react-router-dom';
import logo2 from '../../assets/images/logo.png';
import phoneicon from "../../assets/images/phone-icon.png"
import whatsapp2 from '../../assets/images/whatsapp2.png'
import Model from 'react-modal'
import instagram2 from '../../assets/images/instagram2.png'


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [medicalOpen, setMedicalOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCourses = (e) => {
    e.preventDefault();
    setCoursesOpen(!coursesOpen);
    setMedicalOpen(false);
  };

  const toggleMedical = (e) => {
    e.preventDefault();
    setMedicalOpen(!medicalOpen);
  };
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setDisplay(true) : setDisplay(false);
    })
  }, []);
  const [result, setResult] = React.useState("");
  const [thank, setThank] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "408f9d07-b418-40c8-8b07-400d47026291");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setThank(true);

    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
  <>

    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="upper-navbar">
        <div className='gap'>
          <div><i class="fa-solid fa-phone"></i> Student Helpline: +91 95462 93955</div>
        </div>
        <div className='gap'>
          <i class="fa-regular fa-envelope"></i> <a href="mailto:carrerunlock@gmail.com">carrerunlock@gmail.com</a>
        </div>
        <div className='gap'>
          <a target='_blank' href="https://wa.me/919546293955">  <img src={whatsapp2} alt="" /></a>
          <a target='_blank' href="https://www.instagram.com/careerunlock" ><img src={instagram2} alt="" /></a>

        </div>

      </div>
      <div className='down-navbar'>
        <div className="logo">
          <Link to="/"><img width={"150px"} src={logo2} alt="Logo" /></Link>
        </div>
        <ul className={menuOpen ? 'show-menu' : 'hide-menu'}>
          <img className="close-menu" src={close} alt="close" onClick={toggleMenu} />
          <li onClick={toggleMenu}><NavLink to="/">Home</NavLink></li>
          <li className="dropdown">
            <span className={coursesOpen ? "courses-34" : ""} onClick={toggleCourses}>Courses</span>
            {coursesOpen && (
              <ul className="dropdown-menu">
                <li onClick={toggleMenu}><NavLink to="/engineering">Engineering</NavLink></li>
                <li className="dropdown">
                  <span onClick={toggleMedical}>Medical</span>
                  {medicalOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={toggleMenu}><NavLink to="/vietnam">Vietnam</NavLink></li>
                      <li onClick={toggleMenu}><NavLink to="/russia">Russia</NavLink></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li onClick={toggleMenu}><NavLink to="/about">About Us</NavLink></li>
          <li onClick={toggleMenu}><NavLink to="/contacts"><b>Contact Us</b></NavLink></li>
          <li id='register' onClick={()=>{setVisible(true);toggleMenu();}}>Apply Now</li>
        </ul>
        <img id='menu' className={`menu ${menuOpen ? "hideit" : ""}`} src={menu} alt="menu" onClick={toggleMenu} />
      </div>
    </nav>
    <Model isOpen={visible} onRequestClose={() => setVisible(false)} style={{
                overlay: {
                   backgroundColor: 'rgba(0, 0, 0, 0.30)'
                },
                content: {
                    
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    width:"80vw",
                    transform: 'translate(-50%, -50%)',
                    
                  

                }

            }}>
                <div className="contact-col3">
                    <form onSubmit={onSubmit}>
                        <label>Your name</label>
                        <input type="text" name='name' placeholder='Enter Your Name' required />
                        <label >Phone Number</label>
                        <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                        <label >Write Your Messages Here</label>
                        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                        <button type='submit' className='btn-submit'>Submit now</button>
                    </form>
                    <span>{result}</span>
                    <span>{thank && <div>Thank you for reaching out to us! &#10084;</div>}</span>
                    <button id='cross' onClick={() => setVisible(false)}><i class="fa-solid fa-xmark"></i></button>
                </div>
            </Model>
    
    </>
  );
};

export default Navbar;
