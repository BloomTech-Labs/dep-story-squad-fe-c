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

const StripeUpdateForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const { curUserId, curUserToken } = useRecoilValue(currentUserState);
  const [canceling, setCanceling] = useState(false);
  const [updating, setUpdating] = useState(false);

  //updates the default payment method of the customer
  const handleSubmit = async event => {
    event.preventDefault();
    //create a new payment method with the form data
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: email,
      },
    });

    //if there's an error alert the user
    if (result.error) {
      alert(result.error.message);
    } else {
      const payload = {
        payment_method: result.paymentMethod.id,
      };
      //axios call to backend sending the payment method
      axios
        .post(`http://localhost:8000/sub/${curUserId}/update`, payload, {
          headers: { Authorization: `Bearer ${curUserToken}` },
        })
        .then(res => {
          alert(res.data.message);
          setUpdating(!updating);
        })
        .catch(err => {
          alert(err.message);
        });
    }
  };

  const toggleCanceling = event => {
    event.preventDefault();
    setCanceling(!canceling);
  };

  const toggleUpdating = event => {
    event.preventDefault();
    setUpdating(!updating);
  };

  const handleCancel = async event => {
    //makes a call to the backend to cancel the user's subscription
    const res = await axios.post(
      `http://localhost:8000/sub/${curUserId}/cancel`,
      { message: 'delete my sub please' },
      { headers: { Authorization: `Bearer ${curUserToken}` } }
    );
    console.log(res);
  };

  //If updating is true we render the update payment method form
  if (updating) {
    return (
      <div className="sub-dash-container">
        <div className="form-card">
          <h2>Update prefered payment method</h2>
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
              Update
            </button>
          </form>
          <button onClick={toggleUpdating}>Nevermind</button>
        </div>
      </div>
    );
  }

  if (canceling) {
    return (
      <div className="sub-dash-container">
        <div className="form-card">
          <h2>Cancel subscription?</h2>
          <button onClick={handleCancel}>Confirm</button>
          <button onClick={toggleCanceling}>Nevermind</button>
        </div>
      </div>
    );
  }

  return (
    <div className="sub-dash-container">
      <div className="form-card">
        <h2>Manage Your Subscription</h2>
        <button onClick={toggleUpdating}>Update Payment Method</button>
        <button onClick={toggleCanceling}>Cancel My Subscription</button>
      </div>
    </div>
  );
};

const StripeAccountForm = props => (
  <Elements stripe={stripePromise}>
    <StripeUpdateForm {...props} />
  </Elements>
);

export default StripeAccountForm;
