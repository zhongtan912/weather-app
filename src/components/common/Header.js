import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  menuButton: {
    paddingLeft: '30px',
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={handleClick} >
        <MenuIcon />
      </IconButton>
      <Menu id="nav-bar" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem to="/" component={Link} onClick={handleClose}>Home</MenuItem>
        <MenuItem to="/about" component={Link} onClick={handleClose}>About</MenuItem>
      </Menu>
    </div >

  );
};

export default Header;
