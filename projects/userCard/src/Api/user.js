export const getUserData = async ()=>{
   const response = await fetch('https://randomuser.me/api/',{
        method:"Get"
    })

    return await response.json()
}