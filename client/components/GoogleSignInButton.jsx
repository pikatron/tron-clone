import React from 'react';

function GoogleSignInButton() {
  return (
    <div>
      <div className="g-signin2" data-onsuccess="onSignIn" />
    </div>
  );
}

export default GoogleSignInButton;
