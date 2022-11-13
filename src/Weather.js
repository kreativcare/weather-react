import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather() {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState(" ");
  let [load, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      cityname: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a15e23b46fc8dbb324b4a9be06ed972&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city…"
          autoFocus={true}
          onChange={updateCity}
          className="Enter-City"
        />
        <input type="submit" value="Search" className="Weather-Search" />
      </form>
    </div>
  );

  if (load) {
    return (
      <div className="Weather">
        {searchForm}

        <div className="row">
          <div className="col-6">
            <h2>{weather.cityname} </h2>
            <div className="Date">
              {" "}
              <FormattedDate date={weather.date} />
            </div>
            <span className="Icon">
              <WeatherIcon code={weather.icon} />
            </span>
            <span className="Temperature">
              <WeatherTemperature celsius={weather.temperature} />
            </span>
          </div>

          <div className="col-6">
            <ul>
              <li>{weather.description}</li>
              <li>humidity: {weather.humidity} %</li>
              <li>wind: {Math.round(weather.wind)} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let defaultCity = "Bremen";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=1a15e23b46fc8dbb324b4a9be06ed972&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading…";
  }
}
