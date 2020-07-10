import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import MenProducts from '../MenProducts/MenProducts';
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles({
  paper: {
    dsiplay: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',

    height: '85vh',
    width: '95vw',
    backgroundColor: '#fefbec',
    borderRadius: 15,
  },
  // container: {
  //   color: 'black',
  //   border: '1px solid red',
  //   // marginTop: '8em',
  // },
});

export default function Papper() {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={10} className={classes.paper}>
        <Navbar />

        <MenProducts />
      </Paper>
    </div>
  );
}
