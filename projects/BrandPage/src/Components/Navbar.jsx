import brandLogo from '/brand_logo.svg'
import {NavLink} from "react-router"


const Navbar = ()=>{
    return(
        <>
        
        <div className="div flex items-center justify-between px-12 py-4">
            <div className="logo flex items-center justify-start">
                <img src={brandLogo} alt="" />
            </div>
            <div className="items">
                <ul className='flex items-center justify-center gap-4 '>
                <NavLink to={"/"} className={({isActive})=> ` ${isActive? "text-orange-600" : "text-black"}`}>Home</NavLink>
                <NavLink to={"About"} className={({isActive})=> `${isActive? "text-orange-600" : "text-black"}`}>About</NavLink>
                <NavLink to={"Products"} className={({isActive})=> `${isActive? "text-orange-600" : "text-black"}`}>Products</NavLink>
                <NavLink to={"Github"} className={({isActive})=> `${isActive? "text-orange-600" : "text-black"}`}>Github</NavLink>
               
            
                
                </ul>
            </div>
            <div className="login">
                <button className='login p-2 px-4 bg-red-600 text-white rounded-md'> Login</button>
            </div>
        </div>
        
        
        
        </>
    )
}

export default Navbar