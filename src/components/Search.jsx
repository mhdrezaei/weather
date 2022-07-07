import React, { useState , useContext } from 'react'
import WeatherContext from '../context/weatherContext'
import Spinner from './Spinner';
function Search() {
    const {searchCity , isLoading , loading} = useContext(WeatherContext);
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