import React from 'react'
import './Collegelist.css'
import { Link } from 'react-scroll'

const Collegelist = () => {
   
    return (
        <div id='collegeList' className='collegelist-cont'>
            <h1>All Our Partnership Medical Colleges Names</h1>
            <p>Click the names for their details</p>
            <ul>
                <li><Link to='mordovia' smooth={true} offset={-60} duration={500} >Mordovia state medical university</Link></li>
                <li><Link to='Northwest' smooth={true} offset={-60} duration={500} >North Western medical university peterburg </Link></li>
                <li><Link to='omsk' smooth={true} offset={-30} duration={500} >Omsk State Medical University </Link></li>
                <li><Link to='northen' smooth={true} offset={-60} duration={500} >Northen State Medical University </Link></li>
                <li><Link to='ulyan' smooth={true} offset={-60} duration={500} >Ulyanovsk state medical university</Link></li>
                <li><Link to='ossetian' smooth={true} offset={-60} duration={500} >North ossetian medical university</Link></li>
                <li><Link to='ural' smooth={true} offset={-60} duration={500} >URAL STATE UNIVERSITY</Link></li>
                <li><Link to='orenburg' smooth={true} offset={0} duration={500} >Orenburg State Medical University</Link></li>
                <li><Link to='kemrovo' smooth={true} offset={-60} duration={500} >Kemrovo State Medical University </Link></li>
                <li><Link to='pskov' smooth={true} offset={-10} duration={500} >Pskov State University </Link></li>
                
                <li><Link to='perm' smooth={true} offset={-4} duration={500} >Perm State Medical University </Link></li>
              

                <li><Link to='bashkir' smooth={true} offset={-40} duration={500} >Bashkir State Medical University </Link></li>
                <li><Link to='chuvash' smooth={true} offset={-50} duration={500} >Chuvash State Medical University  </Link></li>
                
               
                

            </ul>
        </div>

    )
}

export default Collegelist
