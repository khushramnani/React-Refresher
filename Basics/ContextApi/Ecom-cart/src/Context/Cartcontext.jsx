import React from "react";
import { createContext , useState } from "react";

export const Cartcontext = createContext(null)


const CartContextProvider = (props)=>{
    const [items , setitems] = useState([])
    return(
    <Cartcontext.Provider value={{items , setitems}}>
        {props.children}
    </Cartcontext.Provider>
    )
}

export default CartContextProvider