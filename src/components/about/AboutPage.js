import React from 'react';
import { Container, Typography } from '@material-ui/core';

const AboutPage = () => (
  <Container>
    <Typography variant="h2" component="h2" gutterBottom>About</Typography>
    <Typography variant="body1" gutterBottom>
      This weather app uses React, Redux, React Router and MetaWeather API
    </Typography>
  </Container>
);

export default AboutPage;
