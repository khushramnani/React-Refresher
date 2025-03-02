import React from 'react'

import { createContext , useState , useContext , useEffect } from 'react'
import fetchApi from '../Api/index'

export const weathercontext = createContext(null)


export const UseWeather = ()=> useContext(weathercontext)
    
const fetchUserLoctionData = ()=>{
    let position = navigator.geolocation.getCurrentPosition()
    console.log(position);
    
}

const WeatherProvider = ({ children }) => {
    const [data , setdata] = useState(null)
    const [searchcity , setsearchcity] = useState(null)
    // useEffect(()=>{
    //     getweatherdata()
    // },[searchcity])
    const getweatherdata = async ()=>{
        try {
            
            if(searchcity){
            const response = await fetchApi(searchcity)
            setdata(response)
            console.log(response);
            } else console.log("data is null");
        } catch (error) {
            console.log(error);
            
        }
        
        
    }

    return (
        <weathercontext.Provider value={{ getweatherdata , setdata , data, searchcity , setsearchcity   }}>
            {children}
        </weathercontext.Provider>
    )
}

export default WeatherProvider
