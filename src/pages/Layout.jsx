import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileHeader'

function Layout() {
  return (
    <div className='p-2'>
      <Header/>
      <Outlet/>
      <MobileBottomNav/>     
       {/* <Footer/> */}
      
    </div>
  )
}

export default Layout
