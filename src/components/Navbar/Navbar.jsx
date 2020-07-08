import React from 'react';
// import styles from './Navbar.module.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assests/png/1806029.png';

const useStyles = makeStyles({
  // container: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  appbar: {
    backgroundColor: '#fcf5ca',
    color: 'black',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    width: '95vw',
    position: 'absolute',
    top: '4.5em',
    right: '2.9em',
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          {/* <Typography>Nike</Typography> */}
          <div>
            <img src={logo} alt="nikelogo" style={{ width: 55, height: 55 }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
