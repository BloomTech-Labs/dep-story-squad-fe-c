// pin form container. Logic goes here
import React, { useEffect } from 'react';

// components
import RenderPinForm from './RenderPinForm';

const PinFomContainer = ({
  formSubmissionData,
  setFormSubmissionData,
  mainSubmit,
}) => {
  const handleChange = value => {
    // sends form data to modal component
    setFormSubmissionData({
      ...formSubmissionData,
      pin: value,
    });
  };

  useEffect(() => {
    if (formSubmissionData.pin && formSubmissionData.pin.length === 4) {
      mainSubmit();
    }
  }, [formSubmissionData]);

  return (
    <>
      <RenderPinForm
        formSubmissionData={formSubmissionData}
        handleChange={handleChange}
      />
    </>
  );
};

export default PinFomContainer;
