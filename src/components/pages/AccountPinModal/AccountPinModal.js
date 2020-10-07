import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Modal } from 'antd';
import { getLogin } from '../../../api';
import { useLocalStorage } from '../../../utils/hooks';

// components
import UserFormContainer from './UserForm/UserFormContainer';
import PinFormContainer from './PinForm/PinFormContainer';
import { useHistory } from 'react-router-dom';

const AccountPinModal = props => {
  const [showModal, setShowModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formVisibility, setFormVisibility] = useState({
    userFormContainer: true,
    pinForm: false,
  });
  const [validationError, setValidationError] = useState('');
  const [formSubmissionData, setFormSubmissionData] = useState({});

  const loggedInUser = JSON.parse(
    window.localStorage.getItem('okta-token-storage')
  );
  const loggedInUserToken = loggedInUser.idToken.value;
  const [accounts, setAccounts] = useLocalStorage('accounts', null);

  const history = useHistory();

  const handleCancel = () => {
    history.push('/login');
    setShowModal(false);
  };

  const setLoading = useCallback(() => {
    setIsLoading(!isLoading);
  }, []);

  useEffect(() => {
    getLogin(loggedInUserToken)
      .then(res => {
        if (!accounts) {
          setAccounts(res.data.accounts);
          setLoading();
        }
      })
      .catch(err => console.log('Server Error: ', err.message));
  }, [setLoading, setAccounts, accounts]);

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
        visible={showModal}
        footer={null}
        onCancel={handleCancel}
      >
        {formVisibility.userFormContainer && (
          <UserFormContainer
            accounts={accounts}
            isLoading={isLoading}
            setFormVisibility={setFormVisibility}
            setValidationError={setValidationError}
          />
        )}
        {formVisibility.pinForm && (
          <PinFormContainer
            loggedInUserToken={loggedInUserToken}
            formSubmissionData={formSubmissionData}
            setFormSubmissionData={setFormSubmissionData}
            setValidationError={setValidationError}
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
