// see README.md in components/common dir for more info

import React, { useState, Children, cloneElement } from 'react';
import { Modal } from 'antd';

// styles
import './FormModalComp.less';
import PropTypes from 'prop-types';

const ModalComp = props => {
  const [showModal, setShowModal] = useState(true);

  // stores 'formdata' from each form in form sequence til ready for submission. formsubmissionData ex:
  // {
  // pin: {'1234'},
  // form2: {data}
  // }
  const [formSubmissionData, setFormSubmissionData] = useState({});

  let elements = Children.toArray(props.children);

  // get props into the 'props.children' forms
  for (let i = 0; i < elements.length; i++) {
    elements[i] = cloneElement(elements[i], {
      setFormSubmissionData: setFormSubmissionData,
      formSubmissionData: formSubmissionData,
      showModal: showModal,
      setShowModal: setShowModal,
    });
  }

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <Modal
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
        {/* the component(s) to display inside the modal, from props */}
        {elements.map(ele => {
          return <div key={ele.length * Math.random()}>{ele}</div>;
        })}
      </Modal>
      {console.log('elements: ', elements)}
      {console.log('formSubmissionData: ', formSubmissionData)}
    </div>
  );
};

ModalComp.propTypes = {
  props: PropTypes.node.isRequired,
};

export default ModalComp;
