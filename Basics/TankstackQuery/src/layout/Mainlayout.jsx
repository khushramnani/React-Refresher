import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../UI/Footer'
import Header from '../UI/Header'
const Mainlayout = () => {
  return (
    <>
    <div className='bg-gray-800 text-white  w-full '>

    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Mainlayout
