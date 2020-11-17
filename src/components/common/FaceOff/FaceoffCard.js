import React from 'react';
import AvatarCircle from './AvatarCircle';
import VSImage from '../../../images/vs.png';
import lockImage from '../../../images/lock.svg';
import { useRecoilState } from 'recoil';
import { modalWindow } from '../../../state/modalWindowOpen';

const FaceOffCard = ({
  player1,
  player2,
  cardIndex,
  winner = null,
  locked = true,
  type = 'writing',
  ...rest
}) => {
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);
  const showModalViewer = () => {
    setModalWindow({
      isOpen: true,
      url: player1.missions['1'].writingSubmission,
    });
  };

  return (
    <button className={`matchup-btn-container match-${cardIndex}`}>
      <div className="avatar-container">
        <AvatarCircle player={player1} />
        <div className="submission-container" onClick={showModalViewer}>
          <img
            className="submission-image"
            src={player1.missions['1'].writingSubmission}
          />
        </div>
        {winner === 1 && <h1>160 PT</h1>}
      </div>

      <div className="vs-points-container">
        <img src={VSImage} alt="accept the mission artwork" />
        {!winner && <h1>160 PT</h1>}
      </div>
      <div className="avatar-container">
        <AvatarCircle player={player2} />
        <div className="submission-container" onClick={showModalViewer}>
          <img
            className="submission-image"
            src={player2.missions['1'].writingSubmission}
          />
          {locked && (
            <div className="lock-container">
              <img className="lock-image" src={lockImage} />
            </div>
          )}
          {winner === player2.id && <h1>160 PT</h1>}
        </div>
      </div>
    </button>
  );
};

export default FaceOffCard;
