import React from 'react';

const ChildSignup = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="User Name" />
      <input type="dropdown" name="grade" placeholder="Select Grade" />
      <input type="text" name="PIN" placeholder="Create a PIN" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ChildSignup;
