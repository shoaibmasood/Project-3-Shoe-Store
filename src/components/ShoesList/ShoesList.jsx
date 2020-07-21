import React from 'react';
import datas from '../../productdata/menproductdata/menproductdata';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  thumbnailContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'scroll',
    overflowY: 'scroll',
    height: '60vh',
    marginTop: '1em',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '@media screen and (max-width: 960px)': {
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
});

function ShoesList({ handleClickImage }) {
  const classes = useStyles();
  return (
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
  );
}

export default ShoesList;
