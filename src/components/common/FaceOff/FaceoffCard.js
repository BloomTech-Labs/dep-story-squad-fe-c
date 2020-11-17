import React from 'react';
import AvatarCircle from './AvatarCircle';
import VSImage from '../../../images/vs.svg';
import lockImage from '../../../images/lock.svg';
const FaceOffCard = ({
  player1,
  player2,
  cardIndex,
  type = 'writing',
  ...rest
}) => {
  return (
    <button className={`matchup-btn-container match-${cardIndex}`}>
      <div className="avatar-container">
        <AvatarCircle player={player1} />
        <div className="submission-container">
          <img
            className="submission-image"
            src={player1.missions['1'].writingSubmission}
          />
        </div>
      </div>

      <div className="vs-points-container">
        <img src={VSImage} alt="accept the mission artwork" />
        <h1>160 PT</h1>
      </div>
      <div className="avatar-container">
        <AvatarCircle player={player2} />
        <div className="submission-container">
          <img
            className="submission-image"
            src={player2.missions['1'].writingSubmission}
          />
          <div className="lock-container">
            <img className="lock-image" src={lockImage} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default FaceOffCard;
