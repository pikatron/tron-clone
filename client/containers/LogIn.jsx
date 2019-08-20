import React from 'react';

import GoogleSignInButton from '../components/GoogleSignInButton';
import DefaultSignIn from '../components/DefaultSignIn';

function LogIn() {
  return (
    <div>
      <GoogleSignInButton />
      <br />
      <DefaultSignIn />
    </div>
  );
}

export default LogIn;
