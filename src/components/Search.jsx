import React, { useState, useContext } from "react";
import WeatherContext from "../context/weatherContext";
import Spinner from "./Spinner";
function Search() {
  const { searchCity, isLoading, loading, weatherData } =
    useContext(WeatherContext);
  const [city, setCity] = useState("");

  const handleSearch = () => {
    searchCity(city);
  };

  return (
    <>
      <div className="w-full  rounded-2xl p-8 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
        <div className="relative">
          <input
            className="w-full text-gray-700 p-[0.6rem] rounded-xl outline-none  border border-gray-400 shadow-inner"
            type="text"
            placeholder="Search cities..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button
            onClick={handleSearch}
            className="absolute bg-gray-600 text-gray-800 py-2 px-6 md:px-8 text-lg top-0 right-0 rounded-xl rounded-l-none"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
