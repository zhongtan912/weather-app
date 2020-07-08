import React from 'react';
import { Container, Typography } from '@material-ui/core';
// import background from '../results/backgroundsmall.png';


const bgstyle = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  opacity: '80%',
  top: 0,
  left: 0
};

const AboutPage = () => (

  <div >
    {/* <img src={background} style={bgstyle}></img> */}
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>About</Typography>
      <Typography variant="body1" gutterBottom>
        This weather app uses React, Redux, React Router and OpenWeatherMap API
      </Typography>
    </Container>
  </div>


);

export default AboutPage;
