import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assests/png/1806029.png';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Navbar/Cart/Cart';

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
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  navlink: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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

  navlogo: {
    display: 'flex',
    flexDirection: 'column',
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
            <div className={classes.navlogo}>
              <NavLink to="/">
                <div>
                  <img
                    src={logo}
                    alt="nikelogo"
                    style={{
                      width: '50px',
                      height: '50px',
                    }}
                  />
                </div>
              </NavLink>

              <div>
                <span className={classes.navheading}>
                  <strong>NikeStore</strong>
                </span>
              </div>
            </div>
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

          <div>
            <Cart cart={cart} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
