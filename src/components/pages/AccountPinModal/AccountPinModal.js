import React, { useState, useEffect } from 'react';
import { getAccount, getLogin } from '../../../api';
import { useHistory } from 'react-router-dom';

// recoil
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../../state/userState';

// components
import { Modal } from 'antd';
import UserFormContainer from './UserForm/UserFormContainer';
import PinFormContainer from './PinForm/PinFormContainer';

const AccountPinModal = props => {
  const [showModal, setShowModal] = useState(true);
  const [validationError, setValidationError] = useState('');
  const history = useHistory();
  const [formSubmissionData, setFormSubmissionData] = useState({});

  const [formVisibility, setFormVisibility] = useState({
    userFormContainer: true,
    pinForm: false,
  });

  const authToken = JSON.parse(
    window.localStorage.getItem('okta-token-storage')
  ).idToken.value;

  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const { curUserId, curUserType } = currentUser;

  const [accounts, setAccounts] = useState(null);

  const mainSubmit = () => {
    const url = `${curUserType}/${curUserId}`;
    getAccount(url, formSubmissionData.pin, authToken)
      .then(res => {
        // fire selector to set localstorage

        setCurrentUser({ ...currentUser, curUserToken: res.data.token });
        console.log('userState: ', curUserType);
        history.push('/dashboard');
      })
      .catch(err => {
        if (err) {
          setValidationError('Error: Invalid PIN');
        }
      });
  };

  const handleCancel = () => {
    history.push('/login');
    setShowModal(false);
  };

  useEffect(() => {
    getLogin(authToken)
      .then(res => {
        if (!accounts) {
          setAccounts(res.data.accounts);
        }
      })
      .catch(err => console.log('Server Error: ', err.message));
  }, [setAccounts, accounts]);

  return (
    <div className="modal" data-testid="formModalCont" key="formModalCont">
      <Modal
        key="formModal"
        data-testid="formModal"
        style={{
          width: '100%',
          maxWidth: '100%',
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
            setFormVisibility={setFormVisibility}
            setValidationError={setValidationError}
          />
        )}

        {formVisibility.pinForm && (
          <PinFormContainer
            authToken={authToken}
            mainSubmit={mainSubmit}
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
