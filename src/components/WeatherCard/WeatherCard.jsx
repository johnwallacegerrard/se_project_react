import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  let weatherCardBg = "";

  if (weatherData.condition === "Clear") {
    weatherCardBg = new URL(
      "../../src/assets/weather-card-bg/clear.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition === "Clouds") {
    weatherCardBg = new URL(
      "../../src/assets/weather-card-bg/cloudy.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition === "Rain" || "Drizzle") {
    weatherCardBg = new URL(
      "../../src/assets/weather-card-bg/rainy.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition === "Thunderstorm") {
    weatherCardBg = new URL(
      "../../src/assets/weather-card-bg/stormy.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition == "Fog" || "Haze") {
    weatherCardBg = new URL(
      "../../src/assets/weather-card-bg/foggy.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition === "Snow") {
    weatherCardBg = new URL(
      "../../src/assets/weather-card-bg/snowy.svg",
      import.meta.url
    ).href;
  } else {
    weatherCardBg = new URL(
      "../../src/assets/weather-card-bg/cloudy.svg",
      import.meta.url
    ).href;
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
