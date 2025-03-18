import { useContext } from "react";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  let weatherCardBg = "";

  if (weatherData.condition === "Clear") {
    weatherCardBg = new URL(
      "../../assets/weather-card-bg/clear.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition === "Clouds") {
    weatherCardBg = new URL(
      "../../assets/weather-card-bg/cloudy.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition === "Rain" || "Drizzle") {
    weatherCardBg = new URL(
      "../../assets/weather-card-bg/rainy.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition === "Thunderstorm") {
    weatherCardBg = new URL(
      "../../assets/weather-card-bg/stormy.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition == "Fog" || "Haze") {
    weatherCardBg = new URL(
      "../../assets/weather-card-bg/foggy.svg",
      import.meta.url
    ).href;
  } else if (weatherData.condition === "Snow") {
    weatherCardBg = new URL(
      "../../assets/weather-card-bg/snowy.svg",
      import.meta.url
    ).href;
  } else {
    weatherCardBg = new URL(
      "../../assets/weather-card-bg/cloudy.svg",
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
        <p className="weather-card__info">
          {currentTempUnit === "F"
            ? weatherData.temp.F + "\u00B0" + "F"
            : weatherData.temp.C + "\u00B0" + "C"}{" "}
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
