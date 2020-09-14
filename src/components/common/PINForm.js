// see README.md in components/common dir for more info

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import PinInput from 'react-pin-input';

// styles
import './PINForm.less';

const PINForm = ({
  showModal,
  setShowModal,
  formSubmissionData,
  setFormSubmissionData,
}) => {
  const [formValue, setFormValue] = useState('');

  // from back-end pin validation
  const [validationError, setValidationError] = useState(
    'Pin and account type validation errors'
  );

  const handleChange = value => {
    setFormValue(value);
  };

  const handleSubmit = () => {
    // TODO: need an axios call here to the back-end

    // sends form data to modal component
    setFormSubmissionData({
      ...formSubmissionData,
      pin: formValue,
    });
    // if validationError don't submit
    // else: call Modal submit func and send data

    // TODO: redirect to appropriate dashboard page
    //  ............
    // close modal
    setShowModal(false);
  };

  return (
    // REMOVE STYLES!!
    <div
      style={{
        marginTop: '12%',
        width: '100%',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <label>
        Enter PIN:
        <PinInput
          formValue={formValue}
          handleChange={handleChange}
          length={4}
          initialValue=""
          // secret= {false}
          onChange={(value, index) => {
            handleChange(value);
          }}
          type="numeric"
          inputMode="number"
          inputStyle={{ borderColor: 'blue' }}
          inputFocusStyle={{ borderColor: 'green' }}
          onComplete={(value, index) => {
            handleSubmit();
          }}
          autoSelect={true}
        />
      </label>

      <div style={{ color: 'red' }} className="pinFormError">
        {validationError}
      </div>
    </div>
  );
};

PINForm.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  setFormSubmissionData: PropTypes.func,
  formSubmissionData: PropTypes.bool,
};

export default PINForm;
