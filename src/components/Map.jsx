import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import WeatherContext from "../context/weatherContext";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
  const { weatherData } = useContext(WeatherContext);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="col-span-5 lg:col-span-4 h-72 rounded-lg overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={weatherData.location.lat}
          lng={weatherData.location.lon}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
