import React from 'react';
import PropTypes from 'prop-types';

// recoil
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../../state/atoms';

// components
import RenderUserForm from './RenderUserForm';

const UserFormContainer = ({ setFormVisibility, accounts }) => {
  const setUserState = useSetRecoilState(userState);

  const handleSubmit = e => {
    // set Recoil state
    setUserState({
      curUserId: e.target.getAttribute('data-id'),
      curUserType: e.target.getAttribute('data-type'),
    });

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
