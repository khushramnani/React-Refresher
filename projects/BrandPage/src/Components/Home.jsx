import React from 'react'
import Navbar from './Navbar'
import BrandImg from './BrandImg'
import Content from './content'
const Home = () => {
  return (
  
          <>
    <div className="h-[100vh]">
    {/* <Navbar/> */}

    <div className="container w-full flex gap-4 items-center justify-between px-20 pt-8">
    <div className="w-[50%] p-12 leading-10">
    <Content/>
    </div>
    <div className="image w-full">
    <BrandImg/>
    </div>
    </div>
    </div>
    </>
   
  )
}

export default Home
