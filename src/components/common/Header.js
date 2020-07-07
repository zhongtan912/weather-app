import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (

    <AppBar position="static" style={{ marginBottom: '15px' }}>
      <Tabs
        variant="fullWidth"
        aria-label="nav tabs example"
      >
        <Tab label="Home" to="/" component={Link} />
        <Tab label="About" to="/about" component={Link} />
      </Tabs>
    </AppBar>

  );
};

export default Header;



{/*
    const activeStyle = { color: '#303f9f' };

  <nav>
<NavLink to="/" activeStyle={activeStyle} exact>
  Home
</NavLink>
{' | '}
<NavLink to="/about" activeStyle={activeStyle}>
  About
</NavLink>
</nav> */}