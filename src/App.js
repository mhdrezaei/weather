import "./App.css";
import "./assets/css/weather-icons.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import { WeatherProvider } from "./context/weatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <div className="container">
          <header className="header">
            <h1>How is the weather?</h1>
            <hr className="under-elements" />
          </header>
          <main>
            <div className="weather">
              <Search />
              <WeatherInfo />
            </div>
          </main>
        </div>
      </div>
      <ToastContainer />
    </WeatherProvider>
  );
}

export default App;
