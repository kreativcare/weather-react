import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForcast-day"> {day()}</div>
      <div className="WeatherForecast-Icon">
        <WeatherIcon code={props.data.weather[0].icon} size="42" />
      </div>
      <div className="WeatherForecast-Temperature">
        <span className="Weatherforecast-temp-max">{maxTemperature()}</span>
        <span className="Weatherforecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
