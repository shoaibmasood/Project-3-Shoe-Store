import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
  Modal,
  Badge,
  IconButton,
  CardContent,
  Card,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    // flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

function Cart({ cart }) {
  // console.log(cart);

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  // const [cartData, setCartData] = useState([...cart]);

  // console.log(cartData[0]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = cart.map((item, index) => (
    <div style={modalStyle} className={classes.paper} key={index}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardMedia
            className={classes.cover}
            image={item.thumbnail}
            title="Live from space album cover"
          />
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {item.price}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  ));

  return (
    <div>
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div>
              {body}
              <Button> Check out</Button>
            </div>
          </Modal>
        </Badge>
      </IconButton>
    </div>
  );
}

export default Cart;
