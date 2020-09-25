import React from 'react';

const ChildCard = ({ child }) => {
  return (
    <div className="Card Child">
      <a href="/dashboard" className="cancel" onClick={() => {}}>
        Delete
      </a>
      <h2>{child.name}</h2>
      <input
        className="submitBtn"
        value={`${child.name}'s Settings`}
        readOnly={true}
      />
    </div>
  );
};

export default ChildCard;
