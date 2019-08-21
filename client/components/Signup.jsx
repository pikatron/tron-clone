import React from 'react';

function Signup() {
  return (
    <form action="/auth/signup" method="post">
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
        <button type="submit">Sign Up</button>
        <button
          type="button"
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Back to Login
        </button>
      </div>
    </form>
  );
}

export default Signup;
