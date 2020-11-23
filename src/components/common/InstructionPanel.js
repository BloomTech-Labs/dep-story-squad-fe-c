import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';

import { instructionPanelState } from '../../state/instructionPanel';
import { currentGameState } from '../../state/gameState';
import { routeState } from '../../state/routeState';
import { screenData, getIsCurrentState } from '../../utils/data';
import { modalWindow } from '../../state/modalWindow';

const InstructionPanel = ({ gameState = null }) => {
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const [curPanelState, setPanelState] = useRecoilState(instructionPanelState);
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);
  const curRoute = useRecoilValue(routeState);
  const [instruction, setInstruction] = useState({});
  const { push } = useHistory();

  useEffect(() => {
    const curScreenState = curGameState.name;

    if (!screenData[curScreenState]) return;

    const inst = screenData[curScreenState]?.instruction;
    const isInScope = getIsCurrentState(curScreenState, curRoute);

    // Don't show if
    if (!isInScope) {
      return setPanelState(false);
    }
    // Don't show if modal panel is open
    if (curModalWindow.isOpen) {
      return setPanelState(false);
    }

    if (inst && (!inst.hasShown || inst.showEveryTime)) {
      // if it's to show every time
      // If game state is not in correct order,
      inst.hasShown = true;
      setInstruction(inst);
      // set modal to open every time if
      // 1. instruction is not empty
      // 2. it has not been shown
      // 3. Or it needs to show every time
      setPanelState(true);
    } else {
      setPanelState(false);
    }
  }, [curGameState]);

  const handleClick = () => {
    // which route it will take you to on button click
    const route = instruction.navigateToOnClick;
    if (route) {
      push(route);
    }
    setPanelState(false);
  };

  return (
    <div className={`container-full ${instruction && curPanelState && 'show'}`}>
      <div
        className={`screen-blocker ${instruction &&
          instruction.isModal &&
          'show click-trapper'}`}
      />
      <div className="instruction-panel">
        <h1>{instruction.title}</h1>
        <p>{instruction.content}</p>
        <button className="game-button" onClick={handleClick}>
          {instruction.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default InstructionPanel;
