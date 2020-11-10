import React from 'react';
import GameControls from '../../common/GameControls';
import HeroCard from '../../common/HeroCard/HeroCard';
import SharePoints from '../../common/SharePoints';

const RenderGameSharePoints = ({ players, controls }) => {
  const player1 = players[0];
  const player2 = players[1];
  return (
    <div className="game-container grid-4">
      <HeroCard player={player1} color="green">
        <div></div>
      </HeroCard>
      <SharePoints player={player1} />
      <HeroCard player={players[0]} color="green">
        <div></div>
      </HeroCard>
      <SharePoints player={player2} />
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameSharePoints;
