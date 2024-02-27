import { useEffect, useState } from "react";
import "../styles/weather.css";
import WeatherRow from "./weatherRow";
import ReactLoading from 'react-loading';

export default function WeatherTable ({weather, usuario}) {
  const [mostrarDias, setMostrarDias] = useState(1);
  const [weatherDias, setWeatherDias] = useState([]);

  const handleChangeDays = e => {
    const days = parseInt(e.target.value);
    setMostrarDias(days);
  }

  useEffect(() => {
    if (weather && weather.list) {
      const weatherFiltered = weather.list.filter(item => item.dt_txt.endsWith('12:00:00'));
      setWeatherDias(weatherFiltered.slice(0, mostrarDias));
    }
  }, [weather, mostrarDias]);

  if (!weather || !weather.list) {
    return <ReactLoading type="spin" color="#3eb2f0" height={667} width={375} />;
  }

  return (
    <>
      <div className="contenedor-dias">
        {console.log(weatherDias)}
        {weatherDias.map((item, index) => (
          <WeatherRow index={index} item={item}></WeatherRow>
        ))}
      </div>
      {usuario.rol.includes('admin') ? (
        <div>
        <label>Selecciona días a mostrar:</label>
        <select value={mostrarDias} onChange={handleChangeDays}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      ) : (
        null
      )}
    </>
  );
}
