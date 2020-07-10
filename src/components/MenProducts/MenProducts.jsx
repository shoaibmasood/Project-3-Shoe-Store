import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import productData from '../../productdata/menproductdata/menproductdata';

const useStyles = makeStyles({
  container: {
    color: 'black',
    border: '1px solid red',
    marginTop: '10em',
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
      <Grid item xs={12} md={4}>
        <Typography>Thumbnail</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography>main image</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography>cart and product description</Typography>
      </Grid>
    </Grid>
  );
};

export default MenProducts;
