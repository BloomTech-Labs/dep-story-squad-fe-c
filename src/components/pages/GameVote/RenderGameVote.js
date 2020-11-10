import React from 'react';
import GameControls from '../../common/GameControls';
import SharePoints from '../../common/SharePoints';

const RenderGameVote = ({ players, controls }) => {
  const player1 = players[0];
  const player2 = players[1];
  return (
    <div className="game-container grid-4">
      {/*{JSON.stringify(players, null, 2)}*/}
      <SharePoints player={player1} />
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameVote;
