import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../UI/Card'
import { fetchPost } from '../Api/Index'

const FetchOld = () => {
const [post , setPost] = useState([])

const getPostData = async ()=>{
    try {
       const res = await fetchPost() 
       setPost(res.data)
    } catch (error) {
        console.log(error);
        
    }
}

useEffect(()=>{
    getPostData()
})

  return (
    <div className='h-full  w-full grid grid-cols-3 grid-rows-1 items-center justify-center'>

        {post.map((e)=>{
            return  <Card title={e.title} body={e.body} />

        }) }
    </div>
  )
}

export default FetchOld
