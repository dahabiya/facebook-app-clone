import React from 'react'
import '../styles/Content.css'
import CreatePost from './CreatePost'
import PostList from './PostList'

function Content() {
  return (
    <div className='content-container'>
      {/* <div>story</div> */}
      <div><CreatePost /></div>
      <div><PostList/></div>
    </div>
  )
}

export default Content