import React from 'react'
import "../../../index.css"
import Ulyanotb1 from './../../../assets/images/Ulyanotb1.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/ulyano.jpg"
import { useCollapse } from 'react-collapsed'
import LazyLoad from 'react-lazy-load'


const Ulyano = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },


    ];
    return (
        <div id='ulyan' className='college-cont'>
            <h1>5.Ulyanovsk state medical university    </h1>
            <p>Established in 1648, Ulyanovsk State Medical University in Russia is a renowned medical school with 40 hospitals dedicated to practical training. The university boasts a faculty of 1,500 members and welcomes 6,000 international students from 40 different countries. Accredited by the WHO and MCI, it has educated more than 50,000 healthcare professionals, including numerous international students from nations such as India, Kenya, and Iran.</p>
            <LazyLoad height={"100%"}  >
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
            </LazyLoad>
            <h2>FEES STRUCTURE</h2>
            <div className="table1-cont">
                <img src={Ulyanotb1} alt="" />
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <h1>Admission Information for Ulyanovsk State Medical University</h1>

                <div class="section">
                    <h2>Eligibility Criteria</h2>
                    <ul>
                        <li>The student should have qualified class 10 and 12 from any recognised education board/institution.</li>
                        <li>The student must have scored at least 50% in their class-12 while studying Physics, Chemistry, Biology (or any equivalent subject).</li>
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
                    <h2>Why Study MBBS at Ulyanovsk State Medical University, Russia?</h2>
                    <ul>
                        <li>Ulyanovsk State Medical University provides an MBBS program at an affordable cost.</li>
                        <li>The University has an easy admission procedure without donation fees or extra charges.</li>
                        <li>The medical degree from Ulyanovsk State Medical University is globally recognized.</li>
                        <li>Students receive training from highly qualified teachers using modern technology.</li>
                        <li>The University provides fully furnished hostels to all its students.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Student Life At Ulyanovsk State Medical University</h2>
                    <ul>
                        <li>The university has modern and well-equipped labs with computers, projectors, and all necessary medical equipment.</li>
                        <li>Medical graduates from this university have work opportunities in various countries.</li>
                        <li>The MBBS course is taught in English.</li>
                        <li>Hostels are located within the campus and offer great support to students.</li>
                        <li>The university has various clubs for students to participate in and explore their interests.</li>
                    </ul>
                </div>
            </section>
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}
        </div>
    )
}

export default Ulyano
