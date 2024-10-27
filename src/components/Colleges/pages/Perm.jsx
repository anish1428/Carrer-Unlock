import React from 'react'
import './Perm.css'
import './Allclg.css'
import Carousel2 from '../../Carousel2/Carousel2'
import { useCollapse } from 'react-collapsed'
import slide1 from "../../../assets/images/perm.jpg"

const Perm = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },


    ];
    return (
        <div className='perm-cont' id='perm'>
            <h1>11.Perm State Medical University </h1>
            <p>Founded in 1916 and located in the Perm City of Russia, Perm State Medical University is one of the oldest and largest universities of Russia. The leading university is a popular name amongst Indian medical aspirants who want to pursue MBBS in Russia.
                Perm State Medical University is integrated with academic institutions of the Ural Branch of the Russian Academy of Sciences and different higher schools of Russia and Perm. The result is deepening of scientific-research studies, which are widely introduced into medical practice, as well as receiving grants of the Russian Foundation for Basic Research (RFBR) and Russian Humanitarian Science Foundation (RHF).
            </p>
          
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
            
            <h1>Perm State Medical University Fees Structure</h1>
            <div className="fees-table-container">
                <table className="fees-table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Tuition Fee</th>
                            <th>Hostel Fee</th>
                            <th>Mess Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1st Year</td>
                            <td>6,000 US Dollars</td>
                            <td>Included in Tuition Fee</td>
                            <td>1,500 US Dollars</td>
                        </tr>
                        <tr>
                            <td>2nd – 6th Year</td>
                            <td>6,000 US Dollars (per year)</td>
                            <td>Optional</td>
                            <td></td>
                        </tr>
                        <tr className="total-row">
                            <td>Total Fee</td>
                            <td colSpan="3">37,500 US Dollars (Full Course)</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section  {...getCollapseProps()}>
                <div className="table-container">
                    <table className="responsive-table">
                        <tbody>
                            <tr>
                                <td className="attribute">Year of Establishment</td>
                                <td className="detail">1916</td>
                            </tr>
                            <tr>
                                <td className="attribute">Type of University</td>
                                <td className="detail">Government</td>
                            </tr>
                            <tr>
                                <td className="attribute">Duration of Course</td>
                                <td className="detail">6 years</td>
                            </tr>
                            <tr>
                                <td className="attribute">Recognitions</td>
                                <td className="detail">WDOMS, ECFMG, FAIMER, NMC (erstwhile MCI)</td>
                            </tr>
                            <tr>
                                <td className="attribute">Medium of teaching</td>
                                <td className="detail">English</td>
                            </tr>
                            <tr>
                                <td className="attribute">NEET Requirement</td>
                                <td className="detail">Yes</td>
                            </tr>
                            <tr>
                                <td className="attribute">Eligibility Exam (IELTS/TOEFL)</td>
                                <td className="detail">No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="perm-details">
                    <h1>Perm State Medical University - Recognitions & Accreditations</h1>
                    <h3>Perm State Medical University is nationally and internationally recognized by various organizations of international reputation such as:</h3>
                    <ul>
                        <li>National Medical Commission (erstwhile Medical Council of India);</li>
                        <li>Medical Council of Canada;</li>
                        <li>Ministry of Science and Higher Education, Russia;</li>
                        <li>World Directory of Medical Schools (WDOMS);</li>
                        <li>Education Commission for Foreign Medical Graduates (ECFMG);</li>
                        <li>Registered with Foundation for Advancement of International Medical Education and Research (FAIMER).</li>
                    </ul>
                    <h2>Eligibility Criteria For Admission in Perm State Medical University</h2>
                    <h4>To be eligible for admission  International students are eligible for admission if:</h4>
                    <ul>
                        <li>Student have passed 10+2 with 50% marks in science subjects.</li>
                        <li>The student should have completed 17 years as in the year of admission.</li>
                        <li>The student have qualified NEET exam.</li>

                    </ul>
                    <h2>Admission Process</h2>
                    <ul>
                        <li>Submit the Application form along with the required documents.</li>
                        <li>Pay Fees and get a confirmation letter.</li>
                        <li>Submit Passport, get Visa/Invitation Letter.</li>
                        <li>Get Visa and come to Russia.</li>
                    </ul>
                </div>
                <h2>Documents Required For Admission</h2>
                <h4>At the time of MBBS admissions  the Indian students are required to procure the following documents.</h4>
                <ul>
                    <li>Class 10th pass certificate and mark sheet</li>
                    <li>Class 12th pass certificate and mark sheet</li>
                    <li>NEET score card</li>
                    <li>Valid passport</li>
                    <li>Passport-size photographs</li>
                    <li>Medical test report including HIV negative report.</li>
                </ul>

            </section >
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}
        </div>


    )
}

export default Perm