import './App.css'
import { getUserData } from './Api/user'
import { useEffect, useState } from 'react'
import Profile from './Components/Profile'

function App() {
  
  const [data,setData] = useState(null)

  useEffect(()=>{
    getUserData().then((user)=> setData(user.results[0]))

  },[])


 
 
  
  return (

    <>
   
   {/* {data ? (
    <>
    <Profile user={data} name={data.name} picture={data.picture} />
    </>
   ): ( <p>No data found</p> ) } */}
    
    {data && <Profile user={data} name={data.name} picture={data.picture} />}
      
      
    </>
  )
}

export default App
