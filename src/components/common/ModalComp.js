import React, { useState } from 'react';
import { Modal } from 'antd';

// styles
import './Modal.less';
import PropTypes from 'prop-types';

const ModalComp = props => {
  const [showModal, setShowModal] = useState(true);

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <Modal
        closable
        title="Enter Your PIN"
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
