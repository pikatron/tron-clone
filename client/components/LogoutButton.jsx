import React from 'react';

function LogoutButton() {
  return (
    <form action="/auth/logout">
      <button type="submit">Logout</button>
    </form>
  );
}

export default LogoutButton;
