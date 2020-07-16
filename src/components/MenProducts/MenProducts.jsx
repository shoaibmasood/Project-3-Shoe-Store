import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import circlelogo from '../../assests/png/circle.png';
import datas from '../../productdata/menproductdata/menproductdata';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '72vh',
    color: 'black',
    border: '1px solid red',
    marginTop: '2em',
    // '@media screen and (max-width: 1025px)': {
    //   flexDirection: 'column',
    // },
  },
  thumbnailContainer: {
    border: '1px solid pink',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1em',
    overflowX: 'hidden',
    overflowY: 'scroll',
    height: '60vh',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '@media screen and (max-width: 1020px)': {
      flexDirection: 'row',
      height: '10vh',
    },
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
      borderRight: '5px solid #c4a068',
      cursor: 'pointer',
    },
  },
  backgroundContainer: {
    backgroundImage: `url(${circlelogo})`,
    border: '1px solid purple',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    width: '700px',
    maxHeight: '700px',
    margin: '0 auto',
    '@media screen and (max-width: 1020px)': {
      width: '400px',
      maxHeight: '400px',
      margin: 0,
    },
  },

  image: {
    height: '875px',
    marginTop: '-9em',
    transform: 'rotate(30deg)',
    '@media screen and (max-width: 1020px)': {
      height: '600px',
    },
  },

  // infocontainer: {
  //   '@media screen and (max-width: 1025px)': {
  //     width: '300px',
  //     height: '300px',
  //   },
  // },

  cartcontainer: {
    // marginTop: '-43.5em',
    // // // marginLeft: '70em',
    // display: 'flex',
    // flexDirection: 'column',
    border: '1px solid lightblue',
    // alignItems: 'flex-start',
  },

  mainheading: {
    fontFamily: 'Anton, sans-serif',
    color: '#f4ca51',
    textTransform: 'capitalize',
  },

  sizeheading: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Robot, sans-serif',
    textTransform: 'uppercase',
    marginTop: '4em',
    marginRight: '2.5em',
  },

  shoesizecontainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '3em',
    marginLeft: '-2em',
  },

  shoesize: {
    borderRadius: 15,
    backgroundColor: '#fcf5ca',
    '&:hover': {
      backgroundColor: '#f5cb52',
      color: 'white',
    },
  },

  buttoncontainer: {
    display: 'flex',
    marginTop: '5em',
    justifyContent: 'space-evenly',
    marginBottom: '3em',
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

  cartdescription: {
    marginRight: '2em',
  },
});

const MenProducts = ({ handleClickImage, handleClickCart, productdata }) => {
  const classes = useStyles();

  const shoesizes = productdata.sizes;

  const [isToggle, setisToggle] = useState(false);

  const handleClickToggle = () => {
    let toggle = !isToggle;
    setisToggle(toggle);
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={1}
      className={classes.container}
    >
      <Grid item xs={12} md={2}>
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

      <Grid item xs={6} md={6}>
        <div className={classes.backgroundContainer}>
          <img src={productdata.img} alt="" className={classes.image} />
        </div>
      </Grid>

      <Grid item xs={6} md={4}>
        <div className={classes.cartcontainer}>
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
          <div className={classes.sizeheading}>
            <Typography variant="h6">Select Size</Typography>
            <Typography variant="h6">Size Guide</Typography>
          </div>
          <div className={classes.shoesizecontainer}>
            {shoesizes.map((item) => (
              <Button className={classes.shoesize}>{item.size}</Button>
            ))}
          </div>
          <div className={classes.buttoncontainer}>
            <Button
              variant="contained"
              size="large"
              className={classes.buttoncart}
              onClick={handleClickCart}
            >
              ADD to BAG
            </Button>
            <Button
              variant="contained"
              className={classes.buttonheart}
              onClick={handleClickToggle}
              style={{ color: isToggle ? 'red' : 'black' }}
            >
              <FavoriteIcon />
            </Button>
          </div>
          <div>
            <Typography
              variant="body1"
              align="justify"
              className={classes.cartdescription}
            >
              {productdata.description}
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default MenProducts;
