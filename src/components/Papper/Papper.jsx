import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
const useStyles = makeStyles({
  paper: {
    dsiplay: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',

    height: '85vh',
    width: '95vw',
    backgroundColor: '#fefbec',
    borderRadius: 15,
  },
});

export default function Papper() {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={10} className={classes.paper}>
        <Navbar />
      </Paper>
    </div>
  );
}
