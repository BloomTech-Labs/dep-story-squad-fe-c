import React, { useState } from 'react';

function UserForm({
  setFormSubmissionData,
  formSubmissionData,
  setFormVisibility,
  formVisibility,
}) {
  const handleSubmit = e => {
    console.log('submit event!!!');
    // send data to FormModalComp state to store until ready to submit to BE
    setFormSubmissionData({
      ...formSubmissionData,
      userForm: e.target.value,
    });
    // hide this form
    // show next form
    // state: {
    //   userForm: true,
    //   pinForm: false
    // }
    // TODO: add an animation transition between these forms
    console.log('before formVisibility: ', formVisibility);
    setFormVisibility({
      userForm: false,
      pinForm: true,
    });
    console.log('after formVisibility: ', formVisibility);
  };
  return (
    <div className="userForm">
      <div className="userText">
        <h3>
          So we can direct you to the right place, please let us know who you
          are.
        </h3>
      </div>
      <div className="userButton">
        <button onClick={e => handleSubmit(e)} value="parent">
          Parent
        </button>
        <button onClick={e => handleSubmit(e)} value="child1">
          Child 1
        </button>
        <button onClick={e => handleSubmit(e)} value="child2">
          Child 2
        </button>
      </div>
    </div>
  );
}

export default UserForm;
