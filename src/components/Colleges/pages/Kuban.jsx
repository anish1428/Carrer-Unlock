import React from 'react'
import './Kuban.css'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/orenburg.jpg"
import { useCollapse } from 'react-collapsed'

const Kuban = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },

    ];
    return (
        <div id='kuban' className='kuban-cont'>
            <h1>4. Kuban State Medical University</h1>
            <p>The Kuban State Medical University was founded in 1920 by the Government of the Russian Federation and to date, it is considered as one of the ancient Universities of Kuban and one of the Top Medical Universities of Russia. The authority of the founder is supervised by the Ministry of Health of the Russian Federation.</p>
             <p>The university occupies a special place in the structure of higher professional education in Russia thanks to the quality management system of vocational education.</p>
             <div className="image">
                <Carousel2 slides={slides} />
            </div>
           <h1>Kuban State Medical University Fee Structure</h1>
            <div className="fees-table-container">

                <table className="fees-table">
                    <thead>
                        <tr>
                            <th>Fees Structure</th>
                            <th>1st Year</th>
                            <th>2nd Year</th>
                            <th>3rd Year</th>
                            <th>4th Year</th>
                            <th>5th Year</th>
                            <th>6th Year</th>
                            <th>Total Course Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tuition Fee</td>
                            <td>$ 2,300</td>
                            <td>$ 2,300</td>
                            <td>$ 2,300</td>
                            <td>$ 2,300</td>
                            <td>$ 2,300</td>
                            <td>$ 2,300</td>
                            <td>$13,800</td>
                        </tr>
                        <tr>
                            <td>Hostel Fee</td>
                            <td>50,000 INR</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Total Fees in Rs</td>
                            <td>₹1,92,000*</td>
                            <td>₹1,92,000*</td>
                            <td>₹1,92,000*</td>
                            <td>₹1,92,000*</td>
                            <td>₹1,92,000*</td>
                            <td>₹1,92,000*</td>
                            <td>₹11,52,000*</td>
                        </tr>
                    </tbody>
                </table>
            </div>       
            <div className="table-container">
                <h1>University Details</h1>
                <table className="details-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>University Recognitions</td>
                            <td>ECFMG, WDOMS, FAIMER, NMC (erstwhile MCI), AMC, GMC PLAB, etc</td>
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
                            <td>Intake Period</td>
                            <td>September</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="section">
                <h2>Eligibility Criteria For Admission in Kuban State Medical University</h2>
                <p>To be eligible for admission, international students must meet the following criteria:</p>
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
                <p>At the time of MBBS admissions, the Indian students are required to procure the following documents:</p>
                <ul>
                    <li>Class 10th pass certificate and mark sheet</li>
                    <li>Class 12th pass certificate and mark sheet</li>
                    <li>NEET score card</li>
                    <li>Valid passport</li>
                    <li>Passport-size photographs</li>
                    <li>Medical test report including HIV negative report</li>
                </ul>
            </div>







        </div>
    )
}

export default Kuban
