import React from 'react'
import UserContext from '../Context/UserContext'
import { useState } from 'react'
import { useContext } from 'react'
import UserContextProvider from '../Context/UserContextProvider'
const Login = () => {

    const [userName,SetUserName] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName,password})
    }

  return (
    <div>
      <h1>Login Page</h1>
      Name: 
      <input type="text" value={userName} onChange={(e)=>SetUserName(e.target.value)} placeholder='your name'  />
      Password: 
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='your password'  />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
