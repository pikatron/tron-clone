import React from "react";

import GridBox from "../components/GridBox";
import Biker from "../components/Biker";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(50).fill(Array(50).fill(0))
    };

    this.props.socket.on("updateBoard", matrix => {
      this.setState({ board: matrix });
    });
  }

  render() {
    let gridPositions = [];
    for (let y = 0; y < 50; y++) {
      for (let x = 0; x < 50; x++) {
        let currentBox = this.state.board[y][x];
        if (currentBox === 1) {
          gridPositions.push(<GridBox key={"y" + y + "x" + x} color="blue" />);
        } else if (currentBox === 11) {
          gridPositions.push(
            <GridBox key={"y" + y + "x" + x} color="#00FFFF" />
          );
        } else if (currentBox === 2) {
          gridPositions.push(<GridBox key={"y" + y + "x" + x} color="red" />);
        } else if (currentBox === 22) {
          gridPositions.push(
            <GridBox key={"y" + y + "x" + x} color="	#FF69B4" />
          );
        } else {
          gridPositions.push(<GridBox key={"y" + y + "x" + x} color="green" />);
        }
      }
    }

    return (
      <div id="TotalBoard">
        <div id="MainBoard">{gridPositions}</div>
        {/* <Biker team="Red" socket={this.props.socket} />
        <Biker team="Blue" socket={this.props.socket} /> */}
      </div>
    );
  }
}

export default Board;
