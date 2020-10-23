import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../../state/userState';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const stripePromise = loadStripe(
  process.env.STRIPE_PUBLISHABLE_KEY ||
    'pk_test_51HXCmtGxs2Ay8GnvBuzhpvkOdJQCfvINpTAz28T6yQVAyJJoAlk46bXYO2pB2e6a68C8AQsqz1wpvkAvqM73NXyE002RVKFuSu'
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const { curUserId, curUserToken } = useRecoilValue(currentUserState);
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: email,
      },
    });

    console.log(result);

    if (result.error) {
      console.log(result.error.message);
    } else {
      const payload = {
        email: email,
        payment_method: result.paymentMethod.id,
      };
      //axios call to backend sending the payment method
      let res = {};
      try {
        res = await axios.post(
          `http://localhost:8000/sub/${curUserId}`,
          payload,
          { headers: { Authorization: `Bearer ${curUserToken}` } }
        );
      } catch (err) {
        console.log(err);
        alert('something went wrong');
        history.push('/');
        return;
      }

      console.log(res);

      const { client_secret, status } = res.data;

      if (status === 'requires_action') {
        //setStatus(status);
        //setClientSecret(client_secret);

        stripe.confirmCardPayment(client_secret).then(async function(result) {
          if (result.error) {
            //display error message
            console.log(result.error.message);
          } else {
            //show success message
            const confirmation = await axios.post(
              `http://localhost:8000/sub/${curUserId}/confirmed`,
              { message: 'payment successful' },
              { headers: { Authorization: `Bearer ${curUserToken}` } }
            );
            console.log(confirmation.data.message);
            console.log('we got tha money');
          }
        });
      } else {
        const confirmation = await axios.post(
          `http://localhost:8000/sub/${curUserId}/confirmed`,
          { message: 'payment successful' },
          { headers: { Authorization: `Bearer ${curUserToken}` } }
        );
        console.log(confirmation.data.message);
        console.log('we got tha money');
      }
    }
  };

  return (
    <div className="stripe-container">
      <h3 className="sub-description">
        Subscribing will give you full access to the Story Squad App! Your child
        will be able to create their account and start participating in weekly
        challenges that encourage reading comprehension, creative writing, and
        illustration.
      </h3>
      <h2 className="price-header">Price: $10 per month</h2>

      <form onSubmit={handleSubmit} className="payment-form">
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="email-input"
          placeholder="Email"
        />
        <div className="card-element-container">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#32325d',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
                  '::placeholder': {
                    color: '#a0aec0',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <button disabled={!stripe} className="subscribe-button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

const PaymentForm = props => (
  <Elements stripe={stripePromise}>
    <CheckoutForm {...props} />
  </Elements>
);

export default PaymentForm;
