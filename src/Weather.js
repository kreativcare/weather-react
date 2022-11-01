import React, { useState } from "react";

import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState(" ");
  let [load, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      cityname: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
        <h2>{weather.cityname} </h2>
        <ul>
          <li>temperature: {Math.round(weather.temperature)} °C</li>
          <li>description: {weather.description}</li>
          <li>humidity: {weather.humidity} %</li>
          <li>wind: {Math.round(weather.wind)} m/s</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>

        <div className="row">
          <div className="col-sm-2">Forecast </div>
          <div className="col-sm-2">Forecast </div>
        </div>
      </div>
    );
  } else {
    return searchForm;
  }
}
