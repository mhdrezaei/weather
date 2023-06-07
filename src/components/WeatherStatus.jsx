import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/weatherContext";

function WeatherStatus() {
  const { humidity, weatherStatus, visibility } = useContext(WeatherContext);
  return (
    <div className="col-span-1 p-3 rounded-xl shadow-lg text-gray-600 text-2xl">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-4">
          <span>
            <i className="wi wi-night-clear"></i>{" "}
          </span>
          <span> {weatherStatus}</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span>
            <i className="wi wi-humidity text-blue-600"></i>{" "}
          </span>
          <span> {humidity} %</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span>
            <i className="wi wi-refresh-alt"></i>
          </span>
          <span> {visibility} KM</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherStatus;
