// Render pin, JSX goes here, logic in PinFormContainer

import React from 'react';
import PropTypes from 'prop-types';

const RenderPinForm = ({
  changeHandler,
  formData,
  ref_start,
  ref_1,
  ref_2,
  ref_3,
}) => {
  return (
    <form className="pinFormCont">
      <label htmlFor="pinInput">Enter PIN:</label>

      <div className="inputCont">
        <input
          // assigns useRef's from PinFormContainer
          ref={ref_start}
          autoFocus
          data-testid="inputOne"
          type="password"
          name="0"
          id="pinInput"
          value={formData[0]}
          onChange={e => changeHandler(e)}
          maxLength="1"
        />

        <input
          ref={ref_1}
          data-testid="inputTwo"
          type="password"
          name="1"
          value={formData[1]}
          onChange={e => changeHandler(e)}
          maxLength="1"
        />

        <input
          ref={ref_2}
          data-testid="inputThree"
          type="password"
          name="2"
          value={formData[2]}
          onChange={e => changeHandler(e)}
          maxLength="1"
        />

        <input
          ref={ref_3}
          data-testid="inputFour"
          type="password"
          name="3"
          value={formData[3]}
          onChange={e => changeHandler(e)}
          maxLength="1"
        />
      </div>
    </form>
  );
};

RenderPinForm.propTypes = {
  formData: PropTypes.array,
  changeHandler: PropTypes.func,
  ref_1: PropTypes.node,
  ref_2: PropTypes.node,
  ref_3: PropTypes.node,
};

export default RenderPinForm;
