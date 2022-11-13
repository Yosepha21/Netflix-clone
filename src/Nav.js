import React, { useEffect, useState } from 'react';
// import {Route, Link, Routes, useParams} from 'react-router-dom';
// import {link} from 'react-scroll'
import './Nav.css'

function Nav({NavId,sliderId}) {

  const [show, handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
    //   if(window.scrollY>100){
    //     handleShow(true);
    //   }else handleShow(false)
    // });
      window.scrollY>100? handleShow(true): handleShow(false)
    });
 
    return ()=>{
      window.removeEventListener("scroll")
    };
  },[]);

  return (

    //${show &&"nav_black"}

    <div className={`nav ${show && "nav_black"}`}>
        <img
        className='nav_logo'
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" 
        alt="Netflix logo"
        /> 

      <div className='navHader'>
      <ul>
        <li>
          {/* <a href='Home' duration={500} offset={-55} smooth={true}>Netflix</a>
          <a href='Action'duration={500} offset={-55} smooth={true}>Action</a>
          <a href='comedy'duration={500} offset={-55} smooth={true}>comedy</a> */}

        {/* <link to="Home" duration={500} offset={-55} smooth={true}>Home</link>
        <link to="upcoming"duration={500} offset={-55} smooth={true}>upcoming</link>
        <link to="Trending Now"duration={500} offset={-55} smooth={true}>Trending Now</link>
        <link to="Netflix Orginal"duration={500} offset={-55}smooth={true}>Netflix Orginal</link>
        <link to="Tope Rated" duration={500} offset={-55}smooth={true} >Tope Rated</link>
        <link to="popular" duration={500} offset={-55} smooth={true}>popular</link> */}
        </li>
    </ul>
    </div>
        <img
        className='nav_avatar'
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png
        "
        alt="Avator logo"
        />
    </div>
  )
}

export default Nav;