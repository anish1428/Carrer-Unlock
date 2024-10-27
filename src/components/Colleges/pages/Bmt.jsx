import React from 'react'
import "../../../index.css"
import Bmttb1 from './../../../assets/images/Bmttb1.png'
// import chuvashtb2 from './../../../assets/images/chuvashtb2.png'
import Carousel2 from '../../Carousel2/Carousel2'
import './Allclg.css'
import slide1 from "../../../assets/images/Bmt.jpg"
import { useCollapse } from 'react-collapsed'

const Bmt = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },

    ];
    return (
        <div id='bmt' className='college-cont'>
            <h1>
                1.  BMT University (Buon Ma Thuot University, Vietnam)

            </h1>
            <div className="image">
                <Carousel2 slides={slides} />
            </div>
            <h2>FEES STRUCTURE</h2>
            <div className="table1-cont">
                <img src={Bmttb1} alt="" />
            </div>
            {isExpanded ?'':(
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
            <h1>Why BMT University?</h1>
            <ul>
                <li>Satisfies all NMC norms with a curated syllabus for Indian students</li>
                <li>Hassle-free Visa process completed within 10 days</li>
                <li>Collaboration with international universities in Japan, Korea, Netherlands, USA, Germany, Taiwan, France, and Malaysia for international education standards</li>
                <li>100% English medium of instruction</li>
                <li>Separate accommodation for boys and girls, with South and North Indian food available</li>
                <li>Cadaver and simulation labs, along with clinical training</li>
                <li>Support services for NEXT/USMLE/PLAB exams</li>
                <li>Opportunities for medical charities and camps for hands-on experience</li>
                <li>Largest and first private medical university and hospital in the Central Highlands region of Vietnam</li>
                <li>University hospital equipped with advanced infrastructure and digital healthcare solutions</li>
                <li>International standard education with Indian faculty available</li>
                <li>6-year course including 1-year internship</li>
                <li>Most affordable tuition fees across Vietnam</li>
                <li>Collaborations with 12 hospitals for clinical practice</li>
            </ul>

            <h1>Why Study MBBS in Vietnam?</h1>
            <ul>
                <li>Tropical climate and similar disease patterns as India</li>
                <li>Short travel time from India (3-5 hours)</li>
                <li>Availability of cadavers in anatomy labs, unique to Vietnam</li>
                <li>Safe and friendly environment for foreigners, with a welcoming attitude</li>
                <li>Similar population density to India for better clinical exposure</li>
                <li>Adaptable climate for Indian students</li>
                <li>Possibility to practice licensing in Vietnam and settle as a doctor</li>
                <li>Large Indian population and availability of Indian food</li>
                <li>Cultural similarities and historical ties between India and Vietnam</li>
                <li>High scope of part-time jobs</li>
                <li>Well-developed country with major industries and international companies</li>
            </ul>

            <h1>About Buon Ma Thuot</h1>
            <ul>
                <li>Greenest city in Vietnam, pleasant for living and studying</li>
                <li>Warm hospitality and friendliness of the people</li>
                <li>Capital of coffee in Vietnam, famous for Dak Lak coffee</li>
                <li>Gateway to UNESCO-listed sites and culturally significant areas in Central Highlands</li>
                <li>Home to Buon Ma Thuot World Coffee Museum</li>
                <li>Beautiful natural landscapes, forests, lakes, waterfalls, and flower farms</li>
                <li>Indian companies invested in coffee, rubber, agriculture, pharmaceuticals, and manufacturing</li>
            </ul>

            </section>
            {!isExpanded ?'':(
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}

        </div>
    )
}

export default Bmt
