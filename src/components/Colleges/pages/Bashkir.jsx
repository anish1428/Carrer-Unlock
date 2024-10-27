import React from 'react'
import "../../../index.css"
import bashkirtb1 from './../../../assets/images/bashkirtb1.png'
import bashkirtb2 from './../../../assets/images/bashkirtb2.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/bashkir.jpg"
import slide2 from "../../../assets/images/baskhir2.jpg"
import { useCollapse } from 'react-collapsed'
import LazyLoad from 'react-lazy-load'
const Bashkir = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },

    ];

    return (

        <div id='bashkir' className='college-cont'>
            <h1>12.Bashkir State Medical University</h1>
            <p>Established in 1932 and situated in Ufa City, Bashkortostan, Russia, Bashkir State Medical University is amongst the top ten universities in Russia. The university is the center of medical and pharmaceutical science of Bashkortostan Republic. Bashkir State Medical University has been licensed by the Ministry of Education of the Russian Federation to train international students.</p>
            <p>For the last 80 years, Bashkir State Medical University has been training specialists in healthcare, scientific, and pedagogical work in the field of professional medical and pharmaceutical education of the Russian Federation</p>
            <LazyLoad height={"100%"} >
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
            </LazyLoad>
            <h1>Bashkir State Medical University Fee Structure</h1>
            <div className="table1-cont">
                <img src={bashkirtb2} alt="" />
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <div className="table1-cont">
                    <img src={bashkirtb1} alt="" />
                </div>

                <div class="section">
                    <h2>Recognition of Bashkir State Medical University</h2>
                    <p>Bashkir State Medical University is recognized by various organizations of global reputation such as:</p>
                    <ul>
                        <li>National Medical Commission (erstwhile Medical Council of India)</li>
                        <li>Medical Council of Canada</li>
                        <li>Ministry of Science and Higher Education, Russia</li>
                        <li>World Directory of Medical Schools (WDOMS)</li>
                        <li>Education Commission for Foreign Medical Graduates (ECFMG)</li>
                        <li>Registered with Foundation for Advancement of International Medical Education and Research (FAIMER)</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Eligibility Criteria For Admission</h2>
                    <p>International students are eligible for admission if:</p>
                    <ul>
                        <li>Student have passed 10+2 with 50% marks in science subjects.</li>
                        <li>The student should have completed 17 years as in the year of admission.</li>
                        <li>The student have qualified NEET exam.</li>
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
                    <p>At the time of MBBS admissions, the Indian students are required to procure the following documents:</p>
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

export default Bashkir
