import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'
import './Russia.css'
import Navbar from '../Navbar/Navbar'

import Orenburg from './pages/Orenburg'
import Perm from './pages/Perm'
import Pskov from './pages/Pskov'
import Omsk from './pages/Omsk'
import Bashkir from './pages/Bashkir'
import Chuvash from './pages/Chuvash'

import Kemrovo from './pages/Kemrovo'

import Northen from './pages/Northen'
import Ulyano from './pages/Ulyano'
import Ossetian from './pages/Ossetian'
import Mordovia from './pages/Mordovia'
import Ural from './pages/Ural'
import Collegelist from './pages/Collegelist'
import Northwest from './pages/Northwest'




const Russia = () => {
    const[display,setDisplay]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50?setDisplay(true):setDisplay(false);
        })
    },[]);
    return (

        <div className='russia-cont'>
            <Collegelist/>
            <Navbar/>
            <Mordovia/>
            <Northwest/>
            <Omsk/>
            <Northen/>
            <Ulyano/>
            <Ossetian/>

            <Ural/>
            <Orenburg/>
            <Kemrovo/>
            <Pskov/>

            <Perm/>
            
            <Bashkir/>
            <Chuvash/>
           
           
            <div  className={`scroll-arrow ${display?'display':''}`}>
                <Link to='collegeList' smooth={true} duration={500} offset={0}><i class="fa-solid fa-arrow-up"></i> </Link>
            </div>
           
        </div>
    )
}

export default Russia
