// pin form container. Logic goes here

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Recoil state management
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../../../state/userState';

// components
import RenderPinForm from './RenderPinForm';

// API
import { getAccount } from '../../../../api';

// uses an auto-submit feature
const PinFomContainer = ({
  curUserType,
  curUserId,
  validationError,
  setValidationError,
  history,
}) => {
  const [formData, setFormData] = useState(['', '', '', '']);
  const [formString, setFormString] = useState(formData.join(''));
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  // references to the input elements
  // assigned in the renderPinForm  input 'ref' attributes
  const ref_start = useRef();
  const ref_1 = useRef();
  const ref_2 = useRef();
  const ref_3 = useRef();

  // used to increment input focus as you type, below
  const nextFocus = {
    0: ref_1.current,
    1: ref_2.current,
    2: ref_3.current,
  };

  // only submits when pin length === 4
  const handleSubmit = () => {
    if (formString.length === 4) {
      setValidationError('');
      const url = `/${curUserType}/${curUserId}`;
      getAccount(url, formString)
        .then(res => {
          // fire Recoil selector to set localstorage and state
          setCurrentUser({
            ...currentUser,
            curUserToken: res.data.token,
            missionProgress: res.data.mission_progress,
          });

          if (!validationError) {
            history.push('/dashboard');
          }
        })
        .catch(err => {
          if (err) {
            setValidationError('Error: Invalid PIN');

            // reset all form state
            setFormData(['', '', '', '']);
            setFormString(formData.join(''));

            // reset input focus
            ref_start.current.focus();
          }
        });
    }
  };

  const changeHandler = e => {
    // clear any prev validation errors
    if (validationError) {
      setValidationError('');
    }

    const { name, value } = e.target;
    // restrict input to nums(0-9) only
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

      // increment input focus as you type
      if (name in nextFocus) {
        nextFocus[name].focus();
      }
    }
  };

  // every keystroke triggers this
  useEffect(() => {
    handleSubmit();
  }, [formData]);

  return (
    <>
      <RenderPinForm
        ref_start={ref_start}
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
