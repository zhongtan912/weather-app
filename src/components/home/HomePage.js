import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchBar from '../search/SearchBar';
import WeatherCard from '../results/Weather';
import ForecastCard from '../results/Forecast';


function HomePage(props) {

  const { weather, forecast, error } = props;
  const [farenheit, setFarenheit] = useState(false);

  useEffect(() => {
    //console.log(props);
  }, [props]);

  const changeTemp = () => setFarenheit(!farenheit);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Weather App</Typography>
      <SearchBar />
      {(!error && Object.keys(weather).length > 0) && <WeatherCard weather={weather} changeTemp={changeTemp} />}
      {(!error && Object.keys(weather).length > 0 && forecast.length > 0) && <ForecastCard forecast={forecast} farenheit={farenheit} />}
    </Container>
  );
}

const convertCtoF = degC => ((degC * 9 / 5) + 32);

function mapStateToProps(state) {
  if (state.error)
    return { ...state };

  //console.log(state);
  const weather = (Object.keys(state.weather).length > 0) ? mapWeather(state.weather) : state.weather;
  const forecast = (state.forecast.length > 0) ? mapForecast(state.forecast) : state.forecast;
  return { weather, forecast, error: null };
}

function mapWeather(data) {
  return {
    city: data.name,
    country: data.sys.country,
    date: new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    temperature: Math.round(data.main.temp),
    temperatureF: Math.round(convertCtoF(data.main.temp)),
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
      mapped.mintemp = Math.round(data.main.temp_min);
      mapped.maxtemp = Math.round(data.main.temp_max);
      mapped.mintempF = Math.round(convertCtoF(data.main.temp_min));
      mapped.maxtempF = Math.round(convertCtoF(data.main.temp_max));
      mapped.day = new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long' });
      return mapped;
    });
}

HomePage.propTypes = {
  weather: PropTypes.object,
  forecast: PropTypes.array,
  error: PropTypes.object
};


export default connect(
  mapStateToProps,
  null)(HomePage);
