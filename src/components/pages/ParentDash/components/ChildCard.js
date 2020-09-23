import React from 'react';

const ChildCard = ({ child }) => {
  return (
    <div className="Card Child">
      <h2>{child.name}</h2>
      <input className="submitBtn" value={`${child.name}'s Settings`} />
    </div>
  );
};

export default ChildCard;
