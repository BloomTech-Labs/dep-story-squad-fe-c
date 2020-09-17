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
          inputStyle={{ borderColor: 'blue' }}
          inputFocusStyle={{ borderColor: 'green' }}
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
