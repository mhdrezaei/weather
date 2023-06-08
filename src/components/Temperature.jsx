import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/weatherContext";

function Temperature() {
  const { weatherData } = useContext(WeatherContext);
  const { temp, minTemp, maxTemp } = weatherData;
  return (
    <div className="col-span-1 p-3 rounded-xl shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg text-2xl">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center gap-3">
            <span>
              <i className="wi wi-thermometer"></i>
            </span>
            <span>{temp}°</span>
          </div>
          <p className="small-prag">temprature</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex  justify-center items-center gap-3">
            <div>
              <span className="min-temp">
                <i className="wi wi-thermometer-exterior text-blue-600"></i>{" "}
              </span>
              <span>{minTemp}° </span>
            </div>
            <div>
              <span className="max-temp">
                <i className="wi wi-thermometer text-red-600"></i>{" "}
              </span>
              <span> {maxTemp}°</span>
            </div>
          </div>
          <p className="small-prag"></p>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
