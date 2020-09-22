import React, { useState, useEffect } from 'react';
import { getAccounts } from '../../../api';
import LoadingComponent from '../LoadingComponent';

function UserForm({
  setFormSubmissionData,
  formSubmissionData,
  setFormVisibility,
  isLoading,
  setIsLoading,
  loggedInUser,
}) {
  const [parentAccount, setParentAccount] = useState();
  const [childAccounts, setChildAccounts] = useState([]);

  useEffect(() => {
    getAccounts(loggedInUser.idToken.value).then(res => {
      setParentAccount(res.data.parent.name);
      // convert res.data.children obj => array
      for (const [, value] of Object.entries(res.data.children)) {
        setChildAccounts([...childAccounts, value]);
      }
      setIsLoading(false);
    });
  }, [loggedInUser]);

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
        {isLoading && <LoadingComponent />}

        {!isLoading && (
          <button value={parentAccount} onClick={e => handleSubmit(e)}>
            {parentAccount}
          </button>
        )}

        {childAccounts.map(child => {
          return (
            <button
              key={Math.random() * Date.now()}
              value={child.name}
              onClick={e => handleSubmit(e)}
            >
              {child.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default UserForm;
