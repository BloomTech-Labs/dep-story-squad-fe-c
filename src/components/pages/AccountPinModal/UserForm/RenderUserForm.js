import React from 'react';
import PropTypes from 'prop-types';

// components
import { LoadingComponent } from '../../../common';

const RenderUserForm = ({ handleSubmit, accounts }) => {
  return (
    <div className="userForm">
      <div className="userText">
        <h3>
          So we can direct you to the right place, please let us know who you
          are.
        </h3>
      </div>

      <div className="userButton">
        {!accounts ? (
          <LoadingComponent />
        ) : (
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
          })
        )}
      </div>
    </div>
  );
};

RenderUserForm.propTypes = {
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  accounts: PropTypes.array,
};

export default RenderUserForm;
