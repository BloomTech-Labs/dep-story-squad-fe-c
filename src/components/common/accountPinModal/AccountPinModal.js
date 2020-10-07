import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Modal } from 'antd';
import { getLogin } from '../../../api';
import { useLocalStorage } from '../../../utils/hooks';

// components
import UserFormContainer from './UserFormContainer';
import PINForm from './PINForm';
import { useHistory } from 'react-router-dom';

const AccountPinModal = props => {
  const [showModal, setShowModal] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef(isLoading);
  const [formVisibility, setFormVisibility] = useState({
    userFormContainer: true,
    pinForm: false,
  });
  const [validationError, setValidationError] = useState('');
  const [formSubmissionData, setFormSubmissionData] = useState({});

  const loggedInUser = JSON.parse(
    window.localStorage.getItem('okta-token-storage')
  );
  const [accounts, setAccounts] = useLocalStorage('accounts', null);

  const tokenRef = useRef(loggedInUser.idToken.value);
  const history = useHistory();

  const handleCancel = () => {
    history.push('/login');
    setShowModal(false);
  };

  const setLoading = useCallback(() => {
    setIsLoading(!loadingRef.current);
  }, []);

  useEffect(() => {
    getLogin(tokenRef.current)
      .then(res => {
        if (!accounts) {
          setAccounts(res.data.accounts);
          setLoading();
        }
      })
      .catch(err => console.log('Server Error'));
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
          <PINForm
            loggedInUser={loggedInUser}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setShowModal={setShowModal}
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
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
