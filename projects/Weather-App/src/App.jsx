import { useState, useEffect } from "react";
import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { UseWeather } from "./Context/Weather";

function App() {
  const weather = UseWeather();
  console.log(weather);
  // useEffect(()=>{
    //     getweatherdata()
    // },[searchcity])
  const handleSubmit = ()=>{
    weather.getweatherdata()
    console.log("Clicked");
    
  }
  return (
    <>
      <div className="main">
        <h1>Weather Today!</h1>

        <div>
          <Input placeholder="Enter your city to get weather details" />
          <Button func={handleSubmit} name="submit" />
        </div>

        
        {weather.data && weather.data.location && weather.data.current ? (
          <div className="flex flex-col item-center justify-center gap-2">
            <span>Country: {weather.data.location.country}</span>
            <span className="font-bold">
              Temp: {weather.data.current.temp_c}°C
            </span>
            <span className="flex items-center justify-center">
              <img src={weather.data.current.condition.icon} alt="" />
              {weather.data.current.condition.text}
            </span>
          </div>
        ) : (
          <p>Enter a city to see weather details.</p>
        )}
      </div>
    </>
  );
}

export default App;
