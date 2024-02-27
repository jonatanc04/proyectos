import "../styles/weather.css";

export default function WeatherRow({ index, item }) {

  const imgIcon = "https://openweathermap.org/img/wn/"+ item.weather[0]["icon"] +"@2x.png";
  const formatDate = new Date(item.dt * 1000);
  const formatTemp = (temp) => {
    const number = temp - 273.15;
    return (Number.parseFloat(number).toFixed(2));
  }

  return (
    <div key={index} className="item-weather">
      <h2>{formatDate.getDate() +"/"+ (formatDate.getMonth()+1) +"/"+ formatDate.getFullYear()}</h2>
      <img src={imgIcon} alt={item.weather[0]["main"]}></img>
      <h4>Temp. Máx: {formatTemp(item.main.temp_max)} °C</h4>
      <h4>Temp. Min: {formatTemp(item.main.temp_min)} °C</h4>
    </div>
  );
}