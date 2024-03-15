import React from 'react'
import Post from './Post'
import { useSearch } from '../Provider/SearchContext';
import '../styles/Search.css'

function Search() {

    const { searchTerm, searchResults, handleChange } = useSearch();

  return (
    <>
        {searchResults?
        <div className='search-result'>
            <h2>Search result for {searchTerm}</h2>
            {  searchResults.map((post) => (
         <Post key={post._id} post={post} />
        ))}
        </div>
        :<h2>No Search result for {searchTerm}</h2>
        }
    </>
  )
}

export default Search