export const logout = auth => {
  auth.logout();
  window.localStorage.clear();
};
