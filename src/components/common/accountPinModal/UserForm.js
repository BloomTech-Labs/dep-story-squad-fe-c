import React from 'react';

function UserForm({
  setFormSubmissionData,
  formSubmissionData,
  setFormVisibility,
  userAccounts,
}) {
  const handleSubmit = e => {
    // send data to Modal state to store until ready to submit to BE
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
    setFormVisibility({
      userForm: false,
      pinForm: true,
    });
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
        {userAccounts.map(account => {
          return (
            <button
              key={Math.random() * Date.now()}
              value={account}
              onClick={e => handleSubmit(e)}
              data-testid={account}
            >
              {account}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default UserForm;
