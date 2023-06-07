// import "./App.css";
import "./assets/css/weather-icons.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import UiContext from "./context/uiContext";
import { useContext, useEffect } from "react";
import Header from "./components/header/Header";
function App() {
  const { themeMode, themeHandler } = useContext(UiContext);

  useEffect(() => {
    themeHandler();
  });
  return (
    <>
      <div className="min-h-screen text-center bg-gray-200 dark:bg-navy-900">
        <Header />
        <div className="w-3/4 md:w-2/3 mx-auto">
          <header className="flex flex-col items-center gap-8 p-6">
            <h1 className="text-3xl text-navy-700 dark:text-lightPrimary py-5 border-b-2 border-slate-200">
              How is the weather ?
            </h1>
          </header>
          <main>
            <Search />

            <WeatherInfo />
          </main>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
