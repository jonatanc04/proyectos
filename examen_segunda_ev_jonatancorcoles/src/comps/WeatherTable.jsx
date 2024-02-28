import { useEffect, useState } from "react";
import "../styles/weather.css";
import WeatherRow from "./WeatherRow";

export default function WeatherTable ({ weather }) {
  const [weatherDias, setWeatherDias] = useState([]);

  useEffect(() => {
    if (weather && weather.list) {
      const weatherFiltered = weather.list.filter(item => item.dt_txt.endsWith('12:00:00'));
      setWeatherDias(weatherFiltered);
    }
  }, [weather]);

  if (!weather || !weather.list) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>{weather["city"].name}</h1>
      <div className="contenedor-dias">
      {console.log(weatherDias)}
      {weatherDias.map((item, index) => (
        <WeatherRow text={"Day " + (index+1)} item={item}></WeatherRow>
      ))}
    </div>
    </>
  );
}
