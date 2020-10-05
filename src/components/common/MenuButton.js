import React, { useRef } from 'react';

const MenuButton = () => {
  // Refs to menu bars
  const refBarOne = useRef();
  const refBarTwo = useRef();
  const refBarThree = useRef();

  // "Opens/Closes" nav menu in <Header /> when clicked
  const onClick = () => {
    // Get the current Refs to the menu bars
    const barOne = refBarOne.current;
    const barTwo = refBarTwo.current;
    const barThree = refBarThree.current;

    // Toggle the class names to trigger CSS animations
    barOne.classList.toggle('open');
    barTwo.classList.toggle('open');
    barThree.classList.toggle('open');
  };

  return (
    <div className="menu-btn" onClick={onClick}>
      <div id="bar-one" ref={refBarOne} className="menu-bar"></div>
      <div id="bar-two" ref={refBarTwo} className="menu-bar"></div>
      <div id="bar-three" ref={refBarThree} className="menu-bar"></div>
    </div>
  );
};

export default MenuButton;
