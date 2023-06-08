import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";
import Spinner from "./Spinner";
import Location from "./Location";
import Map from "./Map";
import sunny from "../assets/image/sunny.gif";
import rainy from "../assets/image/rainy.gif";
import snowy from "../assets/image/snowy.gif";
import cloudy from "../assets/image/cloudy.gif";

function WeatherInfo() {
  const { showInfo, loading, weatherData } = useContext(WeatherContext);
  const {
    temp,
    weatherStatus,
    feelsLike,
    description,
    humidity,
    windSpeed,
    windDeg,
    visibility,
    pressure,
  } = weatherData;
  let weatherClass;
  let weatherBackground;
  switch (weatherStatus) {
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
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="w-full flex justify-between items-center  rounded-2xl p-4 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
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
          {/* right section */}
          <div className="w-full  rounded-2xl p-4 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <div className="grid grid-rows-3 grid-cols-2 gap-y-2 gap-x-3 flex-1 text-gray-700 ">
              <div className="flex justify-between items-center h-8">
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
          </div>
        </div>
        <div className="grid grid-rows-1 grid-cols-5 gap-3 mt-8 text-gray-700">
          <div className=" flex justify-center items-center rounded-2xl p-4 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <div className="flex justify-center items-center gap-4">
              <span>
                <i className="wi wi-humidity text-4xl"></i>{" "}
              </span>
              <span className="text-4xl"> {humidity}%</span>
            </div>
          </div>
          <div className=" flex justify-center items-center rounded-2xl p-4 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <div className="flex justify-center items-center gap-4">
              <span>
                <i className="wi wi-refresh-alt text-4xl"></i>
              </span>
              <span className="text-4xl"> {visibility}KM</span>
            </div>
          </div>
          <div className=" flex justify-center items-center rounded-2xl p-4 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <div className="flex justify-center items-center gap-4">
              <span>
                <i className={`wi wi-wind-beaufort-${windSpeed} text-4xl`}></i>{" "}
              </span>
              <span className="text-4xl"> {windSpeed}m/s</span>
            </div>
          </div>
          <div className=" flex justify-center items-center rounded-2xl p-4 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <div className="flex justify-center items-center gap-4">
              <span>
                <i className={`wi wi-wind-direction text-4xl`}></i>{" "}
              </span>
              <span className="text-4xl"> {windDeg}°</span>
            </div>
          </div>
          <div className=" flex justify-center items-center rounded-2xl p-4 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <div className="flex justify-center items-center gap-4">
              <span>
                <i className={`wi wi-barometer text-4xl`}></i>{" "}
              </span>
              <span className="text-4xl">
                {pressure} <span className="text-sm">hPa</span>
              </span>
            </div>
          </div>
        </div>
        {/* Location and map */}
        <div className="grid grid-row-3 grid-cols-5 md:col-span-4 gap-3 mt-8">
          <Location />
          <Map />
        </div>
      </>
    );
  } else if (loading) {
    return <Spinner />;
  } else {
    return <></>;
  }
}

export default WeatherInfo;
