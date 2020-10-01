import React from 'react';
// import LoadingComponent from '../LoadingComponent';
// import { useLocalStorage } from '../../../utils/hooks';
// import PropTypes from 'prop-types';

function UserForm({ setFormVisibility, isLoading, accounts }) {
  // const [, setCurUserType] = useLocalStorage('curUserType', null);
  // const [, setCurUserName] = useLocalStorage('curUserName', null);
  // const [, setCurUserId] = useLocalStorage('curUserId', null);
  // const handleSubmit = e => {
  //   setCurUserName(e.target.getAttribute('data-name'));
  //   setCurUserId(e.target.getAttribute('data-id'));
  //   setCurUserType(e.target.getAttribute('data-type'));
  //   setFormVisibility({
  //     userForm: false,
  //     pinForm: true,
  //   });
  // };
  // return (
  // <div className="userForm">
  //   <div className="userText">
  //     <h3>
  //       So we can direct you to the right place, please let us know who you
  //       are.
  //     </h3>
  //   </div>
  //   <div className="userButton">
  //     {isLoading && <LoadingComponent />}
  //     {accounts &&
  //       accounts.map(account => {
  //         return (
  //           <button
  //             data-type={account.type}
  //             data-id={account.id}
  //             data-name={account.name}
  //             key={Math.random() * Date.now()}
  //             onClick={e => handleSubmit(e)}
  //           >
  //             {account.name}
  //           </button>
  //         );
  //       })}
  //   </div>
  // </div>
  // );
}

// UserForm.propTypes = {
//   setFormVisibility: PropTypes.func,
//   isLoading: PropTypes.bool,
//   accounts: PropTypes.array,
// };

export default UserForm;
