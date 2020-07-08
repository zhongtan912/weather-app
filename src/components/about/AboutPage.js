import React from 'react';
import { Container, Typography } from '@material-ui/core';
import background from './aboutBackground.png';


const bgstyle = {
  // minHeight: '100%',
  // minWidth: '1024px',
  width: '100%',
  height: 'auto',
  position: 'absolute',
  opacity: '80%',
  top: 0,
  left: 0,
  zIndex: -1
};

const AboutPage = () => (

  <div >
    <Container style={{ position: 'relative' }}>
      <img src={background} style={bgstyle}></img>
      <Typography variant="h2" component="h2" gutterBottom>About</Typography>
      <Typography variant="body1" gutterBottom>
        This weather app uses React, Redux, React Router and OpenWeatherMap API
      </Typography>
    </Container>
  </div>


);

export default AboutPage;
