import React from 'react'
import "../../../index.css"
import petrojatb1 from './../../../assets/images/petrojatb1.png'
import petrojatb2 from './../../../assets/images/petrojatb2.png'

const Petroja= () => {
    return (
        <div id='petroza' className='college-cont'>
            <h1>10. Petrozavodsk State Medical University </h1>
            <p>The Petrozavodsk State Medical University, situated in Russia, was founded in 1940. The city of Petrozavodsk, in the Russian Republic of Karelia, is where Petrozavodsk State University is located.   </p>
            <p>The NMC, earlier known as MCI and the Ministry of Education and Science of the Russian Federation both acknowledge Petrozavodsk State Medical University as one of the country’s largest and most prestigious coeducational higher education institutions.</p>
            <p>Petrozavodsk State University in Russia provides bachelor’s and master’s degree programs. There are 12 faculties in total, 89 different departments, 8 educational institutes, 84 fully equipped laboratories, and 27 innovative departments at Petrozavodsk State University. Petrozavodsk State Medical University has a renowned teaching faculty that includes 529 Candidates of Science and a variety of Associate Professors, with 139 Doctors of Science and a sum of 90 Professors. </p>
            <p>More than sixteen thousand undergraduate and postgraduate students from various countries attend Petrozavodsk State Medical University. Petrozavodsk State Medical University MBBS  admission fee structure is considered one of the most affordable in Russia. </p>
            <div className="table1-cont">
                <img width={"1000px"} src={petrojatb1} alt="" />
            </div>
            <h1>Petrozavodsk State Medical University Fees Structure</h1>
            <div className="table1-cont">
                <img src={petrojatb2} alt="" />
            </div>
            <h1>Eligibility Criteria and Admission Process for MBBS at Petrozavodsk State University</h1>

            <div class="criteria">
                <h2>Eligibility Criteria</h2>
                <p>To be eligible for admission to MBBS, students must meet the following criteria:</p>
                <ul>
                    <li>The student must appear in the National Eligibility Entrance Test (NEET) Medical assessment.</li>
                    <li>The aspirant must score up to 50% in Physics, Biology, and Chemistry.</li>
                    <li>Applicant must be up to 17 years old as of December 31 of that academic year.</li>
                    <li>The student must submit a medical certificate and health insurance documents.</li>
                </ul>
            </div>

            <div class="process">
                <h2>Admission Process</h2>
                <ul>
                    <li>Submit the Application form along with the required documents.</li>
                    <li>Pay Fees and get a confirmation letter.</li>
                    <li>Submit Passport, get Visa/Invitation Letter.</li>
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

        </div>
    )
}

export default Petroja
