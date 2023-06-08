import { createContext, useState } from "react";
import { toast } from "react-toastify";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  // loading
  const isLoading = (status) => {
    setLoading(status);
  };
  //search city
  const searchCity = async (city) => {
    isLoading(true);

    const weatherInfo = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f474dafb4da889721c274747be2965d`
    );
    const data = await weatherInfo.json();
    if (data.cod === "400") {
      toast.error("Enter a city name !!!");
    }

    if (data.cod === "404") {
      toast.error(`${city} Not Found!`);
    }
    setWeatherData({
      temp: Math.ceil(data.main.temp - 273.15),
      feelsLike: Math.ceil(data.main.feels_like - 273.15),
      minTemp: Math.ceil(data.main.temp_min - 273.15),
      maxTemp: Math.ceil(data.main.temp_max - 273.15),
      country: data.sys.country,
      city: data.name,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed.toFixed(0),
      windDeg: data.wind.deg,
      visibility: data.visibility / 1000,
      description: data.weather[0].description,
      weatherStatus: data.weather[0].main,
      location: data.coord,
    });
    setShowInfo(true);
    isLoading(true);
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        isLoading,
        weatherData,
        loading,
        showInfo,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
