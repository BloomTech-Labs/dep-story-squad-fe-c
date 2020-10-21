import React from 'react';

const MenuButton = ({ refNavMenu, refMenuBtn }) => {
  // "Opens/Closes" nav menu in <Header /> when clicked
  const onClick = () => {
    // Get the current Refs to the Nav Menu
    const menuBtn = refMenuBtn.current;
    const navMenu = refNavMenu.current;

    // Toggle the class names to trigger CSS animations
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
  };

  return (
    <button ref={refMenuBtn} className="menu-btn" onClick={onClick}>
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
    </button>
  );
};

export default MenuButton;
