import logo from './logo.svg';
import './App.css';
import './assets/css/weather-icons.css'
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import { WeatherProvider } from './context/weatherContext';

function App() {
  return (
    <WeatherProvider>
    <div className="App">
     <div className='container'>
     <header className='header' >
      <h1>How is the weather?</h1>
      <hr className='under-elements'/>
     </header>
     <main>
      <div className='weather'>
        <Search/>
        <WeatherInfo/>
      </div>
     </main>
     </div>
    </div>
    </WeatherProvider>
  );
}

export default App;
