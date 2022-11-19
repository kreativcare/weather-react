import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <h2>{props.weather.cityname} </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="Date">
            {" "}
            <FormattedDate date={props.weather.date} />
          </div>
          <span className="Icon">
            <WeatherIcon code={props.weather.icon} size={80} />
          </span>
          <span className="Temperature">
            <WeatherTemperature celsius={props.weather.temperature} />
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>{props.weather.description}</li>
            <li>humidity: {props.weather.humidity} %</li>
            <li>wind: {Math.round(props.weather.wind)} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
