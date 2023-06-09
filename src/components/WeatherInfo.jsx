import React, { useContext } from "react";
import WeatherContext from "../context/weatherContext";
import Spinner from "./Spinner";
import Location from "./Location";
import Map from "./Map";
import Temperature from "./Temperature";
import Summary from "./Summary";
import StatusCard from "./card/StatusCard";

function WeatherInfo() {
  const { showInfo, loading, weatherData } = useContext(WeatherContext);
  const { humidity, windSpeed, windDeg, visibility, pressure } = weatherData;

  if (showInfo && loading) {
    return (
      <>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-8">
          <Temperature />
          {/* right section */}
          <Summary />
        </div>
        <div className="grid grid-rows-1 grid-cols-5 gap-3 mt-8 text-gray-700">
          <StatusCard icon="wi-humidity">{humidity}%</StatusCard>
          <StatusCard icon="wi-refresh-alt">{visibility}KM</StatusCard>
          <StatusCard icon={`wi-wind-beaufort-${windSpeed}`}>
            {windSpeed}m/s
          </StatusCard>
          <StatusCard icon="wi-wind-direction">{windDeg}°</StatusCard>
          <StatusCard icon="wi-barometer">
            {" "}
            {pressure} <span className="text-sm">hPa</span>
          </StatusCard>
        </div>
        {/* Location and map */}
        <div className="grid grid-row-2 grid-cols-5 md:col-span-4 gap-3 mt-8">
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
