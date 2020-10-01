import React from 'react';
import RenderUserForm from './RenderUserForm';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../../../utils/hooks';

// styles
import '../../../styles/UserForm.less';

const UserFormContainer = ({ setFormVisibility, isLoading, accounts }) => {
  const [, setCurUserType] = useLocalStorage('curUserType', null);
  const [, setCurUserName] = useLocalStorage('curUserName', null);
  const [, setCurUserId] = useLocalStorage('curUserId', null);

  const handleSubmit = e => {
    setCurUserName(e.target.getAttribute('data-name'));
    setCurUserId(e.target.getAttribute('data-id'));
    setCurUserType(e.target.getAttribute('data-type'));

    setFormVisibility({
      userFormContainer: false,
      pinForm: true,
    });
  };
  return (
    <RenderUserForm
      accounts={accounts}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
};

UserFormContainer.propTypes = {
  isLoading: PropTypes.bool,
  accounts: PropTypes.array,
  setFormVisibility: PropTypes.func,
};

export default UserFormContainer;
