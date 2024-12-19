import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed ] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str+= "123456789"
    if (charAllowed) str+= "!@#$%^&*_-+=`~?/{}[]|\<>"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length +1)

      pass += str.charAt(char)
      
    }

    setPassword(pass)


  } , [length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{
  passwordGenerator()
},[length, numberAllowed , charAllowed , passwordGenerator])


//ref

const passwordref = useRef(null)

const copyPasswordToClipboard = useCallback(()=>{
  passwordref.current?.select()
  passwordref.current?.setSelectionRange(0,24)
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
    <div className='w-full max-w-lg shadow-md rounded-lg mx-auto p-4 my-8 text-white bg-slate-500 text-center'>
      <h1 className='font-mono text-black text-2xl py-3 '>Password Generator</h1>
    <input type="text"
    ref={passwordref}
      value={password}
      className='bg-gray-300 text-orange-500 p-2 rounded-l-lg'
      placeholder='password'
      readOnly
    
    />
    <button onClick={copyPasswordToClipboard}  className='p-2 bg-blue-500 text-white rounded-r-lg  '>Copy!</button>
    <div className="inputs flex w-full p-4 gap-4">
      <label htmlFor="">length: {length}</label>
      <input type="range"
      min={8}
      max={24}
      value={length}
      onChange={(e)=> {setLength(e.target.value)}}
      className='cursor-pointer'
      />
      <label htmlFor="">Number</label>
      <input type="checkbox"
      defaultChecked={numberAllowed}
      onChange={()=> setNumberAllowed((prev) => !prev)}
      />
      <label htmlFor="">Character</label>
      <input type="checkbox"
      defaultChecked={charAllowed}
      onChange={()=> setCharAllowed((prev) => !prev)}
      />
    </div>
    </div>
    </>
  )
}

export default App
