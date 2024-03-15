import React, { useState } from 'react'
import '../styles/CreatePost.css'

import { HiUser } from "react-icons/hi2";
import { TiVideo } from "react-icons/ti";
import { MdPhotoLibrary } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { Link } from 'react-router-dom';

function CreatePost() {

  let loginUsername = sessionStorage.getItem('userInfo');
  // console.log('craete post', loginUsername);
    const iconStyle3 = {
        paddingLeft: '4px',
        paddingTop: '8px',
        color: 'white'
      };

      const iconStyle = {
        paddingLeft: '8px',
        paddingTop: '10px',
        paddingRight:'8px',
        color: 'red'
      };
      const iconStyle2 = {
        paddingLeft: '8px',
        paddingTop: '10px',
        paddingRight:'8px',
        color: '#43e03a'
      };
      const iconStyle4 = {
        paddingLeft: '8px',
        paddingTop: '10px',
        paddingRight:'8px',
        color: '#edc54c'
      };


  return (

    <div className='createpost-div'>
    
       <div className='createpost-subdiv'>
            <div className='createpost-logo'><HiUser size={34} style={iconStyle3}/></div>
            <Link to="/createpost">
            <button className='createpost-btn' >What's on your mind,{loginUsername.substring(1, loginUsername.length - 1)}?
            </button>
            </Link>
            
        </div>

        <div className='line'></div>


        <div className='createpost-container'>
          <div className='createpost-items hovr1'>
            <div ><TiVideo  size={24}  style={iconStyle}/></div >  
            <div   className='createpost-span'>Live video</div >
            </div>

          <div className='createpost-items hovr1'>
          <div ><MdPhotoLibrary size={24}  style={iconStyle2}/></div >  
          <div  className='createpost-span'>Photo/video</div >
          </div>

          <div className='createpost-items hovr1'>
          <div ><BsEmojiSmile  size={24}  style={iconStyle4}/></div > 
          <div  className='createpost-span'>Feeling/activity</div >
          </div>

        </div>
  
    </div>
  )
}

export default CreatePost