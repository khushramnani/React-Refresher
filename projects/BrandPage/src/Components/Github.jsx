import React, { useEffect } from 'react'
import { useState } from 'react'


const Github = () => {
    const [data,setData]=useState([])

    useEffect( ()=>{
        fetch("https://api.github.com/users/khushramnani")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setData(data)
            
        })
    })
        
    

  return (
    <>
    <div>Users:{data.followers}</div>
    <div>
        <img src={data.avatar_url} alt="" width={100} />
    </div>
    </>
  )
}

export default Github
