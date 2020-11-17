import React from 'react';
import FaceOffCard from '../../common/FaceOff/FaceoffCard';
import GameControls from '../../common/GameControls';

const RenderGameMatchup = ({ players, controls }) => {
  const player1 = players[0];
  const player2 = players[1];
  const player3 = players[2];
  const player4 = players[3];
  const writingSubmission = player1.missions['1'].writingSubmission;
  console.log('writingSubmission', writingSubmission);
  return (
    <div className="matchup-container">
      <FaceOffCard
        player1={player1}
        player2={player3}
        type="writing"
        cardIndex={1}
      />
      <FaceOffCard
        player1={player1}
        player2={player3}
        type="drawing"
        cardIndex={2}
      />
      <FaceOffCard
        player1={player2}
        player2={player4}
        type="writing"
        cardIndex={3}
      />
      <FaceOffCard
        player1={player2}
        player2={player4}
        type="drawing"
        cardIndex={4}
      />
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameMatchup;
