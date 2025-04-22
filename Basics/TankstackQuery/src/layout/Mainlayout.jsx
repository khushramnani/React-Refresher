import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../UI/Footer'
import Header from '../UI/Header'
const Mainlayout = () => {
  return (
    <>
    <div className='bg-gray-800 text-white h-full w-full '>

    <Header/>
    <Outlet className="h-screen " />
    <Footer/>
    </div>
    </>
  )
}

export default Mainlayout
