import { useEffect, useState } from "react";
import "../styles/principal.css";
import axios from 'axios';
import WeatherTable from "../comps/weatherTable";

export default function Principal({usuario}) {

  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      //const res = await axios.get("https://https://api.openweathermap.org/data/2.5/forecast?q=Valencia&appid=653a43078fc552514f10659b1595af0c");
      const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=39.46&lon=-0.37&appid=653a43078fc552514f10659b1595af0c");
      setWeather(res.data);
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="principal-container">
      <h1>Tiempo de los próximos días</h1>
      <WeatherTable weather={weather} usuario={usuario}></WeatherTable>
    </div>
  );
}
