import { useState } from 'react'
import './App.css'
import CounterBtn from './Components/CounterBtn'
import { useContext } from "react";

import { CounterContext } from "./Context/CounterContext";

function App() {
  const usekarocontextko = useContext(CounterContext)
  console.log(usekarocontextko);
  

  return (
  <>
  
  <h1>Counter Context = {usekarocontextko.count}</h1>
  <CounterBtn />
  <CounterBtn/>
  <CounterBtn/>
  
  </>
  )
}

export default App
