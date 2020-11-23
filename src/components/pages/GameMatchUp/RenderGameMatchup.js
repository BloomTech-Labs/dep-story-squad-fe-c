import React from 'react';
import FaceOffCard from '../../common/FaceOff/FaceoffCard';
import { useHistory } from 'react-router-dom';

const RenderGameMatchup = ({
  players,
  voteCount,
  waitingForResult = false,
}) => {
  const player1 = players[0];
  const player2 = players[1];
  const player3 = players[2];
  const player4 = players[3];
  const { push } = useHistory();
  return (
    <div className="matchup-container">
      {!waitingForResult ? (
        <>
          <FaceOffCard
            player1={player1}
            player2={player3}
            type="writing"
            cardIndex={1}
            unlocked={voteCount >= 3}
          />
          <FaceOffCard
            player1={player1}
            player2={player3}
            type="drawing"
            cardIndex={2}
            unlocked={voteCount >= 3}
          />
          <FaceOffCard
            player1={player2}
            player2={player4}
            type="writing"
            cardIndex={3}
            unlocked={voteCount >= 2}
          />
          <FaceOffCard
            player1={player2}
            player2={player4}
            type="drawing"
            cardIndex={4}
            unlocked={voteCount >= 1}
          />
        </>
      ) : (
        <div className="waiting-container">
          <h1>Waiting for the rest of the votes</h1>
        </div>
      )}
      <section className="game-control">
        <button className="game-button dark" onClick={() => push('/dashboard')}>
          Exit
        </button>
        {voteCount >= 3 ? (
          <button
            className="game-button "
            onClick={() => push('/game/waiting-for-result')}
          >
            Next
          </button>
        ) : (
          <button className="game-button " onClick={() => push('/game/vote')}>
            Vote!
          </button>
        )}
      </section>
    </div>
  );
};

export default RenderGameMatchup;
