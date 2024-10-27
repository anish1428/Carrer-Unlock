import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import guidance from '../../assets/images/guidance.jpg'
import fmge from '../../assets/images/fmge.jpg'
import assitant from '../../assets/images/assitant.jpg'
import '../../../src/index.css'
import Model from 'react-modal'
import orenburg from '../../assets/images/orenburg.jpg'
import permstate from '../../assets/images/permstate.jpg'
import pskov from '../../assets/images/Pskov2.jpg'
import kuban from '../../assets/images/kuban.jpg'
import omsk from '../../assets/images/Omsk.png'
import bashkir from '../../assets/images/bashkir.jpg'
import chuvah from '../../assets/images/chuvash.jpg'
import smolensk from '../../assets/images/smolensk.jpg'
import whatsapp2 from '../../assets/images/whatsapp2.png'

import instagram2 from '../../assets/images/instagram2.png'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import slide1 from '../../assets/images/slide1.png'
import slide2 from '../../assets/images/slide2.png'
import slide3 from '../../assets/images/slide3.png'
import slide4 from '../../assets/images/slide4.png'
import LazyLoad from 'react-lazy-load'



const Home = () => {
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },
        { src: slide3, alt: 'Slide 3' },
        { src: slide4, alt: 'Slide 4 ' },
        // Add more slides as needed
    ];
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
            <div className="carousel2">
                <Carousel slides={slides} />
            </div>
            <div className='god'>
                <div className='hero container'>

                    <div className={`whatsapp ${display ? 'display' : ''}`}>
                        <a target='_blank' href="https://wa.me/919546293955">  <img src={whatsapp2} alt="" /></a>

                    </div>
                    <div className={`instagram ${display ? 'display' : ''}`}>
                        <a target='_blank' href="https://www.instagram.com/careerunlock" ><img src={instagram2} alt="" /></a>
                    </div>
                    <div onClick={() => setVisible(true)} className={`book ${visible ? "hide" : " "}`}>
                        <p>Book Free Consultation Now</p>
                    </div>
                    {/* <div className="hero-text">
                        <h1 id='main-head1'>Navigating your path to higher learning</h1>
                        <p>Education is the cornerstone of growth for medical students. It imparts essential knowledge while nurturing critical thinking, creativity, and resilience. With a strong educational foundation, future doctors gain the skills and confidence to navigate healthcare complexities, adapt to medical advancements, and solve real-world challenges. Investing in education is investing in a brighter future for healthcare, empowering students to make a profound impact on the world.</p>
                        <Link to="/colleges"><button className='btn10'><div>Our Colleges</div><i class="fa-solid fa-arrow-right"></i></button></Link>
                    </div> */}
                </div>
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
                        width: "80vw",
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
                <div className='about-cont'>
                    <h1>About CareerUnlock</h1>
                    <p>We are an association dedicated to supporting the future generations of bright students from India. Our mission is to connect students with their desired universities without any hidden fees, donations, or sugarcoated promises. We aim to help our fellow brothers and sisters pursue their studies with comfort and care.</p>
                    <h1>Studying Medicine Abroad</h1>
                    <p>Studying medicine abroad offers students a unique learning experience, exposing them to diverse healthcare systems and broadening their perspectives on global healthcare. The benefits include:</p>
                    <ul>
                        <li>High-Quality Education: Access to top-tier educational and research facilities.</li>
                        <li>Diverse Patient Population: Exposure to a wide range of medical conditions and healthcare systems.</li>
                        <li>Hands-On Learning: Opportunities for clinical rotations and practical experience.</li>
                        <li>Career Opportunities: Enhanced career prospects post-graduation.</li>
                        <li>Personal Growth: Development of independence, resilience, and cultural awareness.</li>
                    </ul>
                    <h1>Our Commitment</h1>
                    <p>Our association plays a critical role in informing and supporting students interested in pursuing a career in medicine and studying abroad. By providing accurate information, resources, and guidance, we help students make informed decisions and achieve their career goals.</p>
                    <h1>Our Experience</h1>
                    <p>Having faced the challenges students encounter abroad, we are committed to protecting high-achieving students from exploitation by agencies and agents. We provide a transparent view of the financial and social needs of students, ensuring they are well-prepared and supported throughout their educational journey.</p>

                    <p style={{ color: "rebeccapurple" }}> <Link style={{ color: "blue" }} to="/contacts">Join Us</Link> in creating a brighter future for Indian <i style={{ color: "red" }} class="fa-solid fa-heart"></i> students, where education is accessible, genuine, and empowering. Together, we can make a difference.</p>

                </div>
                <div className='top-maincont'>
                    <h1>What Makes us the Top MBBS Consultancy?</h1>
                    <div className="top-cont">
                        <div className="guidance">
                            <LazyLoad height={200}>
                                <img src={guidance} alt="" />
                            </LazyLoad>
                            <div>
                                <h2>Expert Guidance</h2>
                                <p>Students can take proper guidance from experts,<br /> who too have a medical degree from reputed NMC approved medical colleges abroad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="top-cont">
                        <div className="guidance">
                            <LazyLoad height={200}>
                                <img src={fmge} alt="" />
                            </LazyLoad>
                            <div>
                                <h2>FMGE Coaching</h2>
                                <p>We have our own FMGE Coaching center<br /> To train students and help them to Successfully pass the FMGE exam to start practicing India</p>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="top-cont">
                        <div className="guidance">
                            <LazyLoad height={200}>
                                <img src={assitant} alt="" />
                            </LazyLoad>
                            <div>
                                <h2>Complete Assistant</h2>
                                <p>We assist students from the time of admission till the completion of MBBS degree</p>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="college-type">
                    <div className="leftcollege">
                        <h1>Our MBBS Abroad Partners</h1>
                        <div className="line"></div>
                        <p>In our steadfast commitment to excellence, we have established strategic alliances with the world's most prestigious medical universities.</p>
                    </div>
                    <div className="rightcollege">
                        {/* <i onClick={slideBackword} class="fa-solid fa-arrow-left"></i> */}
                        <div className="slider">
                            <ul >
                                <li>
                                    <img src={orenburg} alt="" />
                                    <p>Orenburg State Medical University</p>
                                </li>
                                <li>
                                    <img src={permstate} alt="" />
                                    <p>Perm State Medical University </p>
                                </li>
                                <li>
                                    <img src={pskov} alt="" />
                                    <p>Pskov State University  </p>
                                </li>

                                <li>
                                    <img src={omsk} alt="" />
                                    <p>Omsk State Medical University </p>
                                </li>
                                <li>
                                    <img src={bashkir} alt="" />
                                    <p>Bashkir State Medical University  </p>
                                </li>
                                <li>
                                    <img src={chuvah} alt="" />
                                    <p>Chuvash State Medical University </p>
                                </li>

                            </ul>
                        </div>
                        {/* <i onClick={slideForword} class="fa-solid fa-arrow-right"></i> */}

                    </div>
                </div>
                <div className='review-cont'>
                    <div className="heading">
                        <h1>MBBS in Russia 2024:A Quick overview</h1>
                    </div>
                    <div className="table">
                        <div className="row-cont">
                            <div className="row">Intake for MBBS in Russia</div>
                            <div className="row">September</div>
                        </div>
                        <div className="row-cont">
                            <div className="row">MBBS course duration</div>
                            <div className="row">5.8 years</div>
                        </div>
                        <div className="row-cont">
                            <div className="row">Eligibility of MBBS in Russia</div>
                            <div className="row">	1.	At least 50% aggregate score in PCB subjects in 10+2 <br />
                                2.	NEET qualified
                            </div>
                        </div>
                        <div className="row-cont">
                            <div className="row">Medium of teaching	</div>
                            <div className="row">English</div>
                        </div>
                        <div className="row-cont">
                            <div className="row">IELTS & TOEFL</div>
                            <div className="row">Not required</div>
                        </div>
                        <div className="row-cont">
                            <div className="row">MBBS fees in Russia</div>
                            <div className="row">INR 15 Lakhs- INR 50 Lakhs</div>
                        </div>
                        <div className="row-cont">
                            <div className="row">University recognitions</div>
                            <div className="row">NMC (erstwhile MCI), WDOMS, ECFMG, FAIMER, and Ministry of Education, Russia	</div>
                        </div>
                        <div className="row-cont">
                            <div className="row">Cost of living in Russia	</div>
                            <div className="row">INR 12,000/ month (USD 150 per month)</div>
                        </div>

                    </div>

                    <div className="about-doc">
                        <h2>DOCUMENT REQUIRED</h2>
                        <ul>
                            <li>10th Mark sheet</li>
                            <li>12th Mark sheet</li>
                            <li>NEET Scorecard</li>
                            <li>Original Passwport</li>
                            <li>Passport size photographs</li>
                            <li>HIV Report</li>

                        </ul>
                        <div className="line2"></div>
                        <div className='cont-text'>
                            <h2>NMC/MCI Approved Medical Universities in Russia</h2>
                            <p>Study medical programs in Russia at the low cost of tuition fees and living costs, as there are so many NMC/MCI-recognized Universities that offer top-quality education to aspirants</p>
                            <h2 style={{ color: "red" }}>How is MBBS abroad Beneficial?</h2>
                            <p>Look at some of the specifications to know how pursuing MBBS from abroad can help you with better opportunities and international exposure. Below mentioned are some of the features for your reference.</p>
                            <h2><span style={{ color: "green" }}>$</span> Affordable Fees</h2>
                            <p>Most universities offering MBBS abroad are pocket-friendly. This is because they are government-funded and don'ts` demand any additional donation charges or capitation fees.</p>
                            <h2><i style={{ color: "blue" }} class="fa-solid fa-globe"></i> Globally-recognized Degrees</h2>
                            <p>After completing their study MBBS abroad, students are guaranteed medical degrees that are recognized across the world. They’re also eligible to give licentiate exams like FMGE/NEXT Exam (India), USMLE (USA), and PLAB (UK)</p>
                            <h2>No IELTS/TOEFL Needed</h2>
                            <p>To be eligible for MBBS admission abroad, students need not pass any proficiency exams like IELTS/TOEFL, despite the curriculum being taught entirely in English.</p>
                            <h2>Low NEET Cutoff</h2>
                            <p>The minimum marks required to be eligible for MBBS in abroad are way less than that of India. Compared to 600 marks for a good Indian medical college, the cutoff for abroad is 130 (General) and 108 (SC/ST/OBC).</p>
                            <h2>Favorable Teacher Student Ratio</h2>
                            <p>Classes are much less crowded in universities abroad. The maximum teacher-student ratio is 1:15 in most universities.</p>


                        </div>
                        <div className="line2"></div>




                    </div>

                </div>
                   
            


            </div>
        </>
    )
}

export default Home
