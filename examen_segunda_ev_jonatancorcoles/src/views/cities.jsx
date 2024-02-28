import { useEffect, useState } from "react";
import "../styles/cities.css";
import axios from 'axios';
import WeatherTable from "../comps/WeatherTable";

export default function Cities({ latitude, longitude }) {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    const getWeatherByCoordinates = async () => {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=0e667ddbcb64c26513245db14b041f67`);
        setWeather(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getWeatherByCoordinates();
  }, [latitude, longitude]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0e667ddbcb64c26513245db14b041f67`);
      setWeather(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="cities-container">
      <h1>5 days predict</h1>
      <div className="search-cont">
        <input type="text" value={city} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <WeatherTable weather={weather} />
    </div>
  );
}