import axios from "axios";

const getWeatherData = async () => {
  return await axios
    .get("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast", {
      responseType: "json",
    })
    .then((response) => response.data);
};

const WeatherAPI = {
  getWeatherData,
};

export default WeatherAPI;
