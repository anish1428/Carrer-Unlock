import React from 'react'
import slide1 from "../../../assets/images/Northwest1.jpg"
import slide2 from "../../../assets/images/Northwest2.jpg"
import Carousel2 from '../../Carousel2/Carousel2'
import Northwesttb1 from './../../../assets/images/Northwesttb1.png'
import { useCollapse } from 'react-collapsed'

const Northwest = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },


    ];
    return (
        <div id='Northwest' className='college-cont'>
            <h1>2.North western medical university Saint Petersburg </h1>
            <p>North-Western State Medical University named after I.I. Mechnikov was established in 2011. The establishment was a result of amalgamation of 2 medical institutions in Russia, namely St. Petersburg State Medical Academy and St. Petersburg Medical College of Postgraduate Education. The University adapts a cooperative approach while undertaking pedagogical, clinical and research activities. This approach proves helpful in yielding competent specialists who are well versed with knowledge of modern medicine as well as the application of it.
            </p>
            <div className="image">
                <Carousel2 slides={slides} />
            </div>
            <h1>Fees Structure</h1>
            <div className="table1-cont">
                <img src={Northwesttb1} alt="" />
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <p>After completion of the 6 year long undergraduate program, the student is awarded an MD degree (Equivalent of MBBS degree in India. The language of instruction for the entire curriculum is English so that international students can participate in this program.
                </p>
                <p>Speaking on the basis of facts & figures, there are more than 4,500 students enrolled at the university under various disciplines. The North-Western State Medical University Saint Petersburg also has a good international student base with 400+ foreign students hailing from different countries. The faculty pool comprises of 1,200+ lecturers operating under 7 faculties.
                </p>
                <p>The University is further known for its impressive facilities that enable students’ learning. These include 225 clinical practice bases where clinical training is imparted to the students, 9 laboratories, etc. among other facilities. The University also has tie-ups with 60+ foreign universities which help promoting student exchange program.
                </p>
                <h1>Why study in North Western State Medical University?</h1>
                <p>
                    Even though North Western State Medical University was founded only a decade ago as per the record, the merger of the 2 institutes that led to its establishment had significant amount of experience. Therefore the university, in a way, holds a good experience. Other reasons for why a student may choose this university are listed below.
                </p>
                <p>The North-Western State Medical University ranking does fairly good on both national and international level. The University is ranked 81st among 375 Universities across Russia. On global level, the University is ranked 2,844th out of 40,000 universities.
                    The University, as mentioned earlier, has purely English taught program which makes it easier for an international student to study in Russia. Yet, it is recommended to study to learn a bit of Russian language for the purpose of getting along with the Russian locals and being able to interact with the patients during clinical postings.
                </p>
                <h1>Eligibility Criteria to Study MBBS at North Western State Medical University</h1>
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
                <h1>Student Life at North Western State Medical University</h1>
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

export default Northwest
