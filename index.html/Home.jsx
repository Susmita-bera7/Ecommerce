import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { Box, Button, Container, Grid, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import stripePromise from './StripeConfig';
import CheckoutForm from './CheckoutForm';
import './home.css';
import pic1 from './Pictures/pic1.jpeg';
import Dropdown from './Dropdown';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import NavBar from './NavBar';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (productName, productPrice) => {
    setCartItems([...cartItems, { name: productName, price: productPrice }]);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <>
      <NavBar />
      <Container>
        <Box mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Box p={2} display="flex" justifyContent="space-around">
                  <Typography variant="body1"><AccessAlarmIcon /> 2 Hour Delivery</Typography>
                  <Typography variant="body1"><LocalShippingIcon /> Free Shipping</Typography>
                  <Typography variant="body1"><TagFacesIcon /> 1000+ happy customers</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" align="center"><b>Filters</b></Typography>
                  <Dropdown />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={9}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom><b>Sort by:</b></Typography>
                  <List>
                    <ListItem button><ListItemText primary="What's new" /></ListItem>
                    <ListItem button><ListItemText primary="Popularity" /></ListItem>
                    <ListItem button><ListItemText primary="High to low" /></ListItem>
                    <ListItem button><ListItemText primary="Low to High" /></ListItem>
                    <ListItem button><ListItemText primary="Customer rating" /></ListItem>
                  </List>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                {[pic1, pic1, pic1, pic1, pic1, pic1, pic1, pic1, pic1, pic1, pic1, pic1, pic1, pic1].map((pic, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper>
                      <Box p={2} textAlign="center">
                        <img src={pic} alt={`Product ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => addToCart(`Product ${index + 1}`, 15)}
                          style={{ marginTop: '10px' }}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h6"><b>Your Cart</b></Typography>
                  <List>
                    {cartItems.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={`${item.name} - $${item.price}`} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCheckout}
                    fullWidth
                  >
                    Checkout
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {showCheckout && (
          <Box mt={4}>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </Box>
        )}

        <Box mt={4}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6"><b>Contact Info</b></Typography>
              {/* Add your contact info here */}
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Home;
