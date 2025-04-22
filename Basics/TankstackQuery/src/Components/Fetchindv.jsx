import React from 'react'
import { useParams  , NavLink} from 'react-router-dom'
import {fetchIndv} from '../Api/Index'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const indvClientfetch = new QueryClient()

const FetchindvContainer = () => {
  const {id} = useParams()

const {data , isLoading , error} = useQuery({
  queryKey:["indvpost" , id],
  queryFn:()=>fetchIndv(id)
})

if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data.</div>;
  if (!data) return <div>No data found.</div>

  return (
    <div className='h-screen p-4'>
      Hello id {data.id}
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <NavLink to='/fetchwith-tq'>
      <button className='p-2 bg-green-600 text-2xl text-white shadow-2xl mt-4 cursor-pointer'>
        Go Back
      </button>
      </NavLink>
    </div>
  )
}




const Fetchindv = ()=>{
  return (
    <>
    <QueryClientProvider client={indvClientfetch}>
      <FetchindvContainer/>
    </QueryClientProvider>
    </>
  )
}

export default Fetchindv