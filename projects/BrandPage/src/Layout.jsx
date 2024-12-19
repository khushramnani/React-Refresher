import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import About from "./Components/About"
import { Outlet } from "react-router-dom"
const Layout = ()=>{
  return(
<>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>



    // <>
    // <div className="h-[100vh]">
    // <Navbar/>

    // <div className="container w-full flex gap-4 items-center justify-between px-20 pt-8">
    // <div className="w-[50%] p-12 leading-10">
    // <Content/>
    // </div>
    // <div className="image w-full">
    // <BrandImg/>
    // </div>
    // </div>
    // </div>
    // </>
  )
}



export default Layout