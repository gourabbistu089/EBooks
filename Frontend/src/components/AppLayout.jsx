import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function AppLayout() {
  return (
    <div>
        <Navbar/>
        <div className=' mt-10 md:mt-14'>
        <Outlet/>
      </div>
        <Footer/>
    </div>
  )
}

export default AppLayout