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

const stripePromise = loadStripe(
  process.env.STRIPE_PUBLISHABLE_KEY ||
    'pk_test_51HXCmtGxs2Ay8GnvBuzhpvkOdJQCfvINpTAz28T6yQVAyJJoAlk46bXYO2pB2e6a68C8AQsqz1wpvkAvqM73NXyE002RVKFuSu'
);

const StripeUpdateForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const { curUserId, curUserToken } = useRecoilValue(currentUserState);
  //const [status, setStatus] = useState('');
  //const [clientSecret, setClientSecret] = useState('');

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
        payment_method: result.paymentMethod.id,
      };
      //axios call to backend sending the payment method
      const res = await axios.post(
        `http://localhost:8000/sub/${curUserId}/update`,
        payload,
        { headers: { Authorization: `Bearer ${curUserToken}` } }
      );

      console.log(res.data);
    }
  };

  const handleCancel = async event => {
    const res = await axios.post(
      `http://localhost:8000/sub/${curUserId}/cancel`,
      { message: 'delete my sub please' },
      { headers: { Authorization: `Bearer ${curUserToken}` } }
    );
    console.log(res);
  };

  return (
    <div>
      <h2>Update prefered payment method</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <CardElement />
        <button disabled={!stripe}>update</button>
      </form>
      <button onClick={handleCancel}>cancel</button>
    </div>
  );
};

const StripeAccountForm = props => (
  <Elements stripe={stripePromise}>
    <StripeUpdateForm {...props} />
  </Elements>
);

export default StripeAccountForm;
