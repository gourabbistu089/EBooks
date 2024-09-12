import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBook from './components/FreeBook'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Course from './pages/Course'
import AppLayout from './components/AppLayout'
import Signup from './pages/Signup'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<AppLayout/>}>
      <Route index element={<Home/>}/>   
      <Route path='/course' element={<Course/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App