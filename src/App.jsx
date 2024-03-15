import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserProvider from './Provider/UserProvider'
import PostView from './components/PostView'
import Pages from './components/Pages'
import CreateNewPost from './components/CreateNewPost'
import { SearchProvider } from './Provider/SearchContext'
import Search from './components/Search'


function App() {
  return (
    <UserProvider>
        <SearchProvider>
        <BrowserRouter>
        <Routes>
         {/* <Route path='/' element={<Login/>}/> */}
         <Route path='/' element={<SignIn/>} />
         <Route path='/homepage' element={<Home/>}/>
         <Route path='/search' element={<Search/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/createpost' element={<CreateNewPost/>} />
        <Route path="/post/:postId" element={<PostView/>} />
        <Route path='/pages' element={<Pages/>} />
      </Routes>
       </BrowserRouter>
       </SearchProvider>
    </UserProvider>
    
  )
}

export default App
