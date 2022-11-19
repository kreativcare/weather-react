import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
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
      coordinates: response.data.coord,
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
        <WeatherInfo weather={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    let defaultCity = "Bremen";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=1a15e23b46fc8dbb324b4a9be06ed972&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading…";
  }
}
