import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import SearchBar from './SearchBar';
import WeatherCard from './Weather';
import ForecastCard from './Forecast';


function HomePage(props) {

  const { weather, forecast, error } = props;

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <Container>
      <h1>Weather App</h1>
      <SearchBar />
      {(!error && Object.keys(weather).length > 0) && <WeatherCard weather={weather} />}
      {(!error && forecast.length > 0) && <ForecastCard forecast={forecast} />}
    </Container>
  );
}

function mapStateToProps(state) {
  if (state.error)
    return { ...state };

  const weather = (Object.keys(state.weather).length > 0) ? mapWeather(state.weather) : state.weather;
  const forecast = (state.forecast.length > 0) ? mapForecast(state.forecast) : state.forecast;
  return { weather, forecast, error: null };
}

function mapWeather(data) {
  return {
    city: data.name,
    country: data.sys.country,
    date: data.dt * 1000,
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    temperature: data.main.temp,
    description: data.weather[0].description,
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    condition: data.cod
  };
}

function mapForecast(list) {
  return list.map(data => mapWeather(data));
}


export default connect(
  mapStateToProps,
  null)(HomePage);
