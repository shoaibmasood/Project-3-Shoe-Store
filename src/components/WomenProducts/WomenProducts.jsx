import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import WomenShoeList from '../WomenProducts/WomenShoeList/WomenShoeList';
import ShoesPreview from '../ShoesPreview/ShoesPreview';
import ShoesInfo from '../ShoesInfo/ShoesInfo';

const useStyles = makeStyles({
  container: {
    color: 'black',
  },
});

const WomenProducts = ({ handleClickImage, handleClickCart, productdata }) => {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex' }}>
      <Grid
        container
        justifyContent="center"
        spacing={1}
        className={classes.container}
      >
        <Grid item xs={12} sm={12} md={1} lg={2}>
          <WomenShoeList handleClickImage={handleClickImage} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ShoesPreview productdata={productdata} />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={5}>
          <ShoesInfo
            productdata={productdata}
            handleClickCart={handleClickCart}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default WomenProducts;
