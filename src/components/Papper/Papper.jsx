import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import MenProducts from '../MenProducts/MenProducts';
import WomenProducts from '../WomenProducts/WomenProducts';
import Navbar from '../Navbar/Navbar';
import MenDatas from '../../productdata/menproductdata/menproductdata';
import { Routes, Route } from 'react-router-dom';

const useStyles = makeStyles({
  papercontainer: {
    // display: 'flex',
  },

  paper: {
    // dsiplay: 'flex',
    // flexDirection: 'column',
    height: 'auto',
    width: '95vw',
    backgroundColor: '#fefbec',
    border: '3px solid green',
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
        <Routes>
          <Route
            path="/"
            element={
              <MenProducts
                productdata={productdata}
                handleClickImage={handleClickImage}
                handleClickCart={handleClickCart}
              />
            }
          />

          <Route path="womenproducts" element={<WomenProducts />} />
        </Routes>
      </div>
    </Paper>
  );
};
export default Papper;
