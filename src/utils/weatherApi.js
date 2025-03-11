export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  console.log(data);
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.condition = data.weather[0].main;
  if (data.main.temp >= 86) {
    result.type = "hot";
  } else if (data.main.temp >= 66) {
    result.type = "warm";
  } else {
    result.type = "cold";
  }
  return result;
};
