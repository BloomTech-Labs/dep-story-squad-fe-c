// Logic goes in this file

import React from 'react';
import PropTypes from 'prop-types';

// recoil
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../../../../state/userState';

// components
import RenderUserForm from './RenderUserForm';

const UserFormContainer = ({ setFormVisibility, accounts }) => {
  const setUserState = useSetRecoilState(currentUserState);

  const handleSubmit = e => {
    // set Recoil state
    setUserState({
      curUserId: e.target.getAttribute('data-id'),
      curUserType: e.target.getAttribute('data-type'),
    });

    // toggle from userForm to PinForm
    setFormVisibility({
      userFormContainer: false,
      pinForm: true,
    });
  };
  return <RenderUserForm accounts={accounts} handleSubmit={handleSubmit} />;
};

UserFormContainer.propTypes = {
  accounts: PropTypes.array,
  setFormVisibility: PropTypes.func,
};

export default UserFormContainer;
