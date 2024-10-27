import React from 'react'
import "../../../index.css"
import chuvashtb1 from './../../../assets/images/chuvashtb1.png'
import chuvashtb2 from './../../../assets/images/chuvashtb2.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/chuvash.jpg"
import slide2 from "../../../assets/images/Chuvash2.png"
import { useCollapse } from 'react-collapsed'
import LazyLoad from 'react-lazy-load'

const Chuvash = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },

    ];
    return (
        <div id='chuvash' className='college-cont'>
            <h1>13.	Chuvash State Medical University </h1>
            <p>Established in 1967, Chuvash State University, named after the famed Russian Educator-Democrat Ilya Nikolaevich Ulyanov. For its exceptional medical education, the university is considered to be among the top medical universities of Russia and has been continuously gaining popularity among international students as well. </p>
            <p>At present the university accommodates over a thousand international students from 49 countries across the world. The university offers graduation courses along with post-graduation, doctorates, and specialty courses in various disciplines including medicine.</p>
            <p>The University emphasises upon promoting research and innovative practices in its curriculum and teaching methodologies. One of the key attractions of the university for medical students is that it has the biggest anatomy museum in the region. The museum includes more than 700 original organs and human bodies for practical study.</p>
            <LazyLoad height={"100%"}>
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
            </LazyLoad>
            <h1>Chuvash State Uviversity Fee Structure</h1>
            <div className="table1-cont">
                <img src={chuvashtb2} alt="" />
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <h1>Chuvash State University- Key Highlights 2024</h1>
                <div className="table1-cont">
                    <img src={chuvashtb1} alt="" />
                </div>
                <div class="section">
                    <h2>Faculties at Chuvash State University</h2>
                    <p>The University has 115 departments in the campus and four faculties for medical studies:</p>
                    <ul>
                        <li>Faculty of General Medicine</li>
                        <li>Faculty of Pharmacy</li>
                        <li>Faculty of Paediatric</li>
                        <li>Faculty of Dentistry</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Eligibility Criteria</h2>
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
                    </ul>
                </div>
            </section>
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}

        </div>
    )
}

export default Chuvash
