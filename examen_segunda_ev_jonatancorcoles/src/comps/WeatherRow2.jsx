import "../styles/row.css";
import React from "react";

export default function WeatherRow({ text, dayConditions }) {
  if (!dayConditions || !dayConditions.data) {
    return <h1>Loading...</h1>;
  }

  const imgIcon = "https://openweathermap.org/img/wn/"+ dayConditions.data.weather[0]["icon"] +"@2x.png";
  const formatDate = new Date(dayConditions.data.dt * 1000);
  const formatTemp = (temp) => {
    const number = temp - 273.15;
    return (Number.parseFloat(number).toFixed(2));
  }

  return (
    <div className="weather-row">
      <h1>{text}</h1>
      <div className="info">
      <h3>{formatDate.getDate() +"/"+ (formatDate.getMonth()+1) +"/"+ formatDate.getFullYear()}</h3>
        <h3>{formatTemp(dayConditions.data.main.temp)} °C</h3>
        <h3>{dayConditions.data.wind.speed} km/h</h3>
        <img src={imgIcon} alt={dayConditions.data.weather[0].main}></img>
      </div>
    </div>
  );
}
