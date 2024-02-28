import { useEffect, useState } from "react";
import "../styles/cities.css";
import axios from 'axios';
import WeatherTable from "../comps/WeatherTable";

export default function Cities({user}) {

  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=39.46&lon=-0.37&appid=0e667ddbcb64c26513245db14b041f67");
      setWeather(res.data);
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="cities-container">
      <h1>5 days predict</h1>
      <WeatherTable weather={weather} user={user} />
    </div>
  );
}