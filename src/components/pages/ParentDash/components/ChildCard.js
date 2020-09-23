import React from 'react';

const ChildCard = ({ child }) => {
  return (
    <div className="Card">
      <h2>{child.name}</h2>
    </div>
  );
};

export default ChildCard;
