import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import MenProducts from '../MenProducts/MenProducts';
import Navbar from '../Navbar/Navbar';
import MenDatas from '../../productdata/menproductdata/menproductdata';
import { useState } from 'react';

const useStyles = makeStyles({
  papercontainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  paper: {
    // dsiplay: 'flex',
    height: '85vh',
    width: '95vw',
    backgroundColor: '#fefbec',
    borderRadius: 15,
    // overflow: 'hidden',
  },
});

const Papper = () => {
  const classes = useStyles();

  const initialState = MenDatas[0];
  const [productdata, setproductData] = useState(initialState);
  const [cart, setCart] = useState(0);

  const handleClickImage = (id) => {
    console.log(id);
    const foundproduct = MenDatas.find((data) => data.id === id);
    setproductData(foundproduct);
  };

  const handleClickCart = () => {
    setCart(cart + 1);
  };

  // console.log(cart);

  return (
    <Paper elevation={10} className={classes.paper}>
      <div className={classes.papercontainer}>
        <Navbar cart={cart} />

        <MenProducts
          productdata={productdata}
          handleClickImage={handleClickImage}
          handleClickCart={handleClickCart}
        />
      </div>
    </Paper>
  );
};
export default Papper;
