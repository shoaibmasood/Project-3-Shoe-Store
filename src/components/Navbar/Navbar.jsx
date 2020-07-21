import React from 'react';
// import styles from './Navbar.module.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
} from '@material-ui/core';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assests/png/1806029.png';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  appbar: {
    backgroundColor: '#fcf5ca',
    color: 'black',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '95vw',
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  navlink: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // border: '1px solid green',
  },

  navheading: {
    fontFamily: 'Robot, sans-serif',
    marginRight: '1em',
    fontSize: '1.5rem',
    color: 'black',
    '&:hover': {
      color: '#f4ca51',
    },
  },
  navlinkmen: {
    color: 'black',

    fontFamily: 'Robot, sans-serif',
    fontSize: '1rem',
    marginRight: '1em',
    textDecoration: 'none',
    '&:hover': {
      color: '#f4ca51',
    },
  },

  navlinkwomen: {
    fontFamily: 'Robot, sans-serif',
    fontSize: '1rem',
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: '#f4ca51',
    },
  },
});

const Navbar = ({ cart }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.navlink}>
            <span className={classes.navheading}>
              <strong>NikeStore</strong>
            </span>
            <div>
              <ul>
                <Link to="/" className={classes.navlinkmen}>
                  <strong>Men</strong>
                </Link>

                <Link to="womenproducts" className={classes.navlinkwomen}>
                  <strong>Women</strong>
                </Link>
              </ul>
            </div>
          </div>

          <NavLink to="/">
            <div>
              <img
                src={logo}
                alt="nikelogo"
                style={{
                  width: '5em',
                  height: '5em',
                }}
              />
            </div>
          </NavLink>
          <div>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={cart} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
