import React from 'react';
import { useRecoilState } from 'recoil';

import { currentGameState } from '../../../state/gameState';
import { getScreenStateByGameState } from '../../../utils/data';

const RenderChildDash = ({ push, messagePopup }) => {
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);

  // TODO: Reset mission on every Sat.
  const resetMission = ({}) => {
    setCurGameState('MISSION_NOT_STARTED');
  };
  // add mission button based on game state
  const getMissionButton = ({ name, message }) => {
    let nextRoute = '';

    // if mission has not been started
    if (name === 'MISSION_NOT_STARTED') {
      nextRoute = '/mission';
    } else {
      nextRoute = getScreenStateByGameState(name);
    }

    if (name.startsWith('pending')) {
      // disable click listener if it's a pending state
      return (
        <button className="dash-btn-container mission pending">
          <img src="/images/mission-btn.png" alt="accept the mission artwork" />
          <div className="btn-overlay" />
          <p className="btn-overlay-text">{message}</p>
        </button>
      );
    } else {
      // take user to next route based game state retrieved from server
      return (
        <button
          className="dash-btn-container mission"
          onClick={() => push(nextRoute)}
        >
          <img src="/images/mission-btn.png" alt="accept the mission artwork" />
        </button>
      );
    }
  };

  return (
    <div className="dashboard-container">
      {getMissionButton(curGameState)}
      <button
        className="dash-btn-container avatar"
        /* Feature not implemented yet. if a user clicks the button an alert is displayed with the feedback */
        onClick={() =>
          messagePopup('warning', 'This feature is not available yet!')
        }
      >
        <img src="/images/avatar-btn.png" alt="change avatar artwork" />
      </button>

      <button
        className="dash-btn-container passport"
        /* Feature not implemented yet. if a user clicks the button an alert is displayed with the feedback */
        onClick={() =>
          messagePopup('warning', 'This feature is not available yet!')
        }
      >
        <img src="/images/passport-btn.png" alt="adventure passport artwork" />
      </button>

      <button
        className="dash-btn-container trophy"
        /* Feature not implemented yet. if a user clicks the button an alert is displayed with the feedback */
        onClick={() =>
          messagePopup('warning', 'This feature is not available yet!')
        }
      >
        <img src="/images/trophy-btn.png" alt="trophy room artwork" />
      </button>
    </div>
  );
};

export default RenderChildDash;
