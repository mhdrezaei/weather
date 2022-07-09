import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";
import Spinner from "./Spinner";
import Temperature from "./Temperature";
import Wind from "./Wind";
import WeatherStatus from "./WeatherStatus";
import sunny from "../assets/image/sunny.gif";
import rainy from '../assets/image/rainy.gif'
import snowy from '../assets/image/snowy.gif'
import cloudy from '../assets/image/cloudy.gif'

function WeatherInfo() {
  const { showInfo, loading, weatherStatusClass } = useContext(WeatherContext);
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
        <hr className="weather-hr" />
        <div className="weather-info">
          <div
            className="weather-icon"
            style={{
              backgroundImage: `url(${weatherBackground})`,
              backgroundRepeat: "none",
              backgroundSize: "cover",
            }}
          >
            <span>
              <i class={`wi ${weatherClass}`}></i>
            </span>
          </div>
          <div className="weather-description">
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
