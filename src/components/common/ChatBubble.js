import React from 'react';

const ChatBubble = ({ player, color }) => {
  return (
    <div className={`hero-card ${color}`}>
      <div className="">Hi! My name is {player.name}</div>
      <img className="hero-avatar" src={player.avatar} />
    </div>
  );
};

export default ChatBubble;
