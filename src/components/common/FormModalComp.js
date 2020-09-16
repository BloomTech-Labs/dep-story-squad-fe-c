// see README.md in components/common dir for more info

import React, { useEffect, useState, Children, cloneElement } from 'react';
import { Modal } from 'antd';
import { useHistory, withRouter } from 'react-router-dom';

// styles
import './FormModalComp.less';
import PropTypes from 'prop-types';

const ModalComp = props => {
  const [showModal, setShowModal] = useState(true);

  const history = useHistory();

  const { formVisibility, setFormVisibility } = useState({
    userForm: true,
    pinForm: false,
  });


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
      setFormVisibility: { setFormVisibility },
      formVisibility: { formVisibility },
      setFormSubmissionData: setFormSubmissionData,
      formSubmissionData: formSubmissionData,
      showModal: showModal,
      setShowModal: setShowModal,
    });
  }

  useEffect(() => {
    // setsVisibility of child forms
    elements.forEach(ele => {
      console.log('ele: ', ele);
    });
  }, [formVisibility, elements]);

  const handleCancel = () => {
    history.push('/login');
    setShowModal(false);
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
        {/* the component(s) to display inside the modal, from props */}
        {elements.map(ele => {
          return <div key={Math.random() * Date.now()}>{ele}</div>;
        })}
      </Modal>
    </div>
  );
};

ModalComp.propTypes = {
  props: PropTypes.node,
};

export default ModalComp;
