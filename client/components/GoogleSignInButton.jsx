import React from 'react';

function GoogleSignInButton() {
    return (
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    )
}

export default GoogleSignInButton;