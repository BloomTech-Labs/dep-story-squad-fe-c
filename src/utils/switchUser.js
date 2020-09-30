export const switchUser = (items, push) => {
  // remove each item in list that is held in localStorage
  items.forEach(item => {
    window.localStorage.removeItem(`${item}`);
  });

  // callback that pushes back to the user select screen
  push('/');
};
