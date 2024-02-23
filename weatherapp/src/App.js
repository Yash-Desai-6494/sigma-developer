import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import './App.css'; // You can define your own styles here

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9dd2b6b75afdff7aa5071fdbf9e1559d&units=metric`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city.trim() !== '') {
      fetchWeatherData();
    }
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Optional: You can add additional validation here
  };

  return (
    <div className="weather-app">
      <h2>Weather App</h2>
      <WeatherForm
        city={city}
        onCityChange={handleCityChange}
        onSubmit={handleSubmit}
      />
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
