import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";
import Spinner from "./Spinner";
import Temperature from "./Temperature";
import Wind from "./Wind";
import WeatherStatus from "./WeatherStatus";
import sunny from "../assets/image/sunny.gif";
import rainy from "../assets/image/rainy.gif";
import snowy from "../assets/image/snowy.gif";
import cloudy from "../assets/image/cloudy.gif";

function WeatherInfo() {
  const { showInfo, loading, weatherStatusClass, temperature } =
    useContext(WeatherContext);
  let weatherClass;
  let weatherBackground;
  switch (weatherStatusClass) {
    case "Clouds":
      weatherClass = "wi-day-cloudy";
      weatherBackground = cloudy;
      break;

    case "Clear":
      weatherClass = "wi-day-sunny";
      weatherBackground = sunny;
      break;
    case "Rain":
      weatherClass = "wi-day-rain";
      weatherBackground = rainy;
      break;
    case "Snow":
      weatherClass = "wi-day-snow";
      weatherBackground = snowy;
      break;

    default:
      weatherClass = "wi-day-sleet";
      weatherBackground = cloudy;
  }

  if (showInfo && loading) {
    return (
      <>
        <hr className="w-full h-1 my-3 text-gray-600" />
        <div className="flex justify-center items-center gap-3">
          <div className="w-full flex justify-between items-center  rounded-2xl p-8 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <span>
              <i
                className={`wi ${weatherClass}  text-gray-500 text-3xl my-auto`}
              ></i>
            </span>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-3">
                <span className="text-4xl text-gray-700">{temperature}°</span>
                <span className="text-sm text-gray-700">
                  Feels like: {temperature}°
                </span>
              </div>
            </div>
          </div>
          <div className="w-full  rounded-2xl p-8 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg"></div>
        </div>
        <div className="weather-info">
          <div className=" flex justify-center items-center w-24 h-24 mx-auto p-3 border border-gray-500 shadow-md rounded-full">
            <span>
              <i
                className={`wi ${weatherClass}  text-gray-500 text-3xl my-auto`}
              ></i>
            </span>
            <div className="flex flex-col justify-center items-center gap-3">
              <span className="text-3xl">{temperature}°</span>
            </div>
          </div>
          <div className="grid grid-cols-3 col-span-1 md:col-span-3 gap-4 mt-12">
            <Temperature />
            <WeatherStatus />
            <Wind />
          </div>
        </div>
      </>
    );
  } else if (showInfo && !loading) {
    return <Spinner />;
  } else {
    return <></>;
  }
}

export default WeatherInfo;
