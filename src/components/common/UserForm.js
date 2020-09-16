import React, { useState } from 'react';

//styles
import './UserForm.css';

function UserForm({
  setFormSubmissionData,
  formSubmissionData,
  setFormVisibility,
  formVisibility,
}) {
  const [userValue, setUserValue] = useState();

  const handleSubmit = value => {
    console.log('submitted!!!', value);
    // set component state
    setUserValue(value);

    // send data to FormModalComp state to store until ready to submit to BE
    setFormSubmissionData({
      ...formSubmissionData,
      user: userValue,
    });
    // hide this form
    // show next form
    // state: {
    //   userForm: true,
    //   pinForm: false
    // }
    setFormVisibility({
      ...formVisibility,
      userForm: false,
      PinForm: true,
    });

    return;
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
        <button onClick={handleSubmit}>Parent</button>
        <button onClick={handleSubmit}>Child 1</button>
        <button onClick={handleSubmit}>Child 2</button>
      </div>
    </div>
  );
}

export default UserForm;
