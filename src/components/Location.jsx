import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/weatherContext";

function Location() {
  const { weatherData } = useContext(WeatherContext);
  const { city, country } = weatherData;
  return (
    <div className="col-span-5 lg:col-span-1 row-span-1">
      <div className="w-full h-full flex justify-center items-center  rounded-2xl p-8 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
        <span className="text-2xl text-gray-700">
          {country} - {city}
        </span>
      </div>
    </div>
  );
}

export default Location;
