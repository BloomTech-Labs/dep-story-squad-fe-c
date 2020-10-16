function checkTokenExpired() {
  let expires = null;
  if (window.localStorage.getItem('okta-token-storage')) {
    expires = JSON.parse(window.localStorage.getItem('okta-token-storage'))
      .idToken.expiresAt;
  } else {
    expires = Date.now() * 2;
  }

  const now = Math.floor(Date.now() / 1000);

  return expires <= now;
}

export { checkTokenExpired };
