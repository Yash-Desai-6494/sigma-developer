import React from 'react';

const WeatherForm = ({ city, onCityChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={onCityChange}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
