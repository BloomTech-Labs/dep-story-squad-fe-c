export const switchUser = (event, push) => {
  event.preventDefault();
  window.localStorage.removeItem('currentUser');
  // callback that pushes back to the user select screen
  if (window.localStorage.getItem('okta-token-storage')) {
    push('/');
  }
};
