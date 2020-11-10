import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RenderGameSquadup = ({ players, controls }) => {
  const { push, goBack } = useHistory();
  return (
    <>
      <p className="text-box">Render Game Squadup</p>
      {JSON.stringify(players, null, 2)}
      <section>
        <button onClick={() => goBack()}>{controls.previousButtonLabel}</button>
        <button onClick={() => push(controls.navigateToOnNextButtonClick)}>
          {controls.nextButtonLabel}
        </button>
      </section>
    </>
  );
};

export default RenderGameSquadup;
