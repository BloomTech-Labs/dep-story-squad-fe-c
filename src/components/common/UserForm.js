import React, { useState } from 'react';
import { useLocalStorage } from '../../utils/hooks';

//styles
import './UserForm.css';

function UserForm(props) {
  const [userValue, setUserValue] = useState();

  const onSubmit = () => {
    return;
  };

  const handleChange = value => {
    console.log(value);
    setUserValue(value);
  };

  const handleSubmit = value => {
    console.log('submitted!!!', value);
    // need an axios call here to the back-end
    setUserValue(value);
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
