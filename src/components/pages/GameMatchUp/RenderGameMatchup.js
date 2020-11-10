import React from 'react';
import GameControls from '../../common/GameControls';
import HeroCard from '../../common/HeroCard/HeroCard';
import SharePoints from '../../common/SharePoints';

const RenderGameMatchup = ({ players, controls }) => {
  const player1 = players[0];
  const player2 = players[1];
  return (
    <div className="game-container ">
      <HeroCard player={players[0]} color="green">
        <div></div>
      </HeroCard>
      <HeroCard player={players[1]} color="yellow">
        <div></div>
      </HeroCard>
      <HeroCard player={players[1]} color="blue">
        <div></div>
      </HeroCard>
      <HeroCard player={players[1]} color="red">
        <div></div>
      </HeroCard>
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameMatchup;
