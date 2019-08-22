import React, { useState } from "react";
import io from "socket.io-client";
const socket = io();

const ReadyPlayer = props => {
  const [clicked, clicker] = useState(false);
  const submitReady = () => {
    clicker(true);
    socket.emit("ready");
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
