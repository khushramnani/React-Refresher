import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const CounterContext = createContext(null)
const CounterProvider = (props)=>{
    const [count , setcount] = useState(0)
    return(
    <CounterContext.Provider value={{count , setcount}}>
        {props.children}
    </CounterContext.Provider>
    )
}
 
export default CounterProvider