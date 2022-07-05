import { createContext , useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [temperature , setTemperature] = useState()


    //search city
    const searchCity = async(city) => {
    
        const weatherInfo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f474dafb4da889721c274747be2965d`);
        const data = await weatherInfo.json()
        console.log(data);
        console.log(data.main.temp);
        const currentTemp = (data.main.temp - 273.15).toFixed(2);
        setTemperature(currentTemp);
    
       }




    return <WeatherContext.Provider value={{
        searchCity,
        temperature
    }}>{children}</WeatherContext.Provider>
}


export default WeatherContext;