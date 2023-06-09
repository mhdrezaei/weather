import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/weatherContext";
import Card from "./card/Card";

function Summary() {
  const { weatherData } = useContext(WeatherContext);
  const { humidity, pressure, windSpeed, windDeg, visibility } = weatherData;
  return (
    <Card>
      <div className="grid grid-rows-5 lg:grid-rows-3 grid-cols-1 lg:grid-cols-2  gap-y-2 gap-x-3 flex-1 text-gray-700 ">
        <div className="flex  justify-between items-center h-8">
          <label>Humidity:</label>
          <label>{humidity} %</label>
        </div>
        <div className="flex justify-between items-center h-8">
          <label>Pressure:</label>
          <label>{pressure} hPa</label>
        </div>
        <div className="flex justify-between items-center h-8">
          <label>Wind Speed :</label>
          <label>{windSpeed} m/s</label>
        </div>
        <div className="flex justify-between items-center h-8">
          <label>Wind Degree :</label>
          <label>{windDeg} °</label>
        </div>
        <div className="flex justify-between items-center h-8">
          <label>Visibility :</label>
          <label>{visibility} km</label>
        </div>
      </div>
    </Card>
  );
}

export default Summary;
