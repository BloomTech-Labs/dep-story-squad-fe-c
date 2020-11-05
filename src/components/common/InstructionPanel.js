import React from 'react';

const InstructionPanel = ({
  title,
  instruction,
  buttonLabel,
  onClick,
  children,
  show = false,
}) => {
  return (
    <div className={`instruction-container ${show && 'show'}`}>
      <h1>{title}</h1>
      <p>{instruction}</p>
      {children}
      <button className="game-button" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default InstructionPanel;
