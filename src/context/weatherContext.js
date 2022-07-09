import { createContext , useState } from "react";
import { toast } from "react-toastify";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [temperature , setTemperature] = useState()
    const [minTemperature , setMinTemperature] = useState()
    const [maxTemperature , setMaxTemperature] = useState()
    const [country , setCountry] = useState()
    const [city , setCity] = useState()
    const [loading , setLoading] = useState(true);
    const [showInfo , setShowInfo] = useState(false);
    const [humidity , setHumidity] = useState()
    const [weatherStatus , setWeatherStatus] = useState()
    const [weatherStatusClass , setWeatherStatusClass] = useState()
    const [windSpeed , setWindSpeed] = useState()
    const [windDeg , setWindDeg] = useState()
    const [visibility , setVisibility] = useState()



    //search city
    const searchCity = async(city) => {
        isLoading(false);

        const weatherInfo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f474dafb4da889721c274747be2965d`);
        const data = await weatherInfo.json()
        if(data.cod === '400'){
            toast.error('Enter a city name !!!')
        }

        if(data.cod === '404'){
            toast.error(`${city} Not Found!`)
        }

        console.log(data);
        console.log(data.main.temp);
        const currentTemp = (data.main.temp - 273.15).toFixed(2);
        const currentMinTemp = (data.main.temp_min - 273.15).toFixed(2);
        const currentMaxTemp = (data.main.temp_max - 273.15).toFixed(2);
        setTemperature(currentTemp);
        setMinTemperature(currentMinTemp);
        setMaxTemperature(currentMaxTemp);
        setCountry(data.sys.country)
        setCity(data.name)
        setHumidity(data.main.humidity)
        const speed = (data.wind.speed).toFixed(0)
        setWindSpeed(speed)
        setWindDeg(data.wind.deg)
        const area = data.visibility/1000;
        setVisibility(area)
        setWeatherStatus(data.weather[0].description)
        setWeatherStatusClass(data.weather[0].main)


        setShowInfo(true) 
        isLoading(true);
      
    }

       // loading
       const isLoading = (status) => {
        setLoading(status);
    }




    return <WeatherContext.Provider value={{
        searchCity,
        isLoading,
        temperature,
        minTemperature,
        maxTemperature,
        city,
        country,
        loading,
        showInfo,
        humidity,
        windSpeed,
        windDeg,
        weatherStatus,
        visibility,
        weatherStatusClass

    }}>{children}</WeatherContext.Provider>
}


export default WeatherContext;