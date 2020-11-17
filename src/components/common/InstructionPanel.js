import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';

import { panelState } from '../../state/panelState';
import { screenState } from '../../state/screenState';
import { currentGameState } from '../../state/gameState';
import { screenData } from '../../utils/data';

const InstructionPanel = ({}) => {
  const curGameState = useRecoilValue(currentGameState);
  const curScreenState = useRecoilValue(screenState);
  const [curPanelState, setPanelState] = useRecoilState(panelState);
  const [instruction, setInstruction] = useState({});
  const { push } = useHistory();

  useEffect(() => {
    if (!screenData[curScreenState]) return;
    const inst = screenData[curScreenState].instruction;
    if (inst && (!inst.hasShown || inst.showEveryTime)) {
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
  }, [curScreenState]);

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
