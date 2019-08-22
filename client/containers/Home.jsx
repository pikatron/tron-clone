import React, { Component } from "react";
import io from "socket.io-client";

import LogoutButton from "../components/LogoutButton";

import Board from "./Board";
import ReadyButton from "../components/ReadyButton";

const socket = io();

const readyPlayer = () => {
  socket.emit("ready");
};

function handleKeyPress(e) {
  console.log("working");
  const key = {
    ArrowLeft: "left",
    a: "left",

    ArrowRight: "right",
    d: "right",

    ArrowUp: "up",
    w: "up",

    ArrowDown: "down",
    s: "down"
  };

  if (key[e.key]) {
    socket.emit("turn", key[e.key]);
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", handleKeyPress);
  }

  render() {
    return (
      <div tabIndex="0">
        <h1>Home</h1>
        <Board socket={socket} />
        <ReadyButton readyPlayer={readyPlayer} />
        <LogoutButton />
      </div>
    );
  }
}

export default Home;
