import React from 'react';
import { useRecoilState } from 'recoil';

import { modalWindow } from '../../../state/modalWindowOpen';
import GameControls from '../../common/GameControls';

const RenderGameVote = ({ players, type, controls, submitVote }) => {
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);

  const getUrl = player => {
    if (type === 'Writing') {
      return player.writingSubmission.url;
    } else {
      return player.drawingSubmission.url;
    }
  };
  const showModalViewer = player => {
    setModalWindow({
      isOpen: true,
      url: getUrl(player),
    });
  };

  return (
    <div className="game-container">
      {players.map((player, idx) => (
        <div className="game-vote-item">
          <div className="game-vote-inner">
            <img
              className="submission-image"
              src={getUrl(player)}
              onClick={() => showModalViewer(player)}
            />
            <div className="input-wrapper">
              <input
                type="radio"
                id="submission-1"
                name="fav-submission"
                value={idx + 1}
                checked
              />
              <label htmlFor="submission-1"> Submission {idx + 1}:</label>
            </div>
          </div>
        </div>
      ))}
      <GameControls
        show={!curModalWindow.isOpen}
        controls={controls}
        nextButtonClick={submitVote}
      />
    </div>
  );
};

export default RenderGameVote;
