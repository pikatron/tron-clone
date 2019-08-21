import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const status = {
  LOADING: 'LOADING',
  VERIFIED: 'VERIFIED',
  DENIED: 'DENIED',
};

function ProtectedRoute({ component: Component, ...rest }) {
  const [verified, setVerified] = useState(status.LOADING);
  useEffect(() => {
    if (verified === status.LOADING) {
      fetch('/auth/verify')
        .then(res => res.json())
        .then(res => {
          if (res) return setVerified(status.VERIFIED);
          return setVerified(status.DENIED);
        });
    }
  });

  let protectedComponent;

  switch (verified) {
    case status.VERIFIED:
      protectedComponent = Component;
      break;
    case status.DENIED:
      protectedComponent = () => <Redirect to="/" />;
      break;
    case status.LOADING:
    default:
      protectedComponent = () => <div>Loading</div>;
  }
  return <Route {...rest} component={protectedComponent} />;
}

export default ProtectedRoute;
