import React from 'react';
import { useHistory } from 'react-router-dom';

const MissionButton = ({ message, onClickRoute }) => {
  const { push } = useHistory();
  // Take user to the last saved game state if necessary
  // display message if necessary
  // - pending state will not have onClickRoute passed in
  // - start mission state will not have message displayed
  // - other state will have onClickRoute and message passed in
  return onClickRoute ? (
    <button
      className="dash-btn-container mission"
      onClick={() => onClickRoute && push(onClickRoute)}
    >
      <img src="/images/mission-btn.png" alt="accept the mission artwork" />
      {message && (
        <>
          <div className="btn-overlay" />
          <p className="btn-overlay-text">{message}</p>
        </>
      )}
    </button>
  ) : (
    <button className="dash-btn-container mission pending">
      <img src="/images/mission-btn.png" alt="accept the mission artwork" />
      <div className="btn-overlay" />
      <p className="btn-overlay-text">{message}</p>
    </button>
  );
};

export default MissionButton;
