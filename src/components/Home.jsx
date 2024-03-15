import React from 'react'
import Navbar from './Navbar'
import LeftSide from './LeftSide'
import Content from './Content'
import RightSide from './RightSide'
import '../styles/Home.css'
import { useSearch } from '../Provider/SearchContext'
import Search from './Search'


function Home() {
  const { searchTerm, searchResults } = useSearch();
  console.log(searchResults)
  return (
    <>
        <Navbar/>
        { searchTerm === '' ? 
          <div className='home-content-container'>
          <div><LeftSide/></div>
          <div><Content/></div>
          <div><RightSide/></div>
          </div>  
        :
        <Search/>
        }
        
    </>
  )
}

export default Home