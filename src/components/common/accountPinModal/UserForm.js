import React from 'react';
import LoadingComponent from '../LoadingComponent';
import { useLocalStorage } from '../../../utils/hooks';

function UserForm({ setFormVisibility, isLoading, accounts, setCurUser }) {
  const [, setUserType] = useLocalStorage('userType', null);

  const handleSubmit = e => {
    setUserType(e.target.getAttribute('data-type'));
    // send data to Modal
    setCurUser({
      id: e.target.getAttribute('data-id'),
      type: e.target.getAttribute('data-type'),
    });

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
                data-type={account.type}
                data-id={account.id}
                key={Math.random() * Date.now()}
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
