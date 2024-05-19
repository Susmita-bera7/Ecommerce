import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Box, Button, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
    }
  };

  return (
    <Paper>
      <Box p={3}>
        <Typography variant="h6" gutterBottom>
          Complete your purchase
        </Typography>
        <Form onSubmit={handleSubmit}>
          <CardElement />
          <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
            Pay
          </Button>
        </Form>
      </Box>
    </Paper>
  );
};

export default CheckoutForm;
