import axios from "axios"

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    
})

export const fetchPost = async () => {
  return  api.get("posts")
  
  
}

export  const fetchIndv = async (id)=>{
  try {
    const res = await api.get(`posts/${id}`)
    return res.status === 200 ? res.data : [] 
  } catch (error) {
    console.log(error);
    
  }
   
}