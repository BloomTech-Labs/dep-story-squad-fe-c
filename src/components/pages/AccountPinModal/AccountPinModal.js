import React, { useState, useEffect } from 'react';
import { userLogin } from '../../../api';
import { useHistory } from 'react-router-dom';

// Recoil State Management
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../../state/userState';

// components
import { Modal } from 'antd';
import UserFormContainer from './UserForm/UserFormContainer';
import PinFormContainer from './PinForm/PinFormContainer';

const AccountPinModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [validationError, setValidationError] = useState('');
  const history = useHistory();

  // toggles userForm off and the PinForm on after account selection
  const [formVisibility, setFormVisibility] = useState({
    userFormContainer: true,
    pinForm: false,
  });

  // current logged in user account
  const [currentUser] = useRecoilState(currentUserState);
  const { curUserId, curUserType } = currentUser;

  // all child accounts associated with the main parent login account
  const [accounts, setAccounts] = useState(null);

  const handleCancel = () => {
    history.push('/login');
    setShowModal(false);
  };

  useEffect(() => {
    // grabs all associated child accounts to populate the buttons for account selection
    userLogin('/auth/login')
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
          />
        )}

        {formVisibility.pinForm && (
          <PinFormContainer
            validationError={validationError}
            setValidationError={setValidationError}
            curUserType={curUserType}
            curUserId={curUserId}
            history={history}
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
