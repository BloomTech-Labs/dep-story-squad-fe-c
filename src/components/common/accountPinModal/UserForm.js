import React from 'react';
import LoadingComponent from '../LoadingComponent';
import { useLocalStorage } from '../../../utils/hooks';

function UserForm({ setFormVisibility, isLoading, accounts }) {
  const [userType, setUserType] = useLocalStorage('user', null);
  const handleSubmit = e => {
    // send data to Modal state to store until ready to submit to BE
    setUserType(e.target.value);
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

        {!isLoading &&
          accounts.map(account => {
            return (
              <button
                key={Math.random() * Date.now()}
                value={account.type}
                onClick={e => handleSubmit(e)}
              >
                {account.name}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default UserForm;
