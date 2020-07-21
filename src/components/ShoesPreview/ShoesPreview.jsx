import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Wrapper: {
    height: '55%',
    width: '55%',
    backgroundColor: '#f4ca51',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },

  image: {
    width: '120%',
    transform: 'rotate(30deg)',
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
