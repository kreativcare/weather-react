import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span> {Math.round(props.celsius)} </span>
      <span className="Unit">°C</span>
    </span>
  );
}
