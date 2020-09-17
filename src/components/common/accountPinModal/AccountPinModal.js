// see README.md in components/common dir for more info

import React, { useState } from 'react';
import { Modal } from 'antd';

import UserForm from './UserForm';
import PINForm from './PINForm';
import { useHistory } from 'react-router-dom';

const AccountPinModal = props => {
  const [showModal, setShowModal] = useState(true);

  const history = useHistory();

  const [formVisibility, setFormVisibility] = useState({
    userForm: true,
    pinForm: false,
  });

  // from back-end pin validation
  const [validationError, setValidationError] = useState(
    'Pin and account type validation errors'
  );

  // stores 'formdata' from each form in form sequence til ready for submission. formsubmissionData ex:
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
    // axios call here to verify account and PIN
    // if errors display errors
    // else, submit form
    // render loader
    // close modal, redirect to dash
    history.push('/login');
  };

  return (
    <div className="modal" data-testid="formModalCont">
      <Modal
        data-testid="formModal"
        style={{
          boxSizing: 'border-box',
          padding: '2%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        closable
        // displayed 'label' text for the modal header
        visible={showModal}
        footer={null}
        onCancel={handleCancel}
      >
        {formVisibility.userForm && (
          <UserForm
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
            formSubmissionData={formSubmissionData}
            setFormSubmissionData={setFormSubmissionData}
          />
        )}
        {formVisibility.pinForm && (
          <PINForm
            mainSubmit={mainSubmit}
            setShowModal={setShowModal}
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
            formSubmissionData={formSubmissionData}
            setFormSubmissionData={setFormSubmissionData}
          />
        )}
        {validationError && (
          <div style={{ color: 'red' }} className="pinFormError">
            {validationError}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AccountPinModal;
