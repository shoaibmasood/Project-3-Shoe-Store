import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ShoesList from '../ShoesList/ShoesList';
import ShoesPreview from '../ShoesPreview/ShoesPreview';
import ShoesInfo from '../ShoesInfo/ShoesInfo';

const useStyles = makeStyles({
  container: {
    // display: 'flex',
    // height: 'auto',
    color: 'black',
    // border: '1px solid red',
    // marginTop: '2em',
    // '@media screen and (max-width: 1025px)': {
    //   flexDirection: 'column',
    // },
  },

  // infocontainer: {
  //   '@media screen and (max-width: 1025px)': {
  //     width: '300px',
  //     height: '300px',
  //   },
  // },
});

const MenProducts = ({ handleClickImage, handleClickCart, productdata }) => {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex' }}>
      <Grid
        container
        justifyContent="center"
        // direction="column"
        spacing={1}
        className={classes.container}
      >
        <Grid item xs={12} sm={12} md={1} lg={2}>
          <ShoesList handleClickImage={handleClickImage} />
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

export default MenProducts;
