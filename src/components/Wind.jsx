import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/weatherContext";
function Wind() {
  const { weatherData} = useContext(WeatherContext);
  const { windSpeed, windDeg, city, country } = weatherData
  return (
    <div className="col-span-1 p-3 rounded-xl shadow-lg text-gray-600 text-xl">
      <div className="d-flex">
        <span>
          <i className={`wi wi-wind-beaufort-${windSpeed}`}></i>{" "}
        </span>
        <span> {windSpeed}</span>
      </div>
      <div className="d-flex">
        <span>
          <i className="wi wi-direction-up-right"></i>{" "}
        </span>
        <span> {windDeg} °</span>
      </div>
      <div className="d-flex">
        <span>
          {country} - {city}
        </span>
      </div>
    </div>
  );
}

export default Wind;
