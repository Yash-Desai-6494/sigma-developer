import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="weather-info">
      <h3>{weatherData.name}, {weatherData.sys.country}</h3>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
