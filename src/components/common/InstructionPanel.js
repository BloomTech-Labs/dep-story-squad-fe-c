import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { gameState } from '../../state/gameState';
import { modalState } from '../../state/modalState/atoms';
import { gameData } from '../../utils/data';

const InstructionPanel = ({}) => {
  const [curGameState] = useRecoilState(gameState);
  const [isModalOpen, setModalState] = useRecoilState(modalState);
  const [instruction, setInstruction] = useState({});
  const { push } = useHistory();

  useEffect(() => {
    const inst = gameData[curGameState]?.instruction;
    if (inst && (!inst.hasShown || inst.showEveryTime)) {
      inst.hasShown = true;
      setInstruction(inst);
      setModalState(true);
    } else {
      setModalState(false);
    }
  }, [curGameState]);

  const handleClick = () => {
    const route = instruction.navigateToOnClick;
    if (route) {
      push(route);
    }
    setModalState(false);
  };
  return (
    <div
      className={`instruction-container ${instruction &&
        isModalOpen &&
        'show'}`}
    >
      <h1>{instruction.title}</h1>
      <p>{instruction.content}</p>
      <button className="game-button" onClick={handleClick}>
        {instruction.buttonLabel}
      </button>
    </div>
  );
};

export default InstructionPanel;
