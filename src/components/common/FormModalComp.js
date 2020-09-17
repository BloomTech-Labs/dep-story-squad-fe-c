// see README.md in components/common dir for more info

import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { UserForm, PINForm } from '../common';
import { useHistory } from 'react-router-dom';

// styles
import './FormModalComp.less';
import PropTypes from 'prop-types';

const ModalComp = props => {
  const [showModal, setShowModal] = useState(true);

  const history = useHistory();

  const [formVisibility, setFormVisibility] = useState({
    userForm: true,
    pinForm: false,
  });

  // stores 'formdata' from each form in form sequence til ready for submission. formsubmissionData ex:
  const [formSubmissionData, setFormSubmissionData] = useState({
    // pin: {'1234'},
    // userForm: {'child'}
  });

  const handleCancel = () => {
    history.push('/login');
    setShowModal(false);
  };

  const mainSubmit = formSubmissionData => {
    // axios call here to verify account and PIN
    // if errors display errors
    // else, submit form and close modal, redirect to dash
    return;
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
      </Modal>
      {console.log('visibility: ', formVisibility)}
      {console.log('formData: ', formSubmissionData)}
    </div>
  );
};

ModalComp.propTypes = {};

export default ModalComp;
