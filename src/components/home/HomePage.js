import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import SearchBar from './SearchBar';


function HomePage(props) {

  const { weather, forecast } = props;

  useEffect(() => {
    console.log(props);
    if (typeof weather !== 'undefined' && Object.keys(weather).length > 0) {
      console.log('weather', weather.main);
      //alert(JSON.stringify(props.weather.main));
    }
    if (typeof forecast !== 'undefined' && forecast.length > 0) {
      console.log('forecast', forecast[0]);
    }
  }, [props]);

  return (
    <Container>
      <h1>Weather App</h1>
      <SearchBar />
    </Container>
  );
}

function mapStateToProps(state) {
  return { ...state }
}


export default connect(
  mapStateToProps,
  null)(HomePage);
