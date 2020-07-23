import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  cartcontainer: {
    marginTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-width: 960px)': {
      marginTop: 0,
    },
  },

  subheading: {
    fontFamily: 'Robot, sans-serif',
    textAlign: 'center',
  },

  mainheading: {
    fontFamily: 'Anton, sans-serif',
    color: '#f4ca51',
    textTransform: 'capitalize',
    fontSize: '3.5rem',
    marginBottom: '0.5em',
    textAlign: 'center',
    '@media screen and (max-width: 960px)': {
      fontSize: '2.5rem',
      marginBottom: 0,
    },
  },

  price: {
    fontFamily: 'Robot, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1em',
    textAlign: 'center',
    '@media screen and (max-width: 960px)': {
      fontSize: '2rem',
      marginBottom: 0,
    },
  },

  sizeheading: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontFamily: 'Robot, sans-serif',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '1.5rem',
    marginTop: '1em',
    marginBottom: '1em',
  },

  shoesizecontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '1em',
    width: '100%',
    flexWrap: 'wrap',
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
    justifyContent: 'space-evenly',
    marginBottom: '1.5em',
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
    fontFamily: 'Robot, sans-serif',
    fontSize: '1.2rem',
    marginRight: '2em',
    marginLeft: '2em',
  },
});

const ShoesInfo = ({ productdata, handleClickCart }) => {
  const classes = useStyles();

  const shoesizes = productdata.sizes;

  const [isToggle, setisToggle] = useState(false);

  const handleClickToggle = () => {
    let toggle = !isToggle;
    setisToggle(toggle);
  };

  return (
    <div className={classes.cartcontainer}>
      <div className={classes.subheading}>
        {window.location.href === 'http://localhost:3000/' ? (
          <h2>Men's Running Shoes</h2>
        ) : (
          <h2>Women's Running Shoes</h2>
        )}
      </div>
      <div style={{ marginTop: '1em' }}>
        <Typography className={classes.mainheading}>
          {productdata.title}
        </Typography>
      </div>
      <div className={classes.price}>
        <span>${productdata.price}</span>
      </div>
      <div className={classes.sizeheading}>
        <span>Select Size</span>
        <span>Size Guide</span>
      </div>
      <div className={classes.shoesizecontainer}>
        {shoesizes.map((item, index) => (
          <Button className={classes.shoesize} key={index}>
            {item.size}
          </Button>
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
  );
};

export default ShoesInfo;
