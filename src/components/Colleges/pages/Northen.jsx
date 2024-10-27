import React from 'react'
import "../../../index.css"
import Northentb1 from './../../../assets/images/Northentb1.png'
import Northentb2 from './../../../assets/images/Northentb2.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/Northen1.jpg"
import slide2 from "../../../assets/images/Northen2.jpg"
import { useCollapse } from 'react-collapsed'
import LazyLoad from 'react-lazy-load'


const Northen = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },

    ];
    return (
        <div id='northen' className='college-cont'>
            <h1>4. Northen State Medical University</h1>
            <p>The Northern State Medical University was founded in 1936 and it is situated in Arkhangelsk. The University is the center of Medical education in the North of Russia. </p>
            <p>Presently, there are around 5500 students studying in Northern State Medical University. The University has up-to-date equipment such as computers, films and video aids, and other modern appliances. Medical education is provided by the department of preventive medicine and medical biochemistry. The institute also has good international relations. The university has a remarkable campus and well-maintained infrastructure. Along with MBBS various other medical courses are offered to the students. The university staff has around 980 members including researchers, professors, teachers etc.</p>
            <LazyLoad height={"100%"} >
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
            </LazyLoad>
            <h1>Northen State Medical University Fees Structure</h1>
            <div className="table1-cont">
                <img src={Northentb2} alt="" />
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <h1>Faculties at Northern State Medical University</h1>
                <ul>
                    <li>Faculty of General Medicine</li>
                    <li>Faculty of Pediatric</li>
                    <li>Faculty of Nursing</li>
                    <li>Faculty of Postgraduate Education</li>
                    <li>Faculty of Pharmaceutical</li>
                </ul>


                <div className="table1-cont">
                    <img src={Northentb1} alt="" />
                </div>

                <div class="section">
                    <h2>Eligibility Criteria</h2>
                    <ul>
                        <li>The student should have qualified class 10 and 12 from any recognised education board/institution.</li>
                        <li>The student must have scored at least 50% in their class 12 while studying Physics, Chemistry, Biology (or any equivalent subject).</li>
                        <li>The student must be 17 years of age.</li>
                        <li>The student should qualify the NEET-UG exam with the required marks:
                            <ul>
                                <li>50th percentile for general/EWS category students.</li>
                                <li>45th percentile for PwD category students.</li>
                                <li>40th percentile for SC/ST/OBC category students.</li>
                            </ul>
                        </li>
                        <li>The students must possess a valid NEET Score card.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Admission Process</h2>
                    <ul>
                        <li>Submit the Application form along with the required documents.</li>
                        <li>Pay Fees and get a confirmation letter.</li>
                        <li>Submit Passport, get Visa/Invitation Letter.</li>
                        <li>Get Visa and come to Russia.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Documents Required For Admission</h2>
                    <ul>
                        <li>Scanned copy of Class 12th Pass Certificate/Mark sheet.</li>
                        <li>Scanned copy of Class 10th Pass Certificate.</li>
                        <li>NEET Result/Admit Card.</li>
                        <li>Scanned copy of Passport (first and last page).</li>
                        <li>ID Proof (Adhar, PAN, Driving License, etc.) if Passport is not ready at the time of application.</li>
                        <li>Medical report with HIV report at the time of Visa stamping.</li>
                        <li>Passport-size photographs.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Why Study MBBS at Northern State Medical University, Russia?</h2>
                    <ul>
                        <li>Northern State Medical University provides an MBBS program at an affordable cost.</li>
                        <li>The University has an easy admission procedure without donation fees or extra charges.</li>
                        <li>The medical degree from Northern State Medical University is globally recognized.</li>
                        <li>Students receive training from highly qualified teachers using modern technology.</li>
                        <li>The University provides fully furnished hostels to all its students.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Student Life At Northern State Medical University</h2>
                    <ul>
                        <li>The university has modern and well-equipped labs with computers, projectors, and all necessary medical equipment.</li>
                        <li>Medical graduates from this university have work opportunities in various countries.</li>
                        <li>The MBBS course is taught in English.</li>
                        <li>Hostels are located within the campus and offer great support to students.</li>
                        <li>The university has various clubs for students to participate in and explore their interests.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>City at a Glance: Arkhangelsk</h2>
                    <ul>
                        <li>The White Sea, about 40 kilometers from Arkhangelsk, influences the climate, making it windy and humid with frequent rain.</li>
                        <li>Arkhangelsk is one of the oldest Russian cities and a major scientific and cultural center in the European North.</li>
                        <li>Key attractions include the Kulakov Museum, Northern Sea Museum, Museum of Russian Art of XVII, Small Korela Wooden Architecture and Folk Art Museum, and more.</li>
                    </ul>
                </div>

            </section>
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}
        </div>
    )
}

export default Northen
