import React from 'react'
import "../../../index.css"
import smolensktb1 from './../../../assets/images/smolensktb1.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/orenburg.jpg"
import slide2 from "../../../assets/images/orenburg2.png"
import { useCollapse } from 'react-collapsed'

const Smolensk = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },

    ];
    return (
        <div id='smolensk' className='college-cont'>
            <h1>8.Smolensk State Medical University </h1>
            <p>Founded in 1920 and located in Smolensk Oblast, Russia, Smolensk State Medical University is one of the top medical universities to study MBBS in Russia. This university is recognized by MCI, WHO, USA, UK, and other major countries. It stands at the 22nd position in the international rating. At present, this university is a big scientific foundation where methodical, fundamental and applied scientific research is performed.</p>
            <p>Smolensk State Medical University in Russia has international students from more than 50 countries and the highly-qualified faculty of the university conducts classes in English language. </p>
            <div className="image">
                <Carousel2 slides={slides} />
            </div>
            <h1>
                Smolensk State Medical University Fees Structure
            </h1>
            <div className="table1-cont">
                <img src={smolensktb1} alt="" />
            </div>
         
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <div class="section">
                    <h2>Smolensk State Medical University - Recognitions & Accreditations</h2>
                    <ul>
                        <li>World Health Organization (WHO)</li>
                        <li>National Medical Commission (erstwhile Medical Council of India)</li>
                        <li>Ministry of Science and Higher Education of the Russian Federation</li>
                        <li>Education Commission for Foreign Medical Graduates (ECFMG)</li>
                        <li>General Medical Council</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Eligibility Criteria For Admission At Smolensk State Medical University</h2>
                    <ul>
                        <li>Student must have passed 10+2 with 50% marks in science subjects.</li>
                        <li>The student should have completed 17 years as in the year of admission.</li>
                        <li>The student must have qualified the NEET exam.</li>
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
                    <ul class="documents-list">
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

export default Smolensk
