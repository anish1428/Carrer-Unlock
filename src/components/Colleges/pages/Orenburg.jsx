import React from 'react'
import './Orenburg.css'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/orenburg.jpg"
import slide2 from "../../../assets/images/orenburg2.png"
import { useCollapse } from 'react-collapsed'



const Orenburg = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },

    ];
    return (
        <div id='orenburg' className='orenburg-cont'>

            <h1>8.Orenburg State Medical University</h1>
            <p>Established in 1944, Orenburg State Medical University (OrSMU) is one of the top-ranked government medical universities located in the city of Orenburg, Russia. It offers courses leading to officially recognised higher education degrees such as bachelor’s degrees, master’s degrees, and doctorate degrees in several areas of study. The University meets all modern standards and requirements presented to higher medical schools. And that is why, Orenburg State Medical University is the most desired Russian medical university, majorly amongst Indian students who desire to study MBBS in Russia. The medical graduates from OrSMU have been successfully practicing medicine in India, UK, USA, Malaysia, Middle East, and other European countries.</p>
            <div className="image">
                
                    <Carousel2 slides={slides} />
              
            </div>
            <div className="table-container">
                <h2>Orenburg State Medical University Fees Structure 2024</h2>
                <table>
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
                            <td data-label="Year">1st Year</td>
                            <td data-label="Tuition Fee">6,000 US Dollars</td>
                            <td data-label="Hostel Fee">Included in Tuition Fee</td>
                            <td data-label="Mess Fee">1,500 US Dollars</td>
                        </tr>
                        <tr>
                            <td data-label="Year">2nd – 6th Year</td>
                            <td data-label="Tuition Fee">6,000 US Dollars (per year)</td>
                            <td data-label="Hostel Fee">Optional</td>
                            <td data-label="Mess Fee"></td>
                        </tr>
                        <tr>
                            <td data-label="Year">Total Fee in US Dollars</td>
                            <td data-label="Tuition Fee" colSpan="3">37,500 US Dollars (Full Course)</td>
                        </tr>
                       
                    </tbody>
                </table>

            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <div className="orenburg-overview-cont">
                    <h2>Orenburg State Medical University Overview</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>University Recognitions</td>
                                <td>ECFMG, WDOMS, FAIMER, NMC (erstwhile MCI), GMC PLAB</td>
                            </tr>
                            <tr>
                                <td>Medium of Teaching</td>
                                <td>English</td>
                            </tr>
                            <tr>
                                <td>MBBS Course Duration</td>
                                <td>6 years (with internship)</td>
                            </tr>
                            <tr>
                                <td>Eligibility Criteria</td>
                                <td>Qualified Class 12 with 50% marks in PCB</td>
                            </tr>
                            <tr>
                                <td>NEET Required</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>No. of Indian Students (currently enrolled)</td>
                                <td>1200+</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>This overview provides essential information about Orenburg State Medical University, including recognitions, medium of teaching, course duration, and eligibility criteria.</p>
                </div>
                <div className="orenburg-criteria">
                    <h1>Eligibility Criteria for Admission in Orenburg State Medical University</h1>
                    <p>To be eligible for admission in Orenburg State Medical University. International students are eligible for admission if:</p>
                    <ul>
                        <li>Student have passed 10+2 with 50% marks in science subjects.</li>
                        <li>The student should have completed 17 years as in the year of admission.</li>
                        <li>The student have qualified NEET exam.</li>

                    </ul>
                    <h1>Admission Process</h1>
                    <ul>
                        <li>Submit the Application form along with the required documents.</li>
                        <li>Pay Fees and get a confirmation letter.</li>
                        <li>Submit Passport, get Visa/Invitation Letter.</li>
                        <li>Get Visa and come to Russia.</li>

                    </ul>
                    <h1>Documents Required For Admission</h1>
                    <p>At the time of MBBS admissions at Orenburg State Medical University, the Indian students are required to procure the following documents.</p>
                    <ul>
                        <li>Class 10th pass certificate and mark sheet</li>
                        <li>Class 12th pass certificate and mark sheet</li>
                        <li>NEET score card</li>
                        <li>Valid passport</li>
                        <li>Passport-size photographs</li>
                        <li>Medical test report including HIV negative report.</li>
                    </ul>
                </div>
            </section>
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}

        </div>
    )
}

export default Orenburg
