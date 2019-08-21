import React from 'react';

function DefaultSignIn() {
  return (
    <div>
      <form action="/auth/signin" method="post">
        <label htmlFor="username">
          Username:
          <input type="username" id="username" name="username" />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" />
        </label>
        <div>
          <button type="submit">
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.href = '/signup';
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default DefaultSignIn;
