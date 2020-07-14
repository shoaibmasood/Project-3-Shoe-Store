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
});

const Navbar = ({ cart }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography>Nike Shoe Store</Typography>

          <div>
            <img
              src={logo}
              alt="nikelogo"
              style={{ width: '5em', height: '5em' }}
            />
          </div>
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
