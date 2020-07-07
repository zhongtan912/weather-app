import React from 'react';
import { Container } from '@material-ui/core';
import SearchBar from './SearchBar';


const HomePage = () => (
  <Container>
    <h1>Weather App</h1>
    <SearchBar />
  </Container>
);

export default HomePage;
