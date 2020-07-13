import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import circlelogo from '../../assests/png/circle.png';
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
    // marginLeft: '2em',
    // overflow: 'auto',
    // marginRight: '1em',
    // overflowX: 'hidden',
    // overflowY: 'scroll',
    // flexWrap: 'wrap',
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
      cursor: 'pointer',
    },
  },
  backgroundContainer: {
    backgroundImage: `url(${circlelogo})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '600px',
    maxHeight: '600px',
    margin: '0 auto',
    // backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',
    // marginLeft: '2em',
    // objectFit: 'cover',

    // background: '#f5cb52',
    // borderRadius: '50%',
    // maxHeight: '500px',

    // marginTop: '1em',
    // border: '2px solid green',
  },

  imageContainer: {
    // width: '100%',
    // height: '100%',
    // objectFit: 'cover',
  },

  image: {
    // objectFit: 'contain',
    // width: '100%',
    height: '800px',
    // border: '1px solid red',
    marginTop: '-9em',
    transform: 'rotate(30deg)',
    // position: 'relative',
    // transform:

    // maxHeight: '450px',
  },
});

const MenProducts = () => {
  const classes = useStyles();
  const productimg = datas[0].img;
  return (
    <Grid
      container
      justifyContent="center"
      spacing={3}
      className={classes.container}
    >
      <Grid item xs={12} md={2} container>
        <div className={classes.thumbnailContainer}>
          {datas.map((data) => (
            <img
              key={data.id}
              src={data.thumbnail}
              alt=""
              className={classes.thumbnail}
            />
          ))}
        </div>
      </Grid>

      <Grid container item xs={12} md={6}>
        <div className={classes.backgroundContainer}>
          <img src={productimg} alt="" className={classes.image} />
        </div>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography>cart and product description</Typography>
      </Grid>
    </Grid>
  );
};

export default MenProducts;
