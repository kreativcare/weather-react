import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=1a15e23b46fc8dbb324b4a9be06ed972&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div classsName="col">
          <div className="WeatherForcast-day"> Fri </div>
          <div className="WeatherForecast-Icon">
            <WeatherIcon code="01d" size="42" />
          </div>
          <div className="WeatherForecast-Temperature">
            <span className="Temp-max">19</span>°
            <span className="Temp-min">10</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
