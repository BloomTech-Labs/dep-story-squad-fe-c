export const switchUser = (event, items, push) => {
  event.preventDefault();
  // remove each item in list that is held in localStorage
  items.forEach(item => {
    if (window.localStorage.getItem(`${item}`)) {
      window.localStorage.removeItem(`${item}`);
    }
  });

  // callback that pushes back to the user select screen
  if (window.localStorage.getItem('okta-token-storage')) {
    push('/');
  }
};
