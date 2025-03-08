import "./WeatherCard.css";
import weatherConditions from "../../assets/weather-index";

function WeatherCard() {
  return (
    <section
      className="weather-card"
      style={{
        backgroundImage: `url(${weatherConditions.Sunny})`,
        // backgroundPosition: right,
      }}
    >
      <p className="weather-card__info">75 &deg; F</p>
    </section>
  );
}

export default WeatherCard;
