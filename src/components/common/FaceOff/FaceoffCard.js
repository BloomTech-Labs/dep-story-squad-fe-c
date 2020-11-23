import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { modalWindow } from '../../../state/modalWindow';
import AvatarCircle from './AvatarCircle';
import VSImage from '../../../images/vs.png';
import lockImage from '../../../images/lock.svg';

const FaceOffCard = ({
  player1,
  player2,
  cardIndex,
  winner = null,
  unlocked = false,
  type = 'writing',
  ...rest
}) => {
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);
  const [wager, setWager] = useState(0);

  useEffect(() => {
    const getWager = () => {
      if (type === 'Writing') {
        return (
          player1.writingSubmission.pointShare +
          player2.writingSubmission.pointShare
        );
      } else {
        return (
          player1.drawingSubmission.pointShare +
          player2.drawingSubmission.pointShare
        );
      }
    };

    setWager(getWager());
  }, []);

  const showModalViewer = () => {
    setModalWindow({
      isOpen: true,
      url: player1.writingSubmission.url,
    });
  };

  const getUrl = player => {
    if (type === 'Writing') {
      return player.writingSubmission.url;
    } else {
      return player.drawingSubmission.url;
    }
  };

  return (
    <button className={`matchup-btn-container match-${cardIndex}`}>
      <div className="avatar-container">
        <AvatarCircle player={player1} />
        <div className="submission-container" onClick={showModalViewer}>
          <img className="submission-image" src={getUrl(player1)} />
        </div>
        {winner === 1 && <h1>{wager} PT</h1>}
      </div>

      <div className="vs-points-container">
        <img src={VSImage} alt="accept the mission artwork" />
        {!winner && <h1>{wager} PT</h1>}
      </div>
      <div className="avatar-container">
        <AvatarCircle player={player2} />
        <div className="submission-container" onClick={showModalViewer}>
          <img className="submission-image" src={getUrl(player2)} />
          {!unlocked && (
            <div className="lock-container">
              <img className="lock-image" src={lockImage} />
            </div>
          )}
          {winner === player2.id && <h1>{wager} PT</h1>}
        </div>
      </div>
    </button>
  );
};

export default FaceOffCard;
