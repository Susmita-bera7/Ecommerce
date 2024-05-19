import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-public-key-here'); // Replace with your public key

export default stripePromise;
