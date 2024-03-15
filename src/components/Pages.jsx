import React, { useState } from 'react'
import Navbar from './Navbar'
import '../styles/Pages.css'
import { HiUser } from 'react-icons/hi2';
import { IoMdInformationCircle } from "react-icons/io";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Pages() {

  const [pageName, setPageName] = useState('');
  const [category, setCategory] = useState('');
  const [bio, setBio] = useState('');
 
  const navigate = useNavigate();

  const iconStyle10 = {
    paddingLeft: '0px',
    paddingTop: '5px',
    color: 'white'
  };

  const iconStyle11 = {
    color: 'grey'
  };
 function handleOnclick(){
  alert("Page created.");
  navigate('/homepage');   
 }

  return (
    <div className='Pages-container'> 
        <Navbar/>
        <div  className='Pages-container-maindiv'>

        <div className='Pages-container-div1'>
        <p className='createpage-head'>Create a Page</p>
        <p className='createpage-p'>Your page is where people go to learn more about you. Make sure that yours has all of the information they may needed.</p>
        <input
          type="text"
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
          placeholder="Page name(required)"
          className='Pages-container-div1-input input1'
          required
        />
        <div className='createpage-p2'>Use the name of your business, brand or organization or a name that helps explain your page</div>
      
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='Pages-container-div1-input input2'
          required
        >
        <option value="">Category(required)</option>
        <option value="actor">Actor</option>
        <option value="travel">Travel</option>
        <option value="cooking">Cooking</option>
        <option value="artist">Artist</option>
        <option value="sports">Sports</option>
        <option value="personal blog">Personal blog</option>
        </select>


        {/* <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category(required)"
          className='Pages-container-div1-input input2'
          required
        /> */}
        <div className='createpage-p2'>Enter a category that best describes you</div>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio(optional)"
          className='Pages-container-div1-input input3'
          required
        />
        <div className='createpage-p2'>Tell people a little about what you do.</div>
        <button  className='createpage-btn' onClick={handleOnclick}>Create Page</button>
        </div>

      

        <div className='Pages-container-div2'>

         <div className='Photo-container-sub' >
          <div className='Photo'></div>
          <div className='iicon'><HiUser size={102} style={iconStyle10}/>
          </div>
          {pageName? <div className='page-name-new'>{pageName}</div> :<div className='page-name'>Page name</div>}
          <div className='bio'>{bio}</div>
          <div className='line7'></div>
          <div className='intro'>
            <h3>Intro</h3>
            <div className='intro-cont'>
            <div className='intro-cont-icn'> <IoFileTrayFullSharp size={20} style={iconStyle11}/></div>
            <div> 0 followers</div>
            </div>
            
            <div className='intro-cont'>
            <div className='intro-cont-icn'> <IoMdInformationCircle size={20} style={iconStyle11}/></div> <div> Page. &nbsp; {category}</div>
            </div>
            
          </div>
            
         </div>
              
        </div>

        </div>
    </div>
  )
}

export default Pages