import React from 'react';

import GameControls from '../../common/GameControls';
import HeroCard from '../../common/HeroCard/HeroCard';

const RenderGameSquadup = ({ players, controls }) => {
  return (
    <div className="game-container ">
      {players.map((player, idx) => (
        <HeroCard
          key={idx}
          player={player}
          backgroundColor={player.backgroundColor}
        />
      ))}
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameSquadup;
