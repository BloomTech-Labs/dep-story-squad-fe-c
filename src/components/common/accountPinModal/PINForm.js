// see README.md in components/common dir for more info

import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../../../utils/hooks';
import { getAccount } from '../../../api';

// components
import PinInput from 'react-pin-input';

const PINForm = ({
  formSubmissionData,
  setFormSubmissionData,
  setValidationError,
}) => {
  const [curUserId] = useLocalStorage('curUserId', null);
  const [curUserType] = useLocalStorage('curUserType', null);
  const loggedInUser = JSON.parse(
    window.localStorage.getItem('okta-token-storage')
  );
  const tokenRef = useRef(loggedInUser.idToken.value);

  const handleChange = value => {
    // sends form data to modal component
    setFormSubmissionData({
      ...formSubmissionData,
      pin: value,
    });
  };

  const [, setCurUserToken] = useLocalStorage('curUserToken', null);

  const history = useHistory();

  const mainSubmit = () => {
    const url = `${curUserType}/${curUserId}`;
    getAccount(url, formSubmissionData.pin, tokenRef.current)
      .then(res => {
        setCurUserToken(res.token);
        history.push('/dashboard');
      })
      .catch(err => {
        // still need to implement error handling
        if (err) {
          setValidationError('Error: Invalid PIN');
        }
      });
  };

  useEffect(() => {
    if (formSubmissionData.pin && formSubmissionData.pin.length === 4) {
      mainSubmit();
    }
  }, [formSubmissionData]);

  return (
    <div className="pinFormCont">
      <label>
        Enter PIN:
        <PinInput
          formValue={formSubmissionData.pin}
          length={4}
          focus
          initialValue=""
          secret
          onChange={(value, index) => {
            handleChange(value);
          }}
          type="numeric"
          inputMode="number"
          inputStyle={{ borderColor: '#6CEAE5' }}
          inputFocusStyle={{ borderColor: 'blue' }}
          autoSelect={true}
        />
      </label>
    </div>
  );
};

PINForm.propTypes = {
  setFormSubmissionData: PropTypes.func,
  formSubmissionData: PropTypes.object,
  setValidationError: PropTypes.func,
};

export default PINForm;
