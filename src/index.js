import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WeatherProvider } from "./context/weatherContext";
import { UiProvider } from "./context/uiContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UiProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </UiProvider>
  </React.StrictMode>
);
