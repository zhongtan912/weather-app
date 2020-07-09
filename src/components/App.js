import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#234E4F'
    },
    secondary: {
      main: '#99CECF'
    },
    error: {
      main: '#d32f2f'
    },
    typography: {
      fontFamily: ['IBM Plex Sans', 'Montserrat', 'sans-serif'],
      h2: {
        color: '#183637'
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
