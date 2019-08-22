import React, { useState } from 'react';

const ReadyButton = props => {
  const [clicked, clicker] = useState(false);
  const submitReady = () => {
    clicker(true);
    props.readyPlayer();
  };

  return (
    !clicked && (
      <button type="button" id="ready-button" onClick={submitReady}>
        Ready?
      </button>
    )
  );
};

export default ReadyButton;
