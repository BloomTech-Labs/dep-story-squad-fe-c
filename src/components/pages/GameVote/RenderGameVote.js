import React from 'react';
import GameControls from '../../common/GameControls';
import { useRecoilState } from 'recoil';
import { modalWindow } from '../../../state/modalWindowOpen';
import { currentGameState } from '../../../state/gameState';

const RenderGameVote = ({ players, controls }) => {
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const player1 = players[0];
  const player2 = players[1];
  const submissionId1 = 1;
  const submissionId2 = 2;
  const updateVoteCount = () => {
    setCurGameState({
      ...curGameState,
      userVoteCount: curGameState.userVoteCount++,
    });
  };
  const handleClick = () => {
    setModalWindow({
      isOpen: true,
      url: player1.missions['1'].writingSubmission,
    });
  };
  return (
    <div className="game-container">
      <div className="game-vote-item">
        <div className="game-vote-inner">
          <div className="input-wrapper">
            <input
              type="radio"
              id="submission-1"
              name="fav-submission"
              value={submissionId1}
              checked
            />
            <label htmlFor="submission-1"> Submission 1:</label>
          </div>
          <div className="submission-container game-vote" onClick={handleClick}>
            <img
              className="submission-image"
              src={player1.missions['1'].writingSubmission}
            />
          </div>
        </div>
      </div>
      <div className="game-vote-item">
        <div className="game-vote-inner">
          <div className="input-wrapper">
            <input
              type="radio"
              id="submission-2"
              name="fav-submission"
              value={submissionId2}
            />
            <label htmlFor="submission-2"> Submission 2:</label>
          </div>
          <div className="submission-container game-vote" onClick={handleClick}>
            <img
              className="submission-image"
              src={player2.missions['1'].writingSubmission}
            />
          </div>
        </div>
      </div>

      <GameControls controls={controls} onClick={updateVoteCount} />
    </div>
  );
};

export default RenderGameVote;
