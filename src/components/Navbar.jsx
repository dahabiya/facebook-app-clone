import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'

import { FiHome } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuUserCircle2 } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useUser} from '../Provider/UserProvider';
import { TbLogout } from "react-icons/tb";
import { useSearch } from '../Provider/SearchContext';
import Mysvg from './Mysvg';

function Navbar() {

  const [showProfile, setShowProfile] = useState(false);

  const { searchTerm, handleChange } = useSearch();


  const { setUserContext: signOutContext,
    isUserLoggedIn } = useUser();
   const navigate = useNavigate();

   let loginUsername = sessionStorage.getItem('userInfo');


   function handleSignOut() {
    sessionStorage.removeItem('userInfo');

    sessionStorage.removeItem('authToken');
    signOutContext();
    navigate('/')
}

useEffect(() => {
    signOutContext(loginUsername)
}, [])

// useEffect(() => {
//   if (loginUsername) {
//     signOutContext(loginUsername.substring(1, loginUsername.length - 1));
//   }
// }, [loginUsername]);

  const iconStyle = {
    paddingLeft: '5px',
    paddingTop: '5px',
  };
  const iconStyle2 = {
    paddingLeft: '8px',
    paddingTop: '8px',
  };
  const iconStyle3 = {
    paddingLeft: '4px',
    paddingTop: '10px',
    color: 'white'
  };
  const iconStyle4 = {
    paddingTop: '5px'
  }
  const iconStyle5 = {
    paddingLeft: '3px',
    paddingTop: '6px',
    color: 'white'
  };

  const iconStyle6 = {
    paddingLeft: '3px',
    color: 'rgb(77, 75, 75)'
  }
  return (
    <div className='navbar-container'>
        <Link to='/homepage'>
        <div >
            {/* <img  src="https://icons8.com/icon/uLWV5A9vXIPu/facebook" alt="f"/> */}
            {/* <MySvgComponent /> */}
            <Mysvg/>
        </div>
        </Link>
        
        <div className='search'> 
                   {/* <IoSearch size={20} style={iconStyle4}/>  */}
                   <input type=" text" 
                   className='search-span' 
                   placeholder='search facebook'
                   value={searchTerm}
                   onChange={(e) => handleChange(e.target.value)}
                  />
        </div>
        <Link to="/homepage">
        <div className=' mid-ele hovr'> <FiHome size={24} color="#706D6D"  />
        <div class="hide">Home</div>
         </div>
        </Link>
        

        <div className='mid-ele hovr  cant-select'>
        <HiOutlineUsers  size={27.5} style={{ color: "#575555" }} />
        <div class="hide">Friends</div>
        </div>

        <div className='mid-ele hovr cant-select'><LuUserCircle2 size={27} style={{ color: "#706D6D" }} />
        <div class="hide">Groups</div>
        </div>
        <div></div>
        <div></div>
        {/* <div className='fnd-frnds'>find friends</div> */}
        <div className='nav-logo  cant-select '><CgMenuGridO size={29} style={iconStyle}/></div>
        <div className='nav-logo cant-select '><FaFacebookMessenger size={24} style={iconStyle2}/></div>
        <div className='nav-logo cant-select '> <IoNotifications size={24} style={iconStyle2}/></div>
        <div className='nav-logo profile-hover'>
          <HiUser size={33} style={iconStyle3}/>
          <div class="hide-profile">
                <div className='profile-name-container'>

                   <div className='profile-name-icon'>
                   <div className='nav-logo1'><HiUser size={26} style={iconStyle5}/></div></div>
                    <div className='Profile-name'>{loginUsername.substring(1, loginUsername.length - 1)}</div>    
                
                </div>

                <div className='profile-line'></div> 

                
                <button className='logout-container' onClick={handleSignOut} >

                    <div className='logout-btn-icon'><TbLogout size={26} style={iconStyle6}/></div>
                    <div  className='logout-btn'>Log Out</div>
                     
                </button>

           </div>
        </div>
        
    </div>
  )
}

export default Navbar