import React, { useState } from 'react'
import '../styles/LeftSide.css'

import { HiUser } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { PiUsersThreeFill } from "react-icons/pi";
import { GoBookmarkFill } from "react-icons/go";
import { FaStore } from "react-icons/fa";
import { BiCalendarStar } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { RiFolderVideoFill } from "react-icons/ri";
import { AiFillFlag } from "react-icons/ai";
import { FaClock } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { Link } from 'react-router-dom';

function LeftSide() {

  const [showMore, setShowMore] = useState(false);

  function showMoreClick(){
    console.log("clicked");
    setShowMore(!showMore);
  }

  const iconStyle = {
    color: '#437DE3'
  };

  const iconStyle3 = {
    paddingLeft: '3px',
    paddingTop: '6px',
    color: 'white'
  };
  

  return (
    <div  className='leftside-container'>
      <div  className='left-ele cant-select'>
        <div className='left-profile'><HiUser size={24} style={iconStyle3} /></div>
        <div className='left-profile-val'>Profile</div> </div>


        <Link to="/pages" className='leftside-link'>
        <div className='left-ele'>
          <div><AiFillFlag size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Pages</div>
      </div></Link>
        

      

      {showMore?
       
      <div>

<div className='left-ele cant-select'>  
          <div><HiUsers size={24}  style={iconStyle}/></div>
          <div className='left-profile-val'>Find Friends</div></div>

      <div className='left-ele cant-select'>
      <div><GoBookmarkFill  size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Saved</div>
      </div>
      
      <div className='left-ele cant-select'>
      <div><PiUsersThreeFill size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Groups</div>
      </div>
      
      <div className='left-ele cant-select'>
      <div><BiCalendarStar size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Events</div>
      </div>
      <div className='left-ele cant-select'>
      <div><FaFacebookMessenger size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Messenger</div>
      </div>

        <div className='left-ele cant-select'>
      <div><RiFolderVideoFill  size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Videos</div>
      </div>

      <div className='left-ele cant-select'>
      <div><FaStore size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Marketplace</div>
      </div>

      <div className='left-ele'>
      <div><FaClock size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Memories</div>
      </div>

      <div className='left-ele cant-select'>
      <div><IoIosStats  size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>Ads Manager</div>
      </div>  

      <button className='left-ele cant-select' onClick={showMoreClick}>
          <div><BiSolidUpArrow size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>See less</div>
      </button>
      
      </div>

      :
      <div>

         <button className='left-ele left-btn' onClick={showMoreClick}>
          <div><BiSolidDownArrow  size={24} style={iconStyle}/></div>
          <div className='left-profile-val'>See More</div>
         </button> 

      </div>}

    </div>
  )
}

export default LeftSide