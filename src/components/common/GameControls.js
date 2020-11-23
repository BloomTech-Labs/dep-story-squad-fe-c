import React from 'react';
import { useHistory } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { modalWindow } from '../../state/modalWindow';
import { currentGameState } from '../../state/gameState';

const GameControls = ({ controls, nextButtonClick = null }) => {
  const { push } = useHistory();
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const { next, prev } = controls;

  const handleNextButtonClick = () => {
    if (nextButtonClick) {
      nextButtonClick();
    } else {
      if (next.route) {
        push(next.route);
      }

      if (next.state) {
        setCurGameState({
          ...curGameState,
          name: next.state,
        });
      }
    }
  };
  return (
    <section
      className={`game-control ${!curModalWindow.isOpen ? 'show' : 'hide'}`}
    >
      <button className="game-button dark" onClick={() => push('/dashboard')}>
        {prev.label}
      </button>
      <button
        className="game-button "
        data-testid="next-button"
        onClick={handleNextButtonClick}
      >
        {next.label}
      </button>
    </section>
  );
};

export default GameControls;
