import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import MenProducts from '../MenProducts/MenProducts';
import WomenProducts from '../WomenProducts/WomenProducts';
import Navbar from '../Navbar/Navbar';
import MenDatas from '../../productdata/menproductdata/menproductdata';
import WomenDatas from '../../productdata/womenproductdata/womenproductdata';
import { Routes, Route } from 'react-router-dom';

const useStyles = makeStyles({
  papercontainer: {},

  paper: {
    height: 'auto',
    width: '95vw',
    backgroundColor: '#fefbec',
    borderRadius: 15,
  },
});

const Papper = () => {
  const classes = useStyles();

  //Initial State for Menproduct Data

  const initialState = MenDatas[0];
  const [productdata, setproductData] = useState(initialState);

  const [cart, setCart] = useState([]);

  //Initial State for Women product Data

  const initialStateWomen = WomenDatas[0];
  const [womenProductData, setWomenProductData] = useState(initialStateWomen);

  const handleClickImage = (id) => {
    console.log(id);
    const foundproduct = MenDatas.find((data) => data.id === id);
    setproductData(foundproduct);
  };

  const handleClickImageWomen = (id) => {
    const foundproduct = WomenDatas.find((data) => data.id === id);
    setWomenProductData(foundproduct);
  };

  const handleClickCart = () => {
    console.log(window.location.href);
    if (window.location.href === 'http://localhost:3000/') {
      setCart([...cart, productdata]);
    } else {
      setCart([...cart, womenProductData]);
    }
  };

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

          <Route
            path="womenproducts"
            element={
              <WomenProducts
                productdata={womenProductData}
                handleClickImage={handleClickImageWomen}
                handleClickCart={handleClickCart}
              />
            }
          />
        </Routes>
      </div>
    </Paper>
  );
};
export default Papper;
