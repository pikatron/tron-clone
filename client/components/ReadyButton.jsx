import React, { useState } from "react";

const ReadyPlayer = props => {
  const [clicked, clicker] = useState(false);
  const submitReady = () => {
    clicker(true);
    props.readyPlayer();
  };

  return (
    !clicked && (
      <button id="ready-button" onClick={submitReady}>
        Ready?
      </button>
    )
  );
};

export default ReadyPlayer;
