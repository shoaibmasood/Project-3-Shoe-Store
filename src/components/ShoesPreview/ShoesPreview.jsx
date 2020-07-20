import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import circlelogo from '../../assests/png/circle.png';

const useStyles = makeStyles({
  Wrapper: {
    height: '70%',
    width: '70%',
    backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    // backgroundImage: `url(${circlelogo})`,
    // border: '1px solid purple',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // position: 'relative',
    // // padding: '35%',
    // marginTop: '1em',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',

    // '@media screen and (max-width: 1400px)': {
    //   marginTop: '2em',
    // },
    // '@media screen and (max-width: 1300px)': {
    //   marginTop: '4em',
    // },
    // '@media screen and (max-width: 1100px)': {
    //   marginTop: '5em',
    // },
    // '@media screen and (max-width: 1025px)': {
    //   marginTop: '-1em',
    //   padding: '22%',
    // },
    // '@media screen and (max-width: 960px) and (min-width: 600px)': {
    //   marginTop: '3.5em',
    // },
    // '@media screen and (max-width: 1280px) and (min-width: 960px)': {
    //   marginTop: '3.5em',
    // },
    // '@media screen and (max-width: 960px)': {
    //   padding: '22%',
    //   marginTop: '1em',
    // },
  },

  image: {
    // height: 500,
    width: '100%',
    // position: 'absolute',
    // left: 0,
    // top: 0,
    // width: '75%',
    // height: 'auto',
    transform: 'rotate(30deg)',
    // marginTop: '-9rem',
    // marginLeft: '5rem',
    // '@media screen and (max-width: 1280px)': {
    //   marginTop: '-7rem',
    // },
    // '@media screen and (max-width: 960px)': {
    //   width: '50%',
    // },
    // '@media screen and (max-width: 1100px)': {
    //   marginTop: '-6rem',
    // },
    // '@media screen and (max-width: 1025px)': {
    //   width: '60%',
    // marginLeft: '10rem',
    // marginTop: '-11rem',
    // },
  },
});

const ShoesPreview = ({ productdata }) => {
  const classes = useStyles();
  return (
    <div className={classes.Wrapper}>
      <img src={productdata.img} alt="" className={classes.image} />
    </div>
  );
};

export default ShoesPreview;
