import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './contact'

function App() {
  <h1>Navbar</h1>

  return (
    <>
    <BrowserRouter>
    <h1>navbar component</h1>
    <Navbar/>
    <Routes>
     
       <Route path='/'element={<Home/>}/>
       <Route path='/about' element={<About/>} />
       <Route path='/contact'element={<Contact/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
