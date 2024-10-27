import React from 'react'
import "../../../index.css"
import Volgotb1 from './../../../assets/images/Volgotb1.png'
import Volgotb2 from './../../../assets/images/Volgotb2.png'

const Volgo = () => {
    return (
        <div id='volgo' className='college-cont'>
            <h1>11. Volgograd State Medical University </h1>
            <p>Established in 1935, Volgograd State Medical University is one of the most famous and highly reputable Higher Schools both in Russia and abroad. It is proud of its highly-qualified teaching staff, advanced researchers and experienced physicians whose names are world-famous. The university has become a common choice for the Indian students seeking MBBS in Russia.</p>
            <p>The University is accredited by the Russian Ministry for Education for the teaching of both Russian and overseas students. The university is also listed by World Directory Of Medical Schools (WDOMS), Educational Commission for Foreign Medical Graduates (ECFMG), Foundation for Advancement of International Medical Education and Research (FAIMER), World Federation for Medical Education (WFME), erstwhile Medical Council of India (MCI)/ National Medical Commission (NMC),</p>
            <div className="table1-cont">
                <img width={"1000px"} src={Volgotb1} alt="" />
            </div>
            <h1>Volgograd State Medical University Fees Structure</h1>
            <div className="table1-cont">
                <img src={Volgotb2} alt="" />
            </div>
            <h1>Eligibility Criteria and Admission Process for MBBS at Volgograd State Medical University</h1>

            <div class="criteria">
                <h2>Eligibility Criteria For MBBS in Russia</h2>
                <p>The eligibility criteria for MBBS admission at Volgograd State Medical University in Russia is given below:</p>
                <ul>
                    <li>At least 50% aggregate score in Physics, Chemistry, and Biology in Class 12th.</li>
                    <li>At least 17 years of age as on 31 December in the admission year.</li>
                    <li>Qualifying NEET score (50th percentile for general/EWS category and 40th percentile for unreserved category).</li>
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

        </div>
    )
}

export default Volgo
