// see README.md in components/common dir for more info

import React from 'react';
import PropTypes from 'prop-types';

// components
import PinInput from 'react-pin-input';

// styles
import './PINForm.less';

const PINForm = ({ mainSubmit, formSubmissionData, setFormSubmissionData }) => {
  const handleChange = value => {
    // sends form data to modal component
    setFormSubmissionData({
      ...formSubmissionData,
      pin: value,
    });
  };

  return (
    // REMOVE STYLES!!
    <div className="pinFormCont">
      <label>
        Enter PIN:
        <PinInput
          formValue={formSubmissionData.pinform}
          handleChange={handleChange}
          length={4}
          initialValue=""
          // secret= {false}
          onChange={(value, index) => {
            handleChange(value);
          }}
          type="numeric"
          inputMode="number"
          inputStyle={{ borderColor: '#6CEAE5' }}
          inputFocusStyle={{ borderColor: 'blue' }}
          onComplete={(value, index) => {
            mainSubmit();
          }}
          autoSelect={true}
        />
      </label>
    </div>
  );
};

PINForm.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  setFormSubmissionData: PropTypes.func,
  formSubmissionData: PropTypes.object,
};

export default PINForm;
