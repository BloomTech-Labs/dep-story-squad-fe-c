// pin form container. Logic goes here
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// recoil
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../../../state/userState';

// components
import RenderPinForm from './RenderPinForm';

// API
import { getAccount } from '../../../../api';

const PinFomContainer = ({
  curUserType,
  curUserId,
  setValidationError,
  history,
}) => {
  const [formData, setFormData] = useState(['', '', '', '']);
  const [formString, setFormString] = useState(formData.join(''));
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  // references to the input elements
  const ref_1 = useRef();
  const ref_2 = useRef();
  const ref_3 = useRef();

  const nextFocus = {
    '0': ref_1.current,
    '1': ref_2.current,
    '2': ref_3.current,
  };

  const handleSubmit = () => {
    if (formString.length === 4) {
      const url = `/${curUserType}/${curUserId}`;
      getAccount(url, formString)
        .then(res => {
          // fire Recoil selector to set localstorage and state
          setCurrentUser({
            ...currentUser,
            curUserToken: res.data.token,
            missionProgress: res.data.mission_progress,
          });

          history.push('/dashboard');
        })
        .catch(err => {
          if (err) {
            setValidationError('Error: Invalid PIN');
          }
        });
    }
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    // restrict to nums(0-9) only
    if (value.match(/^[0-9]*$/)) {
      setFormData(
        formData.map((ele, i) => {
          let temp = ele;
          if (i === parseInt(name)) {
            temp = value;
          }
          return temp;
        })
      );
      setFormString(formString + value);

      // increment focus
      if (name in nextFocus) {
        nextFocus[name].focus();
      }
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [formData, handleSubmit]);

  return (
    <>
      <RenderPinForm
        ref_1={ref_1}
        ref_2={ref_2}
        ref_3={ref_3}
        formData={formData}
        formString={formString}
        changeHandler={changeHandler}
      />
    </>
  );
};

RenderPinForm.propTypes = {
  curUserType: PropTypes.string,
  setValidationError: PropTypes.func,
  curUserId: PropTypes.string,
  history: PropTypes.object,
};

export default PinFomContainer;
