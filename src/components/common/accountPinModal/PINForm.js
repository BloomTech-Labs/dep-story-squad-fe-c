// see README.md in components/common dir for more info

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../../../utils/hooks';

// components
import PinInput from 'react-pin-input';

const PINForm = ({ mainSubmit, formSubmissionData, setFormSubmissionData }) => {
  const [curUserId] = useLocalStorage('curUserId', null);
  const [curUserType] = useLocalStorage('curUserType', null);

  const handleChange = value => {
    // sends form data to modal component
    setFormSubmissionData({
      ...formSubmissionData,
      pin: value,
    });
  };

  useEffect(() => {
    if (formSubmissionData.pin && formSubmissionData.pin.length === 4) {
      mainSubmit(curUserType, curUserId);
    }
  }, [formSubmissionData.pin, mainSubmit]);

  return (
    <div className="pinFormCont">
      <label>
        Enter PIN:
        <PinInput
          formValue={formSubmissionData.pinform}
          handleChange={handleChange}
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
  mainSubmit: PropTypes.func,
};

export default PINForm;
