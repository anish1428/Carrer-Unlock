import React from 'react'
import "../../../index.css"
import './Allclg.css'
import './Mipt.css'
import Carousel2 from '../../Carousel2/Carousel2'
import slide1 from "../../../assets/images/Mipt.jpg"
import { useCollapse } from 'react-collapsed'
import Table from './Table'




const Mipt = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    const slides = [
        { src: slide1, alt: 'Slide 1' },


    ];
    return (
        <div id='Mipt' className='college-cont'>
            <h1>1.Moscow Institute of Physics and Technology  </h1>
            <p>Moscow Institute of Physics and Technology (MIPT) is a leading Russian university in STEM education and research. It is ranked among the best 100 universities for Natural Sciences by both Quacquarelli Symonds and Times Higher Education. The strong alumni community is spread globally and includes distinguished scientists, businessmen, politicians, people of art, astronauts, and Nobel laureates. </p>

            <div className="image">
                <Carousel2 slides={slides} />
            </div>

            <h1>Phystech School of Applied Mathematics and Computer Science</h1>
            <p>The Phystech School of Applied Mathematics and Computer Science has been established to accumulate and develop the competences currently called for in mathematics and computer science, as well as for their applications. It provides programs that are unmatched in Russia in the areas of advanced combinatorics and network applications, machine learning, robotics, data analysis and predictive modeling, experimental economics, applied computational geophysics, and many more.
                Bachelor in Computer science on Campus
            </p>
            <div className='centre'>
                <div className='mipttb-cont' >
                    <div className='mipttb-row'>


                        <h1>MEDIUM OF TEACHING</h1>
                        <h4 className='centre'>ENGLISH</h4>
                    </div>
                    <div className='mipttb-row'>
                        <h1>TOTAL FEES</h1>
                        <h4 className='centre'>₹ 554000</h4>
                    </div>
                </div>
            </div>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <p>MIPT strategy includes conducting and developing high-quality research in cutting-edge fields such as quantum and electronic technologies, nanophotonics and plasmonics, biotechnology, applied mathematics, space research, anti-aging science, and many more. The research conducted at MIPT serves both national interests and global goals: humanity's need for high-performance computing, cleaner energy, fighting diseases, prolonged healthy life, managing complicated IT systems, exploring space, etc. There are 92 laboratories at MIPT, and more than 50 of them have been opened over the past five years. The university has summoned top researchers from all over the world to head them. </p>
                <p>In 2018 MIPT was chosen as a National Research Center for Artificial Intelligence. AI Center undertakes breakthrough research in conversational AI, neural networks, deep machine learning, robotics, computer vision, and computing systems for AI. </p>
                <p>Since 2019 MIPT is a member of one of three Russian consortiums for genomic research –  Kurchatov Genomic Center. Scientist of MIPT solve complex problems in medicine and biotechnology using a combination of traditional methods in molecular biology, genetics, virology, endocrinology, and advanced MIPT potential in mathematics and machine learning. </p>
                <p>The curriculum allows MIPT students to gain not only profound knowledge but practical skills as well. The educational process includes entrepreneurship projects and MIPT business accelerator Phystech. Start offers assistance to stellar students in putting their brilliant ideas into practice. As a result, MIPT is the alma mater of billionaires, with ten alumni in the top 200 of the Forbes Russia rankings.</p>
            </section>
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}
            <h1>Phystech School of Biological and Medical Physics</h1>
            <p>We are convinced that both the tuition provided by MIPT and our research should be in line with the latest global research trends. The Phystech School of Biological and Medical Physics offers its students a unique interdisciplinary education recognized throughout the scientific world and highly demanded by the society. The mission of the school is to unite distinguished scholars in chemistry, biology, medicine, mathematics, physics, and engineering using authentic opportunities for hands-on participation to create of new knowledge. We aim to be an internationally recognized interdisciplinary research and academic center for basic science and applied research, empowering active longevity and enhancing the quality of life, addressing the needs of the ageing population and promoting policy improvement. We take on global challenges such as the unprecedented increase in life expectancy, the growing prevalence of age-related health problems, and the need for more basic research on the mechanisms underlying biological aging (targeting dementia, cardiovascular diseases, etc.), and the transition gap between clinical and experimental biogerontology.</p>
            <div className='centre'>
                <div className='mipttb-cont' >
                    <div className='mipttb-row'>


                        <h1>MEDIUM OF TEACHING</h1>
                        <h4 className='centre'>ENGLISH</h4>
                    </div>
                    <div className='mipttb-row'>
                        <h1>TOTAL FEES</h1>
                        <h4 className='centre'>₹ 554000</h4>
                    </div>
                </div>
            </div>
            <h2>The school’s goals are:</h2>
            <p>Delivering original educational programs to ensure the application of scientific expertise to the endorsement of active aging.</p>
            <p>1.Conducting cross-disciplinary, cutting-edge research in biogerontology and technological studies of a high international standard.</p>
            <p>2.Developing a systems biology-informed holistic view of the underlying mechanisms of dementia and arrhythmias.</p>
            <p>3.Fostering domestic and international collaborations to promote academic and research exchange.</p>
            <p>4.Expanding the opportunities of students and their parents.</p>
            <p>5.Advocating on behalf of and having an impact on the community’s aging population.</p>
            <p>6.Advancing the Institute’s mission: to train the next generation of scientists and researchers.</p>
            {isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show More</button>
            )}
            <section {...getCollapseProps()}>
                <p>The Phystech School is a successor of the biomedical physics department. Although the school specializes in several areas of research, its primary focus is the study of aging, which addresses the rapidly growing need for a higher life expectancy and a better quality of life. One of the key areas for this school is bioinformatics, comprising the in silico design of medications, and the various “omic” sciences: connectomics, genomics, proteomics, metabolomics, etc. Another research area is the physics of the human and animal bodies, which includes the study of biomaterials and artificial organs, theranostics, neuro- and cardiophysics, and aging mechanisms. The third focus is on the development of cutting-edge medical equipment and new technologies for health diagnostics, such as gamification, health networks, smart systems for patient rehabilitation, and equipment for early disease detection and prevention.</p>
                <p>The Phystech School of Biological and Medical Physics collaborates with leading Russian research centers, including the Engelhardt Institute of Molecular Biology, RAS; Rogachev National Research Center of Pediatric Hematology, Oncology and Immunology; Institute of Bioorganic Chemistry, RAS; Scientific Research Institute of Physical-Chemical Medicine; Sklifosovsky Research Institute of Emergency Care; Vavilov Institute of General Genetics, RAS; and many more. In other words, the school supports a flexible educational system designed to satisfy the emerging demand for highly qualified neurophysicists, human tissue engineers, and medical equipment architects possessing a solid physical, mathematical, and engineering background fostefed by applied biological and medical knowledge.
                    Bachelor in Biomedical engineering on Campus
                </p>
            </section>
            {!isExpanded ? '' : (
                <button className='show-more-btn' {...getToggleProps()}>Show Less</button>
            )}
           {/* <Table/> */}
        </div>
    )
}

export default Mipt
