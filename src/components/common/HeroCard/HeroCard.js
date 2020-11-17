import React from 'react';
const HeroCard = ({ player, color }) => {
  return (
    <div className={`hero-card ${color}`}>
      <div className="chat-wrapper">
        <p>
          Hi, <br /> My name is {player.name}
        </p>
      </div>
      <div className="hero-avatar-wrapper ">
        <img className="hero-avatar" src={player.avatar} />
      </div>
    </div>
  );
};

export default HeroCard;
