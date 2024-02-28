import "../styles/row.css";
import React from "react";

export default function WeatherRow({ text, item }) {
  const imgIcon = "https://openweathermap.org/img/wn/"+ item.weather[0]["icon"] +"@2x.png";
  const formatDate = new Date(item.dt * 1000);
  const formatTemp = (temp) => {
    const number = temp - 273.15;
    return (Number.parseFloat(number).toFixed(2));
  }
  return (
    <div className="weather-row">
      {console.log(item)}
      <h1>{text}</h1>
      <div className="info">
        <h3>{formatDate.getDate() +"/"+ (formatDate.getMonth()+1) +"/"+ formatDate.getFullYear()}</h3>
        <h3>{formatTemp(item.main.temp)} °C</h3>
        <h3>{item.wind.speed} km/h</h3>
        <img src={imgIcon} alt={item.weather[0]["main"]}></img>
      </div>
    </div>
  );
}
