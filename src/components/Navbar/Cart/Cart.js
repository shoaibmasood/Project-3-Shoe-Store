import React from 'react';
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
    display: 'flex',
    flexDirection: 'column',
    margin: '1px',
    position: 'absolute',
    width: 400,
    height: 'auto',
    backgroundColor: '#fefbec',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // overflowY: 'scroll',
    // overflowX: 'scroll',
  },
  root: {
    display: 'flex',

    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    // flex: '1 0 auto',
    textTransform: 'capitalize',
  },
  cover: {
    width: 100,
  },

  checkoutbutton: {
    color: 'white',
    backgroundColor: '#f5cb52',
    '&:hover': {
      backgroundColor: '#FCF5CA',
      color: 'black',
    },
  },
}));

function Cart({ cart }) {
  // console.log(cart);

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  // Strping all values of price from cart array
  const prices = cart.map((price) => price.price);

  // Total for checkout
  const total = prices.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {cart.map((item, index) => (
        <Card className={classes.root} key={index}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.price}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={item.thumbnail}
            title="Live from space album cover"
          />
        </Card>
      ))}
      <Button
        variant="contained"
        className={classes.checkoutbutton}
        onClick={() =>
          alert(`Your's Total Amount is $${total}, Click ok to purchase`)
        }
      >
        Check out
      </Button>
    </div>
  );

  return (
    <div>
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon onClick={handleOpen} />
          <Modal open={open} onClose={handleClose}>
            <div>{body}</div>
          </Modal>
        </Badge>
      </IconButton>
    </div>
  );
}

export default Cart;
