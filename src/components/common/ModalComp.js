import React, { useState } from 'react';
import { Modal } from 'antd';
import { UserForm } from './UserForm';
import { useHistory } from 'react-router-dom';

// styles

import PropTypes from 'prop-types';

const ModalComp = props => {
  const [showModal, setShowModal] = useState(true);
  const history = useHistory();

  const handleCancel = () => {
    history.push('/login');
    setShowModal(false);
  };

  return (
    <div className="modal">
      <Modal
        closable
        // title="So we can direct you to the right place, please let us know who you are."
        visible={showModal}
        footer={null}
        onCancel={handleCancel}
      >
        {/* the component to display inside the modal, from props */}
        {/* <DispComponent setShowModal={setShowModal} /> */}
        {props.children}
      </Modal>
    </div>
  );
};

ModalComp.propTypes = {
  DispComponent: PropTypes.object.isRequired,
};

export default ModalComp;
