import React from "react";
import { useContext } from "react";
import WeatherContext from "../context/weatherContext";
import Card from "./card/Card";
function Temperature() {
  const { weatherData } = useContext(WeatherContext);
  const { temp, feelsLike, description, weatherStatus } = weatherData;
  let weatherClass;

  switch (weatherStatus) {
    case "Clouds":
      weatherClass = "wi-day-cloudy";

      break;

    case "Clear":
      weatherClass = "wi-day-sunny";

      break;
    case "Rain":
      weatherClass = "wi-day-rain";

      break;
    case "Snow":
      weatherClass = "wi-day-snow";

      break;

    default:
      weatherClass = "wi-day-sleet";
  }
  return (
    <Card>
      <div className="w-full flex justify-between items-center ">
        <span>
          <i
            className={`wi ${weatherClass}  text-gray-700 text-6xl my-auto`}
          ></i>
        </span>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="text-5xl text-gray-700">{temp}°</span>
            <span className="text-sm text-gray-700">
              Feels like: {feelsLike}°
            </span>
            <span className="text-sm text-gray-700">{description}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Temperature;
