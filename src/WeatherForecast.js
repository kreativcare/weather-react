import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
