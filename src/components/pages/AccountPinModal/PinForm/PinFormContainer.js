// pin from container. Logic goes here

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from '../../../../utils/hooks';
import { getAccount } from '../../../../api';

// components
import RenderPinForm from './RenderPinForm';

const PinFomContainer = ({
  loggedInUserToken,
  formSubmissionData,
  setFormSubmissionData,
  setValidationError,
}) => {
  const [curUserId] = useLocalStorage('curUserId', null);
  const [curUserType] = useLocalStorage('curUserType', null);
  const [, setCurUserToken] = useLocalStorage('curUserToken', null);
  const history = useHistory();

  const handleChange = value => {
    // sends form data to modal component
    setFormSubmissionData({
      ...formSubmissionData,
      pin: value,
    });
  };

  const mainSubmit = () => {
    const url = `${curUserType}/${curUserId}`;
    getAccount(url, formSubmissionData.pin, loggedInUserToken)
      .then(res => {
        setCurUserToken(res.data.token);
        history.push('/dashboard');
      })
      .catch(err => {
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
    <>
      <RenderPinForm
        formSubmissionData={formSubmissionData}
        handleChange={handleChange}
      />
    </>
  );
};

export default PinFomContainer;
