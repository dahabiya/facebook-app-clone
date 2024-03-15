import React from 'react'
import '../styles/RightSide.css'
import { IoAddSharp } from "react-icons/io5";

function RightSide() {

  const iconStyle3 = {
    paddingLeft: '3px',
    paddingTop: '3px',
    color: 'black'
  };

  return (
    <div  className='rightside-container'>
        <div  className='right-ele'>
        <div className='right-add-icon'><IoAddSharp size={23} style={iconStyle3} /></div>
        <div className='right-val'>Create New Group</div> </div>
    </div>

  )
}

export default RightSide