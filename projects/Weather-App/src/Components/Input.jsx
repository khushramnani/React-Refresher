import React from "react";
import { UseWeather } from "../Context/Weather";

const Input = (props) => {
  const weather = UseWeather();

  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        value={weather.searchcity || ""}
        onChange={(e) =>
          weather.setsearchcity(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
      />
    </div>
  );
};

export default Input;
