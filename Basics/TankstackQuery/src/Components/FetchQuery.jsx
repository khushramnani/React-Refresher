import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../UI/Card'
import { fetchPost } from '../Api/Index'
import {useQuery , QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { NavLink } from 'react-router-dom'
const queryclient = new QueryClient()

const FetchQuery = () => {

const getPostData = async ()=>{
    try {
       const res = await fetchPost() 
    //    return new Promise((resolve)=>{
    //         setTimeout(() => {
    //             resolve(res.data)
    //         }, 3000);
    //    })
    return res.data
    } catch (error) {
        console.log(error);
        throw error
    }
}

const {data , isLoading , isError} = useQuery({
    queryKey:["post"],
    queryFn:getPostData,
})

if (isLoading) return <div>Loading...</div>
if (!data || data.length === 0) return <div>No posts found.</div>;

  return (
    
    <>
   
    <div className='h-full  w-full grid grid-cols-3 grid-rows-1 items-center justify-center'>

        {data.slice(0,10).map((e)=>{
            return  <NavLink to={`/fetchindv/${e.id}`}>
            <Card key={e.id} id={e.id} title={e.title} body={e.body} />
            </NavLink>
        }) }
    </div>
  
    </>
  )
}

 const  FetchQueryContainer =()=>{
    return (
        <QueryClientProvider client={queryclient}>
            <FetchQuery/>
        </QueryClientProvider>
    )
} 

export default FetchQueryContainer
