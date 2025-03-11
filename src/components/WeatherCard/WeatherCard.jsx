import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  let weatherCardBg = "";

  if (weatherData.condition === "Clear") {
    weatherCardBg = "../../src/assets/weather-card-bg/clear.svg";
  } else if (weatherData.condition === "Clouds") {
    weatherCardBg = "../../src/assets/weather-card-bg/cloudy.svg";
  } else if (weatherData.condition === "Rain" || "Drizzle") {
    weatherCardBg = "../../src/assets/weather-card-bg/rainy.svg";
  } else if (weatherData.condition === "Thunderstorm") {
    weatherCardBg = "../../src/assets/weather-card-bg/stormy.svg";
  } else if (weatherData.condition == "Fog" || "Haze") {
    weatherCardBg = "../../src/assets/weather-card-bg/foggy.svg";
  } else if (weatherData.condition === "Snow") {
    weatherCardBg = "../../src/assets/weather-card-bg/snowy.svg";
  } else {
    weatherCardBg = "../../src/assets/weather-card-bg/cloudy.svg";
  }
  return (
    <section className="weather-card">
      <div className="weather-card__content">
        <img
          src={weatherCardBg}
          alt="weather-condition"
          className="weather-card__image"
        />
        <p className="weather-card__info">{weatherData.temp.F} &deg; F</p>
      </div>
    </section>
  );
}

export default WeatherCard;
