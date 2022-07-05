import React, { useState , useContext } from 'react'
import WeatherContext from '../context/weatherContext'
function Search() {
    const {searchCity} = useContext(WeatherContext);
    const [city , setCity] =  useState('')
    
    const handleSearch = () => {
        searchCity(city);
    }
  return (
    <>
        <div className='wrap' >
            <div className='search-form' >
                <input 
                className='input-text'
                 type='text'
                  placeholder='Search cities...'
                    value={city}
                    onChange={(e)=>{setCity(e.target.value)}}
                  />
                <button onClick={handleSearch} className='btn' >Search</button>
            </div>
        </div>
    </>
  )
}

export default Search