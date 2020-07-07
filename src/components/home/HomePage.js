import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import SearchBar from './SearchBar';
import WeatherCard from './Weather';
import ForecastCard from './Forecast';


function HomePage(props) {

  const { weather, forecast, error } = props;

  useEffect(() => {
    //console.log(props);
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

  console.log(state);
  const weather = (Object.keys(state.weather).length > 0) ? mapWeather(state.weather) : state.weather;
  const forecast = (state.forecast.length > 0) ? mapForecast(state.forecast) : state.forecast;
  return { weather, forecast, error: null };
}

function mapWeather(data) {
  //TODO map date by the timezone of the location
  return {
    city: data.name,
    country: data.sys.country,
    date: new Date(data.dt * 1000).toLocaleString('en-US'),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    temperature: data.main.temp,
    description: data.weather[0].description,
    wind_speed: data.wind.speed,
    condition: data.cod
  };
}

function mapForecast(list) {
  return list.filter((elem, index) => {
    return index >= 4 && ((index - 4) % 8 == 0);
  })
    .map((data) => {
      const mapped = mapWeather(data);
      mapped.mintemp = data.main.temp_min;
      mapped.maxtemp = data.main.temp_max;
      mapped.day = new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long' });
      return mapped;
    });
}


export default connect(
  mapStateToProps,
  null)(HomePage);
