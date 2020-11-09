import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Recoil State Management (see readme in 'state' dir for more info on Recoil)
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../../state/userState';

// Ant Design
import { Modal } from 'antd';

// components
import { userLogin } from '../../../api';
import UserFormContainer from './UserForm/UserFormContainer';
import PinFormContainer from './PinForm/PinFormContainer';

const AccountPinModal = () => {
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

  // triggered on 'X' button or clicking off the modal
  const handleCancel = () => {
    //Check whether we currently have a user; if we do, send them back to dashboard; otherwise send to login.
    if (window.localStorage.getItem('currentUser')) {
      history.push('/dashboard');
    } else {
      history.push('/login');
    }
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
      {/* Ant Design Component */}
      <Modal
        key="formModal"
        data-testid="formModal"
        style={{
          width: '100%',
          maxWidth: '100%',
        }}
        destroyOnClose
        closable
        visible={true}
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
        <div className="pinFormError">{validationError && validationError}</div>
      </Modal>
    </div>
  );
};

export default AccountPinModal;
