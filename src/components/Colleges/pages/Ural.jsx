import React from 'react'
import "../../../index.css"
import Uraltb1 from './../../../assets/images/Uraltb1.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/Ural.webp"
import { useCollapse } from 'react-collapsed'
import LazyLoad from 'react-lazy-load'


const Ural = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },

    ];
    return (
        <div id='ural' className='college-cont'>
            <h1>7.URAL STATE UNIVERSITY</h1>
            <p>Established in 1930, the Ural State Medical University is a distinguished public university located in Yekaterinburg, Russia, recognized for its exceptional standards in medical education and research. Boasting a student body of over 6000 from both national and international backgrounds, the university engages in partnerships with esteemed medical organizations globally. Offering a wide range of medical degree programs and holding accreditation for numerous specialties, the institution delivers top-notch education and research prospects.
            </p>
            <LazyLoad height={"100%"}  >
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
            </LazyLoad>
            <div className="table1-cont">
                <img src={Uraltb1} alt="" />
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <h1>Eligibility Criteria to Study MBBS at Ural State University</h1>
                <ul>
                    <li>Must have completed Class 10 and 12 from a recognized board/institution</li>
                    <li>Minimum 50% aggregate in Class 12 with Physics, Chemistry, Biology (or equivalent)</li>
                    <li>Age requirement: 17 years or older</li>
                    <li>Must qualify NEET-UG exam with required percentile</li>
                    <li>NEET-UG percentile requirements:
                        <ul>
                            <li>General/EWS category: 50th percentile</li>
                            <li>PwD category: 45th percentile</li>
                            <li>SC/ST/OBC category: 40th percentile</li>
                        </ul>
                    </li>
                    <li>Must possess a valid NEET Score Card</li>
                </ul>

                <h1>Admission Process</h1>
                <ul>
                    <li>Submit the Application form along with required documents</li>
                    <li>Pay Fees and receive a confirmation letter</li>
                    <li>Submit Passport and receive Visa/Invitation Letter</li>
                    <li>Obtain Visa and travel to Russia</li>
                </ul>

                <h1>Documents Required for Admission</h1>
                <ul>
                    <li>Scanned copy of Class 12th Pass Certificate/Mark sheet</li>
                    <li>Scanned copy of Class 10th Pass Certificate</li>
                    <li>NEET Result/Admit Card</li>
                    <li>Scanned copy of Passport (first and last page)</li>
                    <li>ID Proof (Adhar, PAN, Driving License, etc.) if Passport is not available at application time</li>
                    <li>Medical report with HIV report at the time of Visa stamping</li>
                    <li>Passport-size photographs</li>
                </ul>

                <h1>Why Study MBBS at Ural State University, Russia?</h1>
                <ul>
                    <li>Affordable MBBS program</li>
                    <li>Straightforward admission procedure with no donation fees or extra charges</li>
                    <li>Globally recognized medical degree</li>
                    <li>Highly qualified teachers and modern technology for training</li>
                    <li>Fully furnished hostels within the campus</li>
                </ul>

                <h1>Student Life at Ural State University</h1>
                <ul>
                    <li>Modern and well-equipped labs with computers, projectors, and medical facilities</li>
                    <li>Opportunities for medical graduates to work in various countries</li>
                    <li>MBBS course taught in English</li>
                    <li>On-campus hostels offering strong support</li>
                    <li>Various clubs for student participation in extracurricular activities</li>
                </ul>


            </section>
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}

        </div>
    )
}

export default Ural
