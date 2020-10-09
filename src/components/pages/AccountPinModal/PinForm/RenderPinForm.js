// Render pin, JSX goes here, logic in PinFormContainer

import React from 'react';
import PinInput from 'react-pin-input';
import PropTypes from 'prop-types';
import Column from 'antd/lib/table/Column';

const RenderPinForm = ({ formSubmissionData, handleChange }) => {
  return (
    <div className="pinFormCont">
      <label>
        Enter PIN:
        <PinInput
          id="pinInput"
          name="pinInput"
          formValue={formSubmissionData.pin}
          length={4}
          focus
          initialValue=""
          // hide as you enter pin
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

RenderPinForm.propTypes = {
  formSubmissionData: PropTypes.object,
  handleChange: PropTypes.func,
};

export default RenderPinForm;
