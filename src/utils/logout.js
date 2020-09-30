export const logout = async (event, auth) => {
  event.preventDefault();
  await auth.logout();
  window.localStorage.clear();
};
