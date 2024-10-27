import React from 'react'
import "../../../index.css"
import kemrovotb1 from './../../../assets/images/kemrovotb1.png'
import kemrovotb2 from './../../../assets/images/kemrovotb2.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/Kemerovo.jpg"
import { useCollapse } from 'react-collapsed'
import LazyLoad from 'react-lazy-load'

const Kemrovo = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },


    ];
    return (
        <div id='kemrovo' className='college-cont'>
            <h1>9.Kemrovo State Medical University</h1>
            <p>Kemerovo State Medical University (KSMU) of the Ministry of Health of Russia, is a public medical education institution in Kemerovo, Russia. Established in 1956, the university is renowned for its exceptional medical education and training programs. The university is recognized at the Russian and international levels and also confirmed by the independent professional community and international expert organizations. </p>
            <p>The Ministry of Health of the Russian Federation approves the MBBS degree from Kemerovo State Medical University. It is also recognized by other medical institutions such as the National Medical Commission (NMC), enlisted with the World Directory of Medical Schools (WDOMS), and more, including ECFMG, FAIMER, etc.</p>
            <p>Kemerovo State Medical University is a federal innovation platform “Digital scientific and educational environment for the continuous professional development of a medical worker.” The Faculty of Medicine is an authoritative and structure-forming department of the University, that conducts extensive educational, scientific, methodological, and practical work. Each department at the university has student scientific circles.</p>
            <p>The university has a library with rich collections of resources that assist users of all categories including scientific, cultural, and educational activities. The scientific library supports medical education, nurturing the information culture of students by creating a sustainable interest in reading professional literature as a means of formation, development and further professional growth of the individual.</p>
            <LazyLoad height={"100%"}  >
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
            </LazyLoad>
            <h1>Kemrovo State Medical University Fees Structure</h1>
            <div className="table1-cont">
                <img src={kemrovotb2} alt="" />
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <div className="table1-cont">
                    <img src={kemrovotb1} alt="" />
                </div>

                <div class="criteria">
                    <h2>Eligibility Criteria</h2>
                    <p>To be eligible for admission, international students must meet the following criteria:</p>
                    <ul>
                        <li>Student must have passed 10+2 with 50% marks in science subjects.</li>
                        <li>The student should have completed 17 years as in the year of admission.</li>
                        <li>The student must have qualified the NEET exam.</li>
                    </ul>
                </div>

                <div class="process">
                    <h2>Admission Process</h2>
                    <ul>
                        <li>Submit the Application form along with the required documents.</li>
                        <li>Pay Fees and get a confirmation letter.</li>
                        <li>Submit Passport and get Visa/Invitation Letter.</li>
                        <li>Get Visa and come to Russia.</li>
                    </ul>
                </div>

                <div class="documents">
                    <h2>Documents Required For Admission</h2>
                    <p>At the time of MBBS admissions, Indian students are required to procure the following documents:</p>
                    <ul>
                        <li>Scanned copy of Class 12th Pass Certificate/Mark sheet</li>
                        <li>Scanned copy of Class 10th Pass Certificate</li>
                        <li>NEET Result/Admit Card</li>
                        <li>Scanned copy of Passport (first and last page)</li>
                        <li>ID Proof (Adhar, PAN, Driving License, etc.) if Passport is not ready at the time of application</li>
                        <li>Medical report with HIV report at the time of Visa stamping</li>
                        <li>Passport-size photographs</li>
                    </ul>
                </div>
            </section>
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}
        </div>
    )
}

export default Kemrovo
