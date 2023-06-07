import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/weatherContext";

function Location() {
  const { city, country } = useContext(WeatherContext);
  return (
    <div className="p-3 rounded-xl shadow-lg text-gray-600 card location">
      <span>
        {country} - {city}
      </span>
    </div>
  );
}

export default Location;
