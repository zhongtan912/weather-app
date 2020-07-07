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
      {Object.keys(weather).length > 0 && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <ForecastCard forecast={forecast} />}
    </Container>
  );
}

function mapStateToProps(state) {
  return { ...state }
}


export default connect(
  mapStateToProps,
  null)(HomePage);
