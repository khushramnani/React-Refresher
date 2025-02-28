import React from "react";
import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const CounterBtn =()=>{
    const counter = useContext(CounterContext)
    return(
        <div>
        <button onClick={()=> counter.setcount(counter.count +1) }>Increment</button>
        <button onClick={()=> counter.setcount(counter.count -1)}>Decreament</button>
        </div>
    )
}

export default CounterBtn