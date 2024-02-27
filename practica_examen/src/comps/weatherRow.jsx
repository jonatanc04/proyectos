import "../styles/weather.css";

export default function WeatherRow({ index, item }) {

  const imgIcon = "https://openweathermap.org/img/wn/"+ item.weather[0]["icon"] +".png";

  return (
    <div key={index} className="item-weather">
      <img src={imgIcon} alt={item.weather[0]["main"]}></img>
      <p></p>
    </div>
  );
}
