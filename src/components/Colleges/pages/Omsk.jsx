import React from 'react'
import './Omsk.css'
import omskfee from '../../../assets/images/OmskFee.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/Omsk.png"

import { useCollapse } from 'react-collapsed'
import LazyLoad from 'react-lazy-load'

function Omsk() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },


    ];
    return (
        <div id='omsk' className='omsk-cont'>
            <h1>3.Omsk State Medical University </h1>
            <p>Omsk State Medical University is the school of medicine and it is located in Omsk, Russia. It was established as the Medical Faculty in the year 1920 as the Siberian Institute of Veterinary Medicine and Zoology. In the year 1921, it was transformed as the West Siberian State Medical Institute. However, in 1925, it was called as the Omsk State Medical Institute. In 1994, it was named as the Omsk State Medical Academy.</p>
            <p>OSMA maintains a good relationship with various educational institutions in Western Europe, the United States, Japan, and other countries. There are 59 departments in this medical University. 73% of the staff members have an academic degree. About 100 MD-PhD full professors and 300 MD-PhD associate professors are working with the University.</p>
            <p>OSMU has the largest library among the medical institutes of Russia. OSMU has over 6,00,000 collections and abundant unique publications are among them. The library comprises fully-equipped computer hall with the Internet access.</p>
            <p>Clinical Departments and Chairs of the University are positioned in the largest municipal hospitals equipped with modern diagnostic facilities. These clinics are being headed by the great scholars of the University. With up-to-date information technologies, teaching procedures are being continuously improving. Students Scientific Society is the pride of OMSU.</p>
            <LazyLoad height={"100%"}>
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
            </LazyLoad>
            <h2> Omsk State Medical University Fee Structure</h2>
            <div className="table-container2">
                <img src={omskfee} alt="" />
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <div className="table-container">
                    <table className="university-table">
                        <thead>
                            <tr>
                                <th>University Recognitions</th>
                                <th>Medium of Teaching</th>
                                <th>MBBS Course Duration</th>
                                <th>Eligibility Criteria</th>
                                <th>NEET Required</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ECFMG, WDOMS, FAIMER, NMC (erstwhile MCI), AMC, GMC PLAB, etc.</td>
                                <td>English</td>
                                <td>6 years (with internship)</td>
                                <td>Qualified Class 12 with 50% marks in PCB</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="section">
                    <h2>Eligibility Criteria For Admission in Omsk State Medical University</h2>
                    <p>To be eligible for admission, international students are eligible if:</p>
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
                        <li>NEET Result/Admit Card.</li>
                        <li>Scanned copy of Passport (first and last page)</li>
                        <li>ID Proof (Adhar, PAN, Driving License, etc.) if Passport is not ready at the time of application.</li>
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

export default Omsk
