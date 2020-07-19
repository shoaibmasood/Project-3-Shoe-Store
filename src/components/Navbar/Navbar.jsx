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

  navlink: {},
  navlinkmen: {
    color: 'black',
    fontFamily: 'Robot, sans-serif',
    fontSize: '1em',
  },

  navlinkwomen: {
    marginLeft: '1em',
    fontFamily: 'Robot, sans-serif',
    fontSize: '1em',

    color: 'black',
  },
});

const Navbar = ({ cart }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          {/* <Typography>Nike Shoe Store</Typography> */}
          <div>
            <ul className={classes.navlink}>
              <Link to="/" as="li" className={classes.navlinkmen}>
                Men
              </Link>

              <Link to="womenproducts" as="li" className={classes.navlinkwomen}>
                Women
              </Link>
            </ul>
          </div>

          <NavLink to="/">
            <div>
              <img
                src={logo}
                alt="nikelogo"
                style={{ width: '5em', height: '5em' }}
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
