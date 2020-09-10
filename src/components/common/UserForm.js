import React, { useState } from 'react';

//styles
import './UserForm.css';

function UserForm(props) {
  const [userValue, setUserValue] = useState();

  const onSubmit = () => {
    return;
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const handleChange = value => {
    console.log(value);
    return setUserValue(value);
  };

  const handleSubmit = () => {
    console.log('submitted!!!');
    // need an axios call here to the back-end
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
        <button>Parent</button>
        <button>Child 1</button>
        <button>Child 2</button>
      </div>
    </div>
  );
}

export default UserForm;
