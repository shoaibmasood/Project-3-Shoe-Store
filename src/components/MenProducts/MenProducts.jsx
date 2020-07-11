import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import datas from '../../productdata/menproductdata/menproductdata';

const useStyles = makeStyles({
  container: {
    color: 'black',
    // border: '1px solid red',
    marginTop: '2em',
  },
  thumbnailContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // alignItems: 'flex-end',
    // // justifyContent: 'flex-end',
    // // alignContent: 'flex-start',
    // marginLeft: '-10em',
    // overflowX: 'hidden',
    // overflowY: 'scroll',
  },

  thumbnail: {
    objectFit: 'contain',
    width: '100%',
    maxHeight: '110px',
    transition: 'transform 450ms',
    marginBottom: '3px',
    opacity: 0.5,

    '&:hover': {
      transform: 'scale(1.08)',
      opacity: 1,
      borderLeft: '5px solid #c4a068',
    },
  },
});

const MenProducts = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      spacing={3}
      className={classes.container}
    >
      <Grid item xs={12} md={3}>
        <div className={classes.thumbnailContainer}>
          {datas.map((data) => (
            <img src={data.thumbnail} alt="" className={classes.thumbnail} />
          ))}
        </div>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography>main image</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography>cart and product description</Typography>
      </Grid>
    </Grid>
  );
};

export default MenProducts;
