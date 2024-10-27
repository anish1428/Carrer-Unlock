import React from 'react';
import './Pskov.css';
import Carousel2 from '../../Carousel2/Carousel2';
import './Allclg.css';
import slide1 from '../../../assets/images/Pskov1.jpg';
import slide2 from '../../../assets/images/Pskov2.jpg';
import { useCollapse } from 'react-collapsed';
import LazyLoad from 'react-lazy-load';

const Pskov = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const slides = [
        { src: slide1, alt: 'Slide 1' },
        { src: slide2, alt: 'Slide 2' },
    ];

    return (
        <div id='pskov' className='pskov-cont'>
            <h1>10. Pskov State University</h1>
            <p>Pskov State University, Russia, is one of the renowned public institutions offering higher education in Russia. The university was established in 2010. The Academic structure of the university consists of 16 faculties including medical education faculty and more. PskovSU today includes more than 10,000 students and over 500 teachers, among them there are Honored Teachers of Russia, Honorary Workers of secondary vocational education, and Candidates of Science. The university widely implements innovative approaches to teaching and research activities. The university has fully equipped advanced classrooms with modern equipment, laboratories, workshops, 10 computer labs, a large sports hall, a conference hall for 300 people, and a library with a loan department. Pskov State University is one of the largest research centers and a training base for scientific personnel in the Pskov region and the North-West of Russia. The university offers the best education to all its students who are pursuing MBBS in Russia and also ensures the holistic development of each student. At the university campus, there are different sports sections such as basketball, volleyball, football, and table tennis. The university further offers various extracurricular activities for the students to actively participate in various events.</p>
            
                <div className="image">
                    <Carousel2 slides={slides} />
                </div>
             

            <div className="fees-table-container">
                <table className="fees-table">
                    <thead>
                        <tr>
                            <th>Tuition Fee including Hostel</th>
                            <th>Year 1</th>
                            <th>Year 2</th>
                            <th>Year 3</th>
                            <th>Year 4</th>
                            <th>Year 5</th>
                            <th>Year 6</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tuition Fees ($)</td>
                            <td>$3,500</td>
                            <td>$3,500</td>
                            <td>$3,500</td>
                            <td>$3,500</td>
                            <td>$3,500</td>
                            <td>$3,500</td>
                            <td>$21,000</td>
                        </tr>
                        <tr>
                            <td>Hostel</td>
                            <td colSpan={7}>Included in fees</td>
                           
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            {!isExpanded && (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <table className="info-table">
                    <tbody>
                        <tr>
                            <td className="label">Year of Establishment</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td className="label">University Recognitions</td>
                            <td>
                                <ul>
                                    <li>World Directory of Medical Schools (WDOMS)</li>
                                    <li>Educational Commission for Foreign Medical Graduates (ECFMG)</li>
                                    <li>Foundation for Advancement of International Medical Education and Research (FAIMER)</li>
                                    <li>National Medical Commission (NMC)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="label">Medium of Teaching</td>
                            <td>English</td>
                        </tr>
                        <tr>
                            <td className="label">MBBS Course Duration</td>
                            <td>6 years (with internship)</td>
                        </tr>
                        <tr>
                            <td className="label">Eligibility Criteria</td>
                            <td>
                                <ul>
                                    <li>Minimum 50% aggregate score in PCB subjects.</li>
                                    <li>Minimum 17 years of age as of 31st December in the admission year.</li>
                                    <li>Qualifying NEET score.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="label">NEET Required</td>
                            <td>Mandatory</td>
                        </tr>
                        <tr>
                            <td className="label">Requirement of IELTS/TOEFL</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
                <h1>Pskov State University Fees Structure</h1>
                <div className="pskov-info">
                    <h2>Pskov State University - Recognitions and Accreditations</h2>
                    <ul>
                        <li>National Medical Commission (erstwhile Medical Council of India);</li>
                        <li>Ministry of Education and Science of the Russian Federation;</li>
                        <li>World Directory of Medical Schools (WDOMS);</li>
                        <li>Education Commission for Foreign Medical Graduates (ECFMG);</li>
                        <li>Registered with the Foundation for Advancement of International Medical Education and Research (FAIMER).</li>
                    </ul>
                    <h1>Study MBBS at Pskov State University, Russia</h1>
                    <h2>Eligibility Criteria for MBBS Admissions to Pskov State University</h2>
                    <ul>
                        <li>Student must have passed 10+2 with 50% marks in science subjects.</li>
                        <li>The student should have completed 17 years as of 31st December in the admission year.</li>
                        <li>The student must have qualified the NEET exam.</li>
                    </ul>
                    <h2>Admission Process</h2>
                    <ul>
                        <li>Submit the Application form along with the required documents.</li>
                        <li>Pay Fees and get a confirmation letter.</li>
                        <li>Submit Passport, get Visa/Invitation Letter.</li>
                        <li>Get Visa and come to Russia.</li>
                    </ul>
                    <h2>Documents Required For Admission</h2>
                    <ul>
                        <li>Class 10th pass certificate and mark sheet</li>
                        <li>Class 12th pass certificate and mark sheet</li>
                        <li>NEET score card</li>
                        <li>Valid passport</li>
                        <li>Passport-size photographs</li>
                        <li>Medical test report including HIV negative report</li>
                    </ul>
                    <h2>Why Study MBBS at Pskov State University, Russia?</h2>
                    <ul>
                        <li>Pskov State University Institute of Medicine and Experimental Biology is the flagship university offering MBBS in Russia for Indian students.</li>
                        <li>The university is located in Pskov, Northwestern Russia.</li>
                        <li>The university is approved by medical councils globally.</li>
                        <li>No donations are required for Admission.</li>
                        <li>Indian Students must qualify NEET to study MBBS in Pskov State University.</li>
                        <li>Budget-friendly MBBS in Russia.</li>
                        <li>High-quality MBBS Degree.</li>
                        <li>English Medium MBBS Degree.</li>
                        <li>Hands-on practical training for the students.</li>
                        <li>Excellent teaching staff and renowned Doctors.</li>
                        <li>Advanced classrooms with modern equipment and technologies to educate students.</li>
                        <li>Medical facilities include Medical Research Center, Scientific Laboratories, etc.</li>
                        <li>The university has a library equipped with more than 1 million copies of publications and represents a large collection of scientific, technical, humanitarian, socio-economic literature and fiction. It also includes scientific, academic, reference literature, periodicals, thesis abstracts, regulatory and technical documents, and rare books of the 18-20 centuries.</li>
                        <li>Social, cultural, and humanitarian activities are promoted at the university.</li>
                        <li>Graduates from the university can practice medicine worldwide post qualifying the Medical Licensing Examination of the specific country.</li>
                        <li>The university has an International relations department for foreign students.</li>
                        <li>The university encouraged International Exchange programs for the development of the students.</li>
                    </ul>
                    <h2>Student Life At Pskov State University</h2>
                    <ul>
                        <li>Pskov State University provides a comfortable atmosphere to the students.</li>
                        <li>There are 11 well-furnished dormitories in the university with facilities including kitchens, bathrooms, beds, tables, chairs, living rooms, studying and leisure rooms, internet access, etc.</li>
                        <li>The university ensures a culturally diverse environment with the presence of students from different countries of the world.</li>
                        <li>The university has a library with a rich collection of reference books, publications and represents a large collection of scientific, technical, humanitarian, socio-economic literature and fiction.</li>
                        <li>Students are encouraged to participate in various educational programs including conferences, seminars, Semester exchange programs, etc.</li>
                        <li>The students of PskovSU are urged to take an interest in different social exercises, sports, courses, meetings, and examinations held in colleges of different nations.</li>
                        <li>The university has its own sports centers, health and rehabilitation center, etc. for the well-being of the students.</li>
                        <li>PskovSU provides many opportunities for the MBBS students at the university to realize their creative potential, display their talents and abilities, and to develop professional skills on the basis of research centers, business incubators, clubs, studios, and creative teams.</li>
                    </ul>
                    <h2>Pskov - City at a Glance</h2>
                    <ul>
                        <li>Pskov is a city in northwestern and the administrative center of Pskov Oblast, Russia.</li>
                        <li>The distance from Moscow to Pskov is 608.6 km.</li>
                        <li>Pskov is one of the oldest cities in Russia by population.</li>
                        <li>Pskov was historically known in English as Plescow.</li>
                        <li>Pskov has a humid continental climate with warm summers and cold and long winters.</li>
                        <li>Most popular places in Pskov:
                            <ul>
                                <li>Pskov Kremlin</li>
                                <li>Aquapolis Water Park Pskov</li>
                                <li>Pskov Krom</li>
                                <li>Art Museum-Reserve</li>
                                <li>Monument to Princess Olga</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            {isExpanded && (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}

        </div>
    );
};

export default Pskov;
