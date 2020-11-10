import React from 'react';
import GameControls from '../../common/GameControls';
import HeroCard from '../../common/HeroCard/HeroCard';

const RenderGameSquadup = ({ players, controls }) => {
  return (
    <div className="game-container ">
      {/*{JSON.stringify(players, null, 2)}*/}
      <HeroCard player={players[0]} color="green">
        <div></div>
      </HeroCard>
      <HeroCard player={players[1]} color="yellow">
        <div></div>
      </HeroCard>
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameSquadup;
