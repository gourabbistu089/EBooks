import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBook from './components/FreeBook'
import Home from './pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Course from './pages/Course'
import AppLayout from './components/AppLayout'
import Signup from './pages/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Login from './pages/Login'
function App() {
  const [authUserInfo, setAuthUserInfo] = useAuth();
  console.log(authUserInfo)
  return (
    <>
     <Routes>
      <Route path='/' element={<AppLayout/>}>
      <Route index element={<Home/>}/>   
      <Route path='/course' element={authUserInfo ? <Course/> : <Navigate to="/signup" />}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App