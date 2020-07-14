import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
    width: '700px',
    maxHeight: '700px',
    margin: '0 auto',
  },

  image: {
    height: '875px',
    // border: '1px solid red',
    marginTop: '-9em',
    transform: 'rotate(30deg)',
  },

  cardcontainer: {
    marginTop: '1em',
    // marginRight: '1em',
    border: '1px solid red',
  },

  mainheading: {
    fontFamily: 'Anton, sans-serif',
    color: '#f4ca51',
    textTransform: 'capitalize',
  },

  sizecontianer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontFamily: 'Robot, sans-serif',
    textTransform: 'uppercase',
    marginTop: '1em',
  },

  buttoncontainer: {
    display: 'flex',
    marginTop: '5em',
    justifyContent: 'space-evenly',
  },

  buttoncart: {
    color: 'white',
    backgroundColor: '#f5cb52',
    width: '20em',
    '&:hover': {
      backgroundColor: '#FCF5CA',
      color: 'black',
    },
  },
  buttonheart: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#FCF5CA',
    },
  },
});

const MenProducts = ({ handleClickImage, productdata }) => {
  const classes = useStyles();
  // console.log(productdata.sizes);
  // const shoesizes = productdata.sizes.map((data) => data.size);
  // console.log(shoesizes);

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
              onClick={() => {
                handleClickImage(data.id);
              }}
            />
          ))}
        </div>
      </Grid>

      <Grid container item xs={12} md={6}>
        <div className={classes.backgroundContainer}>
          <img src={productdata.img} alt="" className={classes.image} />
        </div>
      </Grid>

      <Grid item xs={12} md={4} className={classes.cardcontainer}>
        <div>
          <Typography variant="h5">Men's Running Shoe</Typography>
        </div>
        <div style={{ marginTop: '1em' }}>
          <Typography variant="h3" className={classes.mainheading}>
            {productdata.title}
          </Typography>
        </div>
        <div style={{ marginTop: '1em' }}>
          <Typography variant="h3">{productdata.price}</Typography>
        </div>
        <div className={classes.sizecontianer}>
          <Typography variant="h6">SelectSize</Typography>
          <Typography variant="h6">Size Guide</Typography>
        </div>
        <div>
          {/* <Typography>{productdata.sizes.map((data) => data.size)}</Typography> */}
        </div>
        <div className={classes.buttoncontainer}>
          <Button
            variant="contained"
            size="large"
            className={classes.buttoncart}
          >
            ADD to BAG
          </Button>
          <Button variant="contained" className={classes.buttonheart}>
            <FavoriteIcon />
          </Button>
        </div>
        <div>
          <Typography variant="h3">{productdata.description}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default MenProducts;
