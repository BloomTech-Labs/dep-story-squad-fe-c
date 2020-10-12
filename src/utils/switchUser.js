export const switchUser = (event, push) => {
  event.preventDefault();
  // callback that pushes back to the user select screen
  if (window.localStorage.getItem('okta-token-storage')) {
    push('/');
  }
};
