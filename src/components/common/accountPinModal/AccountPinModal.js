// see README.md in components/common dir for more info

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Modal } from 'antd';
import { getAccounts } from '../../../api';
import axios from 'axios';
import { useLocalStorage } from '../../../utils/hooks';

// components
import UserForm from './UserForm';
import PINForm from './PINForm';
import { useHistory } from 'react-router-dom';

const AccountPinModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef(isLoading);
  const loggedInUser = JSON.parse(
    window.localStorage.getItem('okta-token-storage')
  );
  const tokenRef = useRef(loggedInUser.idToken.value);
  const [accounts, setAccounts] = useLocalStorage('accounts', null);

  const [curUser, setCurUser] = useState({});

  const history = useHistory();
  const [formVisibility, setFormVisibility] = useState({
    userForm: true,
    pinForm: false,
  });
  const [validationError, setValidationError] = useState(
    'Pin and account type validation errors'
  );
  const [formSubmissionData, setFormSubmissionData] = useState({
    // pin: {'1234'},
    // userForm: {'child'}
  });

  const handleCancel = () => {
    history.push('/login');
    setShowModal(false);
  };

  // called from the pinForm on submit
  const mainSubmit = () => {
    const id = curUser.id;
    const url = curUser.type;

    axios
      .post(
        `https://story-squad-c-api.herokuapp.com/${url}/${id}`,
        {
          pin: `${formSubmissionData.pin}`,
        },
        {
          headers: {
            Authorization: `Bearer ${tokenRef.current}`,
          },
        }
      )
      .then(res => {
        console.log(res.data);
        history.push('/dashboard');
      })

      .catch(err => {
        // if errors display errors
        setValidationError('Invalid PIN');
      });
  };

  const setLoading = useCallback(() => {
    setIsLoading(!loadingRef.current);
  }, []);

  useEffect(() => {
    getAccounts(tokenRef.current)
      .then(res => {
        setAccounts(res.accounts);
        setLoading();
      })
      .catch(err => setValidationError('Server Error'));
  }, [setLoading]);

  return (
    <div className="modal" data-testid="formModalCont" key="formModalCont">
      <Modal
        key="formModal"
        data-testid="formModal"
        style={{
          width: '100%',
        }}
        destroyOnClose
        closable
        // displayed 'label' text for the modal header
        visible={showModal}
        footer={null}
        onCancel={handleCancel}
      >
        {formVisibility.userForm && (
          <UserForm
            setCurUser={setCurUser}
            accounts={accounts}
            loggedInUser={loggedInUser}
            isLoading={isLoading}
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
          />
        )}
        {formVisibility.pinForm && (
          <PINForm
            loggedInUser={loggedInUser}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            mainSubmit={mainSubmit}
            setShowModal={setShowModal}
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
            formSubmissionData={formSubmissionData}
            setFormSubmissionData={setFormSubmissionData}
          />
        )}
        {validationError && (
          <div className="pinFormError">{validationError}</div>
        )}
      </Modal>
    </div>
  );
};

export default AccountPinModal;
