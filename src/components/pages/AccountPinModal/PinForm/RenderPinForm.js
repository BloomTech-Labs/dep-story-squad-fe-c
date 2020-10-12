// Render pin, JSX goes here, logic in PinFormContainer

import React from 'react';
import PinInput from 'react-pin-input';
import PropTypes from 'prop-types';

const RenderPinForm = ({ formSubmissionData, handleChange }) => {
  return (
    <div className="pinFormCont">
      <label>
        <span className="label">Enter PIN:</span>
        <PinInput
          formValue={formSubmissionData.pin}
          length={4}
          focus
          initialValue=""
          secret // hides as you enter pin
          onChange={(value, index) => {
            handleChange(value);
          }}
          type="numeric"
          inputMode="number"
          style={{ borderRadius: '4px' }}
          inputStyle={{ border: '3px solid #73adec', borderRadius: '7px' }}
          inputFocusStyle={{ border: '3px solid #0267c1' }}
          autoSelect={true}
        />
      </label>
    </div>
  );
};

RenderPinForm.propTypes = {
  formSubmissionData: PropTypes.object,
  handleChange: PropTypes.func,
};

export default RenderPinForm;
